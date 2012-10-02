Ext.define("ECAT.view.ContactDetailView", {
    extend: 'Ext.form.Panel',
    xtype:'contactdetailview',
    config: {
    	baseCls : 'contactdetailview',
    	defaults: {
	       readOnly: true
	   	},
    	items: [
    		{
			    xtype: 'titlebar',
			    docked: 'top',
			    title: '联系方式'
			},
	        {
	            xtype: 'numberfield',
	            name: 'phone',
	            label: '电话：'
	        },
	        {
	            xtype: 'emailfield',
	            name: 'email',
	            label: '邮箱：'
	        },
	        {
	            xtype: 'textfield',
	            name: 'address',
	            label: '公司地址：'
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