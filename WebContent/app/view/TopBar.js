Ext.define("ECAT.view.TopBar", {
    extend: 'Ext.Panel',
    config : {
    	id : 'top_bar',
    	floatingCls : 'c-x-floating',
    	cls : 'touming',
    	hidden : true,
    	width: '100%',
    	height: 90,
    	top : 0,
    	border : 1,
    	html : '<div align="center" vlign="center"> <h1>全部(8)</h1><div>'
    }
});