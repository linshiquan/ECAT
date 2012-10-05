Ext.define("ECAT.view.ContactDetailView", {
    extend: 'Ext.form.Panel',
    xtype:'contactdetailview',
    config: {
    	id : 'contactDetailView',
    	//style : 'z-index : 5',
    	baseCls : 'contactdetailview',
    	defaults: {
	       readOnly: true
	   	},
    	items: [
	        {
	            xtype: 'textfield',
	            name: 'phone',
	            label: '电话：',
	            cls : 'odd'
	        },
	        {
	            xtype: 'emailfield',
	            name: 'email',
	            label: '邮箱：',
	            cls : 'even'
	        },
	        {
	            xtype: 'textfield',
	            name: 'address',
	            label: '公司地址：',
	            cls : 'odd'
	        },
	        {
	            xtype: 'textfield',
	            cls : 'even'
	        },
	        {
	            xtype: 'textfield',
	            cls : 'odd'
	        },
	        {
	            xtype: 'textfield',
	            cls : 'even'
	        },
	        {
	            xtype: 'textfield',
	            cls : 'odd'
	        },
	        {
	            xtype: 'textfield',
	            cls : 'even'
	        },
	        {
	            xtype: 'textfield',
	            cls : 'odd'
	        },
	        {
	            xtype: 'textfield',
	            cls : 'even'
	        }
    	],
    	fullscreen : true
    },
    initialize: function() {
    	this.setValues({
		    phone: '7758258',
		    email: 'ed@sencha.com',
		    address: '深圳市南山区高新南十二道'
		});
    }
});