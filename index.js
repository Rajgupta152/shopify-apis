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

//Customer get
const getCustomer = require('./router/customer/getApi/getCustomer');
const getSpecificCustomer = require('./router/customer/getApi/getSpecifcCustomer');
const getCustomerOrder = require('./router/customer/getApi/getCustomersOpenOrder');
const searchCustomerAccEmail = require('./router/customer/getApi/searchCustomerAccEmail');
const searchCustomerAccLastName = require('./router/customer/getApi/searchCustomerAccLastName');
const searchCustomerAccCountry = require('./router/customer/getApi/searchCustomerAccCountry');
const getCustomerAfterSpecificId = require('./router/customer/getApi/getCustomerAfterSpecificId');
const getCustomerWithSpecificFields = require('./router/customer/getApi/getCustomerWithSpecificFields');
const getSingalCustomer = require('./router/customer/getApi/getSingalCustomer');
const getCustomersPreviousOrder = require('./router/customer/getApi/getCustomersPreviousOrder');
const getCustomerCount = require('./router/customer/getApi/getCountOfAllCustomer');
const getCountOfCustomerChangedAfterSpecificDate = require('./router/customer/getApi/getCountOfCustomerChangedAfterSpecificDate');
const getCountOfCustomerCreatedAfterSpecificDate = require('./router/customer/getApi/getCountOfCustomerCreatedAfterSpecificData');
const searchCustomerWithTagsAndSpecificFields = require('./router/customer/getApi/searchCustomerWithTagsAndSpecificFields');
const searchCustomerWithVerifiedEmail = require('./router/customer/getApi/searchCustomerWithVerifiedEmail');

//Customer create
const createCustomer = require('./router/customer/postApi/createCustomerWithPassword');
const sendInviteEmail = require('./router/customer/postApi/createCustomerWithSendInviteEmail');
const createCustomerWithMetafield = require('./router/customer/postApi/createCustomerWithMetafield');
const createNewCustomer = require('./router/customer/postApi/createNewCustomer');
const createCustomerWithPhoneReturnError = require('./router/customer/postApi/createCustomerWithPhoneReturnError');
const createCustomerWithEmailReturnError = require('./router/customer/postApi/createCustomerWithEmailReturnError');
const createCustomerWithoutNameAndEmailReturnError = require('./router/customer/postApi/createCustomerWithouNameAndEmailReturnError')
const createCustomerWithActivationUrl = require('./router/customer/postApi/createCustomerWithActivationUrl');
const createCustomerWithActivationUrlReturnError = require('./router/customer/postApi/createCustomerWithActivationUrlReturnError');
const sendInvite = require('./router/customer/postApi/sendDefaultInvite');
const sendCustomizedInvite = require('./router/customer/postApi/sendCustomizeInvite')

//Customer update
const addMetafield = require('./router/customer/updateApi/addMetafield');
const updateCustomersMarketingOptInState = require('./router/customer/updateApi/updateCustomersMarketingOptInState');
const updateCustomersTags = require('./router/customer/updateApi/updateCustomersTags');
const updateCustomersDetails = require('./router/customer/updateApi/updateCustomersDetails');
const updateCustomerThatNotExistRetunsError = require('./router/customer/updateApi/updateCustomerThatNotExist')

//Customer delete
const deleteCustomer = require('./router/customer/deleteApi/deleteCustomer');


//Order get
const getOrder = require('./router/order/getApi/getAllOrders');
const getAllOrdersAfterSpecificId = require('./router/order/getApi/getAllOrderAfterSpecificId')
const getAllOrdersWithCertaindFields = require('./router/order/getApi/getAllOrdersWithCertainFields');
const getOrderLastUpdatedAfterSpecificDate = require('./router/order/getApi/getOrderLastUpdatedAfterSpecificDate');
const getOrderThatHaveAuthorized = require('./router/order/getApi/getOrderThatHaveAuthorized');
const getSpecificOrder = require('./router/order/getApi/getSpecificOrder');
const getSpecificOrderWithCertainFields = require('./router/order/getApi/getSpecificOrderWithCertainFields');
const getCountOfOrders = require('./router/order/getApi/getCountOfOrders');
const getCountOfAuthorizedPaymentOrder = require('./router/order/getApi/getCountOfAuthorizedPaymentOrder');

// Order create
const createAnOrder = require('./router/order/postApi/createAnOrder')

//Product get
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

// Product create
const createProduct = require('./router/product/postApi/createDraftProduct');
const withMultipleVariants = require('./router/product/postApi/withMultipleVariants');
const withMultipleOptions = require('./router/product/postApi/withMultipleOptions');
const withProductTag = require('./router/product/postApi/withProductTag');
const withProductImages = require('./router/product/postApi/withImages');
const createUnpublishProduct = require('./router/product/postApi/unpublishProduct');
const withMetaField = require('./router/product/postApi/withMetafield');
const withSeoTitleAndDescription = require('./router/product/postApi/withSeoTitleAndDescription');
const withoutTitleRetunError = require('./router/product/postApi/withoutTitle');

// Product update
const updateProduct = require('./router/product/updateApi/updateProduct');
const addMetafields = require('./router/product/updateApi/addMetafiels');
const hidePublishedProduct = require('./router/product/updateApi/hidePublishedProduct');
const updateProductVariant = require('./router/product/updateApi/updateProductVariant');
const updateImage = require('./router/product/updateApi/updateImage');
const clearingProductImage = require('./router/product/updateApi/clearingProductImage');
const reorderingProductImages = require('./router/product/updateApi/reorderingProductImages');
const reorderingProductVariants = require('./router/product/updateApi/reorderingProductVariants');
const updateSeoAndDesc = require('./router/product/updateApi/updateSeoAndDesc');
const updateStatus = require('./router/product/updateApi/updateStatus');
const updateTags = require('./router/product/updateApi/updateTag');
const updateTitle = require('./router/product/updateApi/updateTitle');

//Product delete
const deleteProduct = require('./router/product/deleteApi/deleteProduct');

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

//Customer get Api
app.use('/api',getCustomer);
app.use('/api',getSpecificCustomer);
app.use('/api',getCustomerOrder);
app.use('/api',searchCustomerAccEmail);
app.use('/api',searchCustomerAccLastName);
app.use('/api',searchCustomerAccCountry);
app.use('/api',getCustomerAfterSpecificId);
app.use('/api',getCustomerWithSpecificFields);
app.use('/api',getSingalCustomer);
app.use('/api',getCustomersPreviousOrder);
app.use('/api',getCustomerCount);
app.use('/api',getCountOfCustomerChangedAfterSpecificDate);
app.use('/api',getCountOfCustomerCreatedAfterSpecificDate);
app.use('/api',searchCustomerWithTagsAndSpecificFields);
app.use('/api',searchCustomerWithVerifiedEmail);

//Customer create api
app.use('/api',createCustomer);
app.use('/api',sendInviteEmail);
app.use('/api',createCustomerWithMetafield);
app.use('/api',createNewCustomer);
app.use('/api',createCustomerWithPhoneReturnError);
app.use('/api',createCustomerWithEmailReturnError);
app.use('/api',createCustomerWithoutNameAndEmailReturnError);
app.use('/api',createCustomerWithActivationUrl);
app.use('/api',createCustomerWithActivationUrlReturnError);
app.use('/api',sendInvite);
app.use('/api',sendCustomizedInvite);

// Customer update api
app.use('/api',addMetafield);
app.use('/api',updateCustomersMarketingOptInState);
app.use('/api',updateCustomersTags);
app.use('/api',updateCustomersDetails);
app.use('/api',updateCustomerThatNotExistRetunsError);

//Customer delete api
app.use('/api',deleteCustomer);



//Order get Api
app.use('/api',getOrder);
app.use('/api',getAllOrdersAfterSpecificId);
app.use('/api',getAllOrdersWithCertaindFields);
app.use('/api',getOrderLastUpdatedAfterSpecificDate);
app.use('/api',getOrderThatHaveAuthorized);
app.use('/api',getSpecificOrder);
app.use('/api',getSpecificOrderWithCertainFields);
app.use('/api',getCountOfOrders);
app.use('/api',getCountOfAuthorizedPaymentOrder);

//Order post Api
app.use('/api',createAnOrder);

//Product get api
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

//Product create api
app.use('/api',createProduct);
app.use('/api',withMultipleVariants);
app.use('/api',withMultipleOptions);
app.use('/api',withProductTag);
app.use('/api',withProductImages);
app.use('/api',createUnpublishProduct);
app.use('/api',withMetaField);
app.use('/api',withSeoTitleAndDescription);
app.use('/api',withoutTitleRetunError);

//Product update api
app.use('/api',updateProduct);
app.use('/api',addMetafields);
app.use('/api',hidePublishedProduct);
app.use('/api',updateProductVariant);
app.use('/api',updateImage);
app.use('/api',clearingProductImage);
app.use('/api',reorderingProductImages);
app.use('/api',reorderingProductVariants);
app.use('/api',updateSeoAndDesc);
app.use('/api',updateStatus);
app.use('/api',updateTags);
app.use('/api',updateTitle);


//Product delete api
app.use('/api',deleteProduct);

//discount api
app.use('/api',getDiscontCodeList);
app.use('/api',createDiscountCode);
app.use('/api',updateDiscountCode);
app.use('/api',deleteDiscountCode);


//Server
app.listen(8081, () => {
    console.log("Server is running on port",8081);
})