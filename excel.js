// https://www.filamento.com/public/Product/Label/Data.xlsx
const raw= fetch('../Data.xlsx').then(function (res) {
    /* get the data as a Blob */
    if (!res.ok) throw new Error("fetch failed");
    return res.arrayBuffer();
})
.then(function (ab) {
    /* parse the data when it is received */
    var data = new Uint8Array(ab);
    var workbook = XLSX.read(data, {
        type: "array"
    });

    var Raw= workbook.SheetNames[0];
    /* Get worksheet */
    var worksheet_0 = workbook.Sheets[Raw];
    
    let Raw_data= XLSX.utils.sheet_to_json(worksheet_0, { raw: true });
    console.log(Raw_data);
    return Raw_data;
});

const lumen= fetch('../Data.xlsx').then(function (res) {
        /* get the data as a Blob */
        if (!res.ok) throw new Error("fetch failed");
        return res.arrayBuffer();
    })
    .then(function (ab) {
        /* parse the data when it is received */
        var data = new Uint8Array(ab);
        var workbook = XLSX.read(data, {
            type: "array"
        });
    
        var Lumen= workbook.SheetNames[2];
        /* Get worksheet */
        var worksheet_2 = workbook.Sheets[Lumen];
        
        let Lumen_data= XLSX.utils.sheet_to_json(worksheet_2, { raw: true });
        console.log(lumen)
        return Lumen_data;
    });



const Info= fetch('../Data.xlsx').then(function (res) {
        /* get the data as a Blob */
        if (!res.ok) throw new Error("fetch failed");
        return res.arrayBuffer();
    })
    .then(function (ab) {
        /* parse the data when it is received */
        var data = new Uint8Array(ab);
        var workbook = XLSX.read(data, {
            type: "array"
        });
    
        var In= workbook.SheetNames[1];
        /* Get worksheet */
        var worksheet_1 = workbook.Sheets[In];
        
        let Info_data= XLSX.utils.sheet_to_json(worksheet_1, { raw: true });
        console.log(Info_data)
        return Info_data
    });




const Submit = async () => {
        lu = await lumen;
        In = await Info;
        ra = await raw;

        document.getElementById("error").innerHTML = '';
        const fa= document.getElementById('Family').value
        const mo=document.getElementById('Mounting').value
        const po=document.getElementById('Power').value
        const cri=document.getElementById('CRI').value
        const cct=document.getElementById('CCT').value
        const dri=document.getElementById('Driver').value
        document.getElementById('Part').innerHTML=`${fa}-${mo}-${po}-${cri}-${cct}-${dri}-AN-B90-000-000-FL`
        document.getElementById('PartNumber_card').innerHTML=`${fa}-${mo}-${po}-${cri}-${cct}-${dri}-AN-B90-000-000-FL`;

        //Title
        if (dri==='VH'){
            document.getElementById('Title').innerHTML=`${fa} LAMP E${mo} HYBRID`
            document.getElementById('Title_card').innerHTML=`${fa} LAMP E${mo} HYBRID <strong>(Modelo, <span>모델, モデル</span>)</strong>`
        }
        if (dri=='VL'){
            if (mo==='FIX'){
                if(fa==='V2M'){
                    document.getElementById('Title').innerHTML=`${fa} FIXTURE ${cri}0 CRI`
                    document.getElementById('Title_card').innerHTML=`${fa} FIXTURE ${cri}0 CRI <strong>(Modelo, <span>모델, モデル</span>)</strong>` 
                }
               if (fa==='V2L'){
                    document.getElementById('Title').innerHTML=`${fa} FIXTURE`
                    document.getElementById('Title_card').innerHTML=`${fa} FIXTURE <strong>(Modelo, <span>모델, モデル</span>)</strong>` 
               }
            }else{
                document.getElementById('Title').innerHTML=`${fa} LAMP E${mo} ${cri}0 CRI`
                document.getElementById('Title_card').innerHTML=`${fa} LAMP E${mo} ${cri}0 CRI <strong>(Modelo,  <span>모델, モデル</span>)</strong>`
            }
        }

        //Product code
        const code = ra.filter((item)=>{
            const temp=document.getElementById('Part').innerHTML
            console.log(temp)
            return item&&item.PartNumber===temp
        })
        const zeroPad = (num, places) => String(num).padStart(places, '0')

        document.getElementById('Code').innerHTML=code[0]?`${zeroPad(code[0].Code, 5)}`:`<span class="error">N/A</span>`
        document.getElementById('PartNumber_card').innerHTML+=code[0]?` (${zeroPad(code[0].Code, 5)})`:``


        const e_value = In.filter((item)=>{
            return item&&item.Family===fa&&item.Mounting===mo&&item.Power===parseInt(po)&&item.Driver===dri

        })

        document.getElementById('Electrical').innerHTML= e_value[0]?`${e_value[0].Electrical_Input}`:`<span class="error">N/A</span>`
        document.getElementById('Electrical_card').innerHTML= e_value[0]?`${e_value[0].Electrical_Input}`:`<span class="error">N/A</span>`
        
       //Optical Output
        const lu_value = lu.filter((item)=>{
            return item.Family===fa&&item.Power===parseInt(po)&&item.CCT===parseInt(cct)&&item.CRI.toString()===cri.toString()
        })
        document.getElementById('Optical').innerHTML=lu_value[0]? `${lu_value[0].Lumen} Lumens, xxx cd, CCT ${cct}00K, CRI>${cri}0`:`<span class="error">N/A Lumens, xxx cd, CCT ${cct}00K, CRI>${cri}0</span>`
        document.getElementById('Optical_card').innerHTML=lu_value[0]? `${lu_value[0].Lumen} Lumens, xxx cd, CCT ${cct}00K, CRI>${cri}0`:`<span class="error">N/A Lumens, xxx cd, CCT ${cct}00K, CRI>${cri}0</span>`

        //Warning 
        document.getElementById('Warning').innerHTML=e_value[0]?`${e_value[0].Warning}`+`${e_value[0].Warning2}`:`<span class="error">N/A</span>`
        document.getElementById('Warning_card').innerHTML=e_value[0]?`${e_value[0].Warning}`+`<span class='KJ_Fonts_Warning'>${e_value[0].Warning2}</span>`:`<span class="error">N/A</span>`

        //Certification
        document.getElementById('Certification').src=e_value[0]?`${e_value[0].Certification}`:`<span class="error">N/A</span>`
        document.getElementById('cert').innerHTML=e_value[0]?`<img src=${e_value[0].Certification2}></img>`:``

        window.onerror = function(e){
        document.getElementById("error").innerHTML = 'No Value, please select again'
        }
        

    }
