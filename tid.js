const soap = require('soap');


//Checking people with their real ID and infos (name, surname)
function isCorrect(infos){

    const verifyString = 'https://tckimlik.nvi.gov.tr/Service/KPSPublic.asmx?WSDL';

    infos.Ad = infos.Ad.toLocaleUpperCase('tr-TR');
    infos.Soyad = infos.Soyad.toLocaleUpperCase('tr-TR');
    
    return new Promise((resolve, reject) => {
        if(infos.Ad == undefined || infos.Soyad == undefined || infos.TCKimlikNo == undefined || infos.DogumYili == undefined){
            const err =  new Error('Please enter your info object like this. {Ad: string, Soyad: string, TCKimlikNo: number, DogumYili: number}');
            reject(err);
        }
        soap.createClient(verifyString, function (err, client) {
    
            if(err){
                const err = new Error('Something happened while ID checking.');
                reject(err);
            }else{
                client.TCKimlikNoDogrula(infos, function(err, result){
                    if(err){
                        const err = new Error('Something happened while ID checking.');
                        reject(err);
                    }else{
                        resolve({result: result.TCKimlikNoDogrulaResult, data: infos});
                    }
                })
            }
        
        });
    }); 
     
    
}

//Just checks the Turkish ID rule (11 length, last digit % 2 = 0)
function isRuleOK(id) {
  id = String(id);

  if(isNaN(parseInt(id))) {
    return {result: false, id};
  }else{
    const lastDigit = String(id).slice(-1);

    if(id.length == 11 && (lastDigit % 2) == 0) 
      return {result: true, id}
    else
      return {result: false, id}
  }
} 

module.exports = {
  isCorrect,
  isRuleOK
} 
