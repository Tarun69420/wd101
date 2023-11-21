let retrieve=()=>{
    let x=localStorage.getItem("user-entries");
    if (x)
    {
        x=JSON.parse(x);
    }
    else
    {
        x=[];
    }
    return x
};
var i=0;
let display=()=>{
    const entries = retrieve();
    const tableentry= entries.map=((entri)=>{
        const namedata = `<td class="border px-4 py-2">${entri.name}</td>`;
        const emaildata = `<td class="border px-4 py-2">${entri.email}</td>`;
        const passworddata = `<td class="border px-4 py-2">${entri.password}</td>`;
        const dobdata = `<td class="border px-4 py-2">${entri.dob}</td>`;
        const termsdata = `<td class="border px-4 py-2">${entri.acceptTerms}</td>`;
        const row = `<tr>${namedata} ${emaildata} ${passworddata} ${dobdata} ${termsdata}</tr>`;
        return row.join("</br>");;
        
    });

    
};
function xy()
{   
    const data =retrieve();
    table=[]
    console.log(data);
    table.push("<tr><td>"+data[i].name+"</td>)");
    table.push("<td>"+data[i].email+"</td>");
    table.push("<td>"+data[i].password+"</td>");
    table.push("<td>"+data[i].dob+"</td>");
    table.push("<td>"+data[i].acceptTerms+"</td></tr>");
    document.getElementById("tab").innerHTML+=table.join("\n");
    i++;
    };
    
let entries=retrieve();
const save=()=>{

    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    let dob=document.getElementById("dob").value;
    let acceptTerms=document.getElementById("acceptTerms").checked;

    const entry={
        name,
        email,
        password,
        dob,
        acceptTerms
    };

    entries.push(entry);
    localStorage.setItem("user-entries",JSON.stringify(entries));
    xy();
};


