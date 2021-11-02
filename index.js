import soap from 'soap';

export function checkTRId(infos){

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
                        resolve(result.TCKimlikNoDogrulaResult);
                    }
                })
            }
        
        });
    }); 
     
    
}