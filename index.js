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
const createAnOrder = require('./router/order/postApi/createAComprehnsiveOrder');
const createPartiallyPaidOrderWithNewCustomer = require('./router/order/postApi/createPartiallyPaidOrderWithNewCustomer');
const createPendingOrderWithExistingCustomer = require('./router/order/postApi/createPendingOrderWithExistingCustomer');
const createSimpleOrderWithFullfillment = require('./router/order/postApi/createSimpleOrderWithFullfillment');
const createOrderWithOnlyVariantId = require('./router/order/postApi/createOrderWithOnlyVariantId');
const createOrderWithoutOrderAndFullfillmentReciept = require('./router/order/postApi/createOrderWithoutOrderAndFullfillmentReciept')
const createOrderWithOrderAndShipmentConfirmation = require('./router/order/postApi/createOrderWithOrderAndShipmentConfirmation')
const createOrderAndApplyDiscount = require('./router/order/postApi/createOrderAndApplyDiscount');
const createOrderWithTaxLines = require('./router/order/postApi/createOrderWithTaxLines');
const createOrderWithTaxLineBothLineItemsAndOrderRetunrError = require('./router/order/postApi/createOrderWithTaxLineBothLineItemsAndOrderRetunrError');

// Order cancel
const cancelAnOrder = require('./router/order/postApi/cancelAnOrder');
const cancelAndRefundOrderUsingAmount = require('./router/order/postApi/cancelAndRefundOrderUsingAmount');
const cancelAndRefundOrderUsingRefund = require('./router/order/postApi/cancelAndRefundOrderUsingRefund');
const cancelOrderThatIsPaidAndFullfillmentReturnError = require('./router/order/postApi/cancelOrderThatIsPaidAndFullfillmentReturnError')

//Order close
const closeAnOrder = require('./router/order/postApi/closeAnOrder');

//Order re-open
const reOpenAClosedOrder = require('./router/order/postApi/reOpenAClosedOrder');

//Order update
const addMetafieldsToAnOrder = require('./router/order/updateApi/addMetafieldsToAnOrder');
const addNoteToOrder = require('./router/order/updateApi/addNoteToOrder');
const addNoteAttributeToOrder = require('./router/order/updateApi/addNoteAttributeToOrder');
const changeOrdersEmail = require('./router/order/updateApi/changeOrdersEmail');
const changeOrdersPhone = require('./router/order/updateApi/changeOrdersPhone');
const changeCustomerAcceptsMarketing = require('./router/order/updateApi/changeCustomerAcceptsMarketing');
const removeCustomerFromAnOrder = require('./router/order/updateApi/removeCustomerFromAnOrder');
const updateOrdersTags = require('./router/order/updateApi/updateOrdersTags');
const updateShippingAddressOfOrder = require('./router/order/updateApi/updateShippingAddressOfOrder');

//Order delete
const deleteOrder = require('./router/order/deleteApi/deleteOrder');

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

//Discont create
const createDiscountCodeCreationJob = require('./router/discountCode/postApi/createDiscountCodeCreationJob')
const createDiscountCode = require('./router/discountCode/postApi/createDiscountCode');

//Discount get
const getLocationOfDiscountCode = require('./router/discountCode/getApi/getLocationOfDiscountCode');
const getListOfDiscountCode = require('./router/discountCode/getApi/getListOfDiscountCode');
const getSingalDiscountCode = require('./router/discountCode/getApi/getSingalDiscountCode');

//Discount update
const updateDiscountCode = require('./router/discountCode/updateApi/updateDiscountCode');

//Discount delete
const deleteDiscountCode = require('./router/discountCode/deleteApi/deleteDiscountCode');

//Price rule get
const getlistOfPriceRule = require('./router/priceRule/getApi/getListOfPriceRule');
const getPriceRuleAfterSpecificId = require('./router/priceRule/getApi/getPriceRuleAfterSpecificId');
const getSingalPriceRule = require('./router/priceRule/getApi/getSingalPriceRule');

//Price rule create
const createBuyXGetYPriceRule = require('./router/priceRule/postApi/createBuyXGetYPriceRule');
const createPriceRuleThatGivesTheBuyerAmountOfAnOrder = require('./router/priceRule/postApi/createPriceRuleThatGivesTheBuyerAmountOfAnOrder');
const createPriceRuleThatGivesTheBuyer15PercentOff = require('./router/priceRule/postApi/createPriceRuleThatGivesTheBuyer15PercentOfSpecificCollection');
const createPriceRuleThatHaveGivesBuyerFreeShipping = require('./router/priceRule/postApi/createPriceRuleThatHaveGivesBuyerFreeShipping');

//Price rule update
const updateTitleOfPriceRule = require('./router/priceRule/updateApi/updateTitleOfPriceRule');

//Price rule delete
const deletePriceRule = require('./router/priceRule/deleteApi/deletePriceRule');

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

//Order create Api
app.use('/api',createAnOrder);
app.use('/api',createPartiallyPaidOrderWithNewCustomer);
app.use('/api',createPendingOrderWithExistingCustomer);
app.use('/api',createSimpleOrderWithFullfillment);
app.use('/api',createOrderWithOnlyVariantId);
app.use('/api',createOrderWithoutOrderAndFullfillmentReciept);
app.use('/api',createOrderWithOrderAndShipmentConfirmation);
app.use('/api',createOrderAndApplyDiscount);
app.use('/api',createOrderWithTaxLines);
app.use('/api',createOrderWithTaxLineBothLineItemsAndOrderRetunrError);

//Order cancel api
app.use('/api',cancelAnOrder);
app.use('/api',cancelAndRefundOrderUsingAmount);
app.use('/api',cancelAndRefundOrderUsingRefund);
app.use('/api',cancelOrderThatIsPaidAndFullfillmentReturnError);

//Order close api
app.use('/api',closeAnOrder);

//Order open api
app.use('/api',reOpenAClosedOrder);

//Order update api
app.use('/api',addMetafieldsToAnOrder);
app.use('/api',addNoteToOrder);
app.use('/api',addNoteAttributeToOrder);
app.use('/api',changeOrdersEmail);
app.use('/api',changeOrdersPhone);
app.use('/api',changeCustomerAcceptsMarketing);
app.use('/api',removeCustomerFromAnOrder);
app.use('/api',updateOrdersTags);
app.use('/api',updateShippingAddressOfOrder);

//Order delete api
app.use('/api',deleteOrder);

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

//discount create api
app.use('/api',createDiscountCodeCreationJob);
app.use('/api',createDiscountCode);

//discount get api
app.use('/api',getLocationOfDiscountCode);
app.use('/api',getListOfDiscountCode);
app.use('/api',getSingalDiscountCode);

//discount update api
app.use('/api',updateDiscountCode);

//discount delete api
app.use('/api',deleteDiscountCode);

//price rule get api
app.use('/api',getlistOfPriceRule);
app.use('/api',getPriceRuleAfterSpecificId);
app.use('/api',getSingalPriceRule);

//price rule create api
app.use('/api',createBuyXGetYPriceRule);
app.use('/api',createPriceRuleThatGivesTheBuyerAmountOfAnOrder);
app.use('/api',createPriceRuleThatGivesTheBuyer15PercentOff);
app.use('/api',createPriceRuleThatHaveGivesBuyerFreeShipping);

//price rule update api
app.use('/api',updateTitleOfPriceRule);

// price rule delete api
app.use('/api',deletePriceRule);

//Server
app.listen(8081, () => {
    console.log("Server is running on port",8081);
})