const express = require("express");

//shop-detail
const country = require('./router/shop_detail/country');
const shopInfo = require('./router/shop_detail/shop_info');
const policy = require('./router/shop_detail/policy');
const termOfService = require('./router/shop_detail/termOfService');
const shippingZone = require('./router/shop_detail/shipingZone');

//Collection
const getCollection = require('./router/collection/getCollection');
const createCollection = require('./router/collection/createCollection');
const deleteCollection = require('./router/collection/deleteCollection');

//Customer
const getCustomer = require('./router/customer/getApi/getCustomer');
const getSpecificCustomer = require('./router/customer/getApi/getSpecifcCustomer');
const getCustomerOrder = require('./router/customer/getApi/getCustomerOrder');
const searchCustomerAccEmail = require('./router/customer/getApi/searchCustomerAccEmail');
const searchCustomerAccLastName = require('./router/customer/getApi/searchCustomerAccLastName');
const searchCustomerAccCountry = require('./router/customer/getApi/searchCountryAccCountry');

const createCustomer = require('./router/customer/postApi/createCustomer');
const sendInviteEmail = require('./router/customer/postApi/sendInviteEmail');
const sendInvite = require('./router/customer/postApi/sendInvite');

const updateCustomer = require('./router/customer/updateCustomer');
const deleteCustomer = require('./router/customer/deleteCustomer');


//Order Api
const getOrder = require('./router/order/getApi/getOrder');

//Product
const productList = require('./router/product/getApi/list/productList');
const afterSpecificId = require('./router/product/getApi/list/afterSpecificId');
const specificProductList = require('./router/product/getApi/list/specificProductList');
const productBelongsToCollection = require('./router/product/getApi/list/productBelongsToCollection');
const presentmentCurrencies = require('./router/product/getApi/list/productWithPresentmentCurrencies');
const withSomeAttr = require('./router/product/getApi/list/withSomeAttr');
const singalProduct = require('./router/product/getApi/get/singalProduct');
const particularField = require('./router/product/getApi/get/particularFields');
const allProductCount = require('./router/product/getApi/count/allProduct');
const collectionProductCount = require('./router/product/getApi/count/collectionProduct');

const createProduct = require('./router/product/postApi/createDraftProduct');
const withMultipleVariants = require('./router/product/postApi/withMultipleVariants');
const withMultipleOptions = require('./router/product/postApi/withMultipleOptions');
const withProductTag = require('./router/product/postApi/withProductTag');
const withProductImages = require('./router/product/postApi/withImages');
const createUnpublishProduct = require('./router/product/postApi/unpublishProduct');
const withMetaField = require('./router/product/postApi/withMetafield');
const withSeoTitleAndDescription = require('./router/product/postApi/withSeoTitleAndDescription');
const withoutTitleRetunError = require('./router/product/postApi/withoutTitle');

const deleteProduct = require('./router/product/deleteProduct');
const updateProduct = require('./router/product/updateProduct');

//Discont
const getDiscontCodeList = require('./router/discount/getDiscountList');
const createDiscountCode = require('./router/discount/createDiscountCode');
const updateDiscountCode = require('./router/discount/updateDiscountCode');
const deleteDiscountCode = require('./router/discount/deleteDiscountCode');
const app = express();
app.use(express.json());

app.get('/', (req,resp) => {
    resp.send("Hello, Welcome");
})

//Store detail Api
app.use('/api',country);
app.use('/api',shopInfo);
app.use('/api',policy);
app.use('/api',termOfService);
app.use('/api',shippingZone);

//Collection Apis
app.use('/api',getCollection);
app.use('/api',createCollection);
app.use('/api',deleteCollection);

//Customer Api
app.use('/api',getCustomer);
app.use('/api',getSpecificCustomer);
app.use('/api',getCustomerOrder);
app.use('/api',searchCustomerAccEmail);
app.use('/api',searchCustomerAccLastName);
app.use('/api',searchCustomerAccCountry);

app.use('/api',createCustomer);
app.use('/api',sendInviteEmail);
app.use('/api',sendInvite);

app.use('/api',updateCustomer);
app.use('/api',deleteCustomer);



//Order Api
app.use('/api',getOrder);

//Product api
app.use('/api',productList);
app.use('/api',afterSpecificId);
app.use('/api',specificProductList);
app.use('/api',productBelongsToCollection);
app.use('/api',presentmentCurrencies);
app.use('/api',withSomeAttr);
app.use('/api',singalProduct);
app.use('/api',particularField);
app.use('/api',allProductCount);
app.use('/api',collectionProductCount);

app.use('/api',createProduct);
app.use('/api',withMultipleVariants);
app.use('/api',withMultipleOptions);
app.use('/api',withProductTag);
app.use('/api',withProductImages);
app.use('/api',createUnpublishProduct);
app.use('/api',withMetaField);
app.use('/api',withSeoTitleAndDescription);
app.use('/api',withoutTitleRetunError);

app.use('/api',deleteProduct);
app.use('/api',updateProduct);
app.use('/api',updateProduct);


//discount api
app.use('/api',getDiscontCodeList);
app.use('/api',createDiscountCode);
app.use('/api',updateDiscountCode);
app.use('/api',deleteDiscountCode);

app.listen(8081, () => {
    console.log("Server is running on port",8081);
})