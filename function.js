//Download PDF



        function generatePDF() {
				// Choose the element that our invoice is rendered in.
				const element = document.getElementById('cert_img');
                const PartNumber= document.getElementById('Part').innerText
				// Choose the element and save the PDF for our user.
                const today= new Date();
                const zeroPad = (num, places) => String(num).padStart(places, '0')
                const year = today.getFullYear().toString().slice(-2)
                const date = year+zeroPad((today.getMonth()+1),2)+zeroPad(today.getDate(),2);

                var opt = {
                margin:       0.5,
                filename:     `LP1-${PartNumber}-${date}.pdf`,
                image:        { type: 'jpeg', quality: 1 },
                html2canvas:  { scale: 20},
                jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
                };
				html2pdf().set(opt).from(element).save();
			}

        function Clear(){
            document.getElementById("Family").value=document.getElementById("Family").getElementsByTagName('option')[0];
            document.getElementById("Mounting").value=document.getElementById("Mounting").getElementsByTagName('option')[0];
            document.getElementById("Power").value=document.getElementById("Power").getElementsByTagName('option')[0];
            document.getElementById("CRI").value=document.getElementById("CRI").getElementsByTagName('option')[0];
            document.getElementById("CCT").value=document.getElementById("CCT").getElementsByTagName('option')[0];
            document.getElementById("Driver").value=document.getElementById("Driver").getElementsByTagName('option')[0];
            document.getElementById('Title').innerHTML="";
            document.getElementById('Part').innerHTML="";
            document.getElementById('Electrical').innerHTML="";
            document.getElementById('Optical').innerHTML="";
            document.getElementById('Warning').innerHTML="";
            document.getElementById('Certification').src="";
            
            //clean up PDF Card
            document.getElementById('cert').innerHTML="";
            document.getElementById('Title_card').innerHTML="";
            document.getElementById('PartNumber_card').innerHTML="";
            document.getElementById('Electrical_card').innerHTML="";
            document.getElementById('Optical_card').innerHTML="";
            document.getElementById('Warning_card').innerHTML="";
            document.getElementById('Code').innerHTML="";
        }
        //Family
         doThisOnChangeFa = function( value, optionIndex )
        {
            if ( optionIndex != null )
            {
                var option = document.getElementById("Family").options[optionIndex];
                option.selected = true;
                value = option.value;
                
            }
            console.log(value)
        }

        //Mounting change
        doThisOnChangeMount= function( value, optionIndex )
        {
            if ( optionIndex != null )
            {
                var option = document.getElementById("Mounting").options[optionIndex];
                option.selected = true;
                value = option.value;
                
            }
            console.log(value)
        }

        //Power change
        doThisOnChangePower = function( value, optionIndex )
        {
            if ( optionIndex != null )
            {
                var option = document.getElementById( "Power" ).options[optionIndex];
                option.selected = true;
                value = option.value;
                
            }
            console.log(value)
        }

        //CRI change
        doThisOnChangeCRI = function( value, optionIndex )
        {
            if ( optionIndex != null )
            {
                var option = document.getElementById( "CRI" ).options[optionIndex];
                option.selected = true;
                value = option.value;
                
            }
            console.log(value)
        }

        //CCT change
        doThisOnChangeCCT = function( value, optionIndex )
        {
            if ( optionIndex != null )
            {
                var option = document.getElementById("CCT" ).options[optionIndex];
                option.selected = true;
                value = option.value;
                
            }
            console.log(value)
        }

         //Driver change
         doThisOnChangeDriver = function( value, optionIndex )
        {
            if ( optionIndex != null )
            {
                var option = document.getElementById("Driver" ).options[optionIndex];
                option.selected = true;
                value = option.value;
                
            }
            console.log(value)
        }
       