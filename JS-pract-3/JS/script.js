function fun1() {
    var rtl=document.getElementById('rtl').value;
    var rtr=document.getElementById('rtr').value;
    var rbr=document.getElementById('rbr').value;
    var rbl=document.getElementById('rbl').value;
    var ttr=document.getElementById('ttr');
    var ttl=document.getElementById('ttl');
    var tbr=document.getElementById('tbr');
    var tbl=document.getElementById('tbl');

    var block=document.getElementById('block');

    ttl.value=rtl;
    ttr.value=rtr;
    tbl.value=rbl;
    tbr.value=rbr;

    block.style.borderRadius=rtl+'px ' +rtr +'px ' +rbr +'px '+rbl +'px ';
}