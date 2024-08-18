require("dotenv").config();
const jwt = require('jsonwebtoken'); 
//const { jwtDecode } = require('jwt-decode');

const handle = async (req, res, next) => {
    const { API_KEY } = process.env;
    const { headers, body, params, query , url , method } = req;

    console.log('Request route : ' + url);
    console.log('Request method : ' + method);
    console.log('Request query');
    console.log(JSON.stringify(query));
    console.log('Request parameter');
    console.log(JSON.stringify(params));
    console.log('Request body');
    console.log(JSON.stringify(body));

    const url_other = [
       ['POST' , '/api/notification/NotiSearch'] ,
       ['GET' , '/api/notification'] ,
       ['POST' , '/api/external/token'] ,  
    ];

    const url_jwt = [
    ];

    const url_jwtOrclient = [
        ['POST','/api/external/checkTradeIn'],
        ['POST','/api/external/createTradeIn'],
        ['POST','/api/external/createServiceOrder'],
        ['POST','/api/external/smartdashboard'],
        ['POST','/api/external/updatepart'],
        ['POST','/api/external/partusing'],
        ['POST','/api/external/updateProductInfo'],
        ['POST','/api/external/repairData'],
        ['POST','/api/external/updateSerialPackage'],
        ['POST','/api/external/exchangeWarranty'],
        ['GET','/api/external/repairDetail'],
        ['POST','/api/external/movePackageRepairInfo'],
        ['POST','/api/external/moveRepairInfo']
    ];

    const checkpath_other = url_other.filter((value) => (value[0] == method) && (value[1] == `/api${url}`)).length

    const checkpath_jwt = url_jwt.filter((value) => (value[0] == method) && (value[1] == `/api${url}`)).length;

    const checkpath_jwtOrClient = url_jwtOrclient.filter((value) => (value[0] == method) && (value[1] == `/api${url}`)).length;

    const cert = `-----BEGIN PUBLIC KEY-----
${process.env.JWT_SECRET}
-----END PUBLIC KEY-----`;

    if(checkpath_jwt){
        console.log('Need jwt');
        // Header names in Express are auto-converted to lowercase
        let token = req.headers['x-access-token'] || req.headers['authorization']; 

        // Remove Bearer from string
        token = token.replace(/^Bearer\s+/, "");

        if (token) {
            jwt.verify(token, cert, (err, decoded) => {
                console.log(decoded);
                //console.log(err);
                if (err) {
                    return res.json({
                        success: false,
                        message: 'Token is not valid'
                    });
                }
                req.decoded = decoded;
                next();
            });
            //next();
        } else {
            return res.status(403).json({
                success: false,
                message: 'Bearer Toekn is not specified.',
                result: null
            })
        } 
    }
    else if(checkpath_jwtOrClient){
        console.log('Need Jwt or API Key');
        let token = req.headers['x-access-token'] || req.headers['authorization']; 

        // Remove Bearer from string
        if (token) {
            token = token.replace(/^Bearer\s+/, "");
            
            jwt.verify(token, cert, (err, decoded) => {
                if (err) {
                    return res.json({
                        success: false,
                        message: 'Token is not valid'
                    });
                }
                req.decoded = decoded;
                next();
            });
            //next();
        }
        else if(headers.api_key && !checkpath_other){
            if(API_KEY == headers.api_key){
                return next();
            }
            else{
                return res.status(403).json({
                    success: false,
                    message: 'API Key is not valid.',
                    result: null
                });   
            }
        }
        else{
            return res.status(403).json({
                success: false,
                message: 'Token is null.',
                result: null
            })
        }
    }
    else if(checkpath_other) {
        return next();
    } else if(!headers.api_key && !checkpath_other) {
        return res.status(403).json({
            success: false,
            message: 'Token is null.',
            result: null
        })
    } else if(API_KEY == headers.api_key && !checkpath_other) {
        return next();
    } else {
        return res.status(403).json({
            success: false,
            message: 'Access Denied.',
            result: null
        })
    }
    
}

module.exports = handle;