//表格切换相关js
sheet.cliChange = function(){
    $(document).on('click','.sheetItem',function(){
        if($(this).hasClass('incomeSheet')){
            $('.mainTitle').html('利润表（电站）');
            base.addHtml('../pages/sheetPage/incomeSheet.html','.sheetContainer');
            sheet.scrollChange('.sheetContainerA');
        }else if($(this).hasClass('balanceSheet')){
            $('.mainTitle').html('资产负债表');
            base.addHtml('../pages/sheetPage/balanceSheet.html','.sheetContainer');
            sheet.scrollChange('.sheetContainerB');
        }else if($(this).hasClass('investmentSheet')){
            $('.mainTitle').html('现金流量表（全投资）');
            base.addHtml('../pages/sheetPage/investmentSheet.html','.sheetContainer');
            sheet.scrollChange('.sheetContainerC');
        }else if($(this).hasClass('powerStationSheet')){
            $('.mainTitle').html('现金流量表（电站）');
            base.addHtml('../pages/sheetPage/powerStationSheet.html','.sheetContainer');
            sheet.scrollChange('.sheetContainerD');
        }else if($(this).hasClass('capitalSheet')){
            $('.mainTitle').html('现金流量表（资本表）');
            base.addHtml('../pages/sheetPage/capitalSheet.html','.sheetContainer');
            sheet.scrollChange('.sheetContainerE');
        }
    })
}

$(function(){
    base.addHtml('../pages/sheetPage/incomeSheet.html','.sheetContainer');//插入表格页面
    sheet.scrollChange('.sheetContainerA');//表格变化相关js
    sheet.cliChange();//表格切换相关js   
});