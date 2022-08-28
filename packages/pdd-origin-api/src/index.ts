// 物流API
import {
  PDD_LOGISTICS_ADDRESS_GET,
  PDD_LOGISTICS_ADDRESS_GET_RESPONSE_KEY,
  PddLogisticsAddressGetRequestInterface,
  PddLogisticsAddressGetResponseInterface,
  PddLogisticsAddressGetLogisticsAddressGetResponseResponseInterface,
  PDD_LOGISTICS_ADDRESS_GET_LIMITERS,
} from './wuLiu/PddLogisticsAddressGet';
import {
  PDD_LOGISTICS_AVAILABLE_COMPANY_RECOMMEND,
  PddLogisticsAvailableCompanyRecommendRequestInterface,
  PddLogisticsAvailableCompanyRecommendResponseInterface,
  PDD_LOGISTICS_AVAILABLE_COMPANY_RECOMMEND_LIMITERS,
} from './wuLiu/PddLogisticsAvailableCompanyRecommend';
import {
  PDD_LOGISTICS_COMPANIES_GET,
  PDD_LOGISTICS_COMPANIES_GET_RESPONSE_KEY,
  PddLogisticsCompaniesGetRequestInterface,
  PddLogisticsCompaniesGetResponseInterface,
  PddLogisticsCompaniesGetLogisticsCompaniesGetResponseResponseInterface,
  PDD_LOGISTICS_COMPANIES_GET_LIMITERS,
} from './wuLiu/PddLogisticsCompaniesGet';
import {
  PDD_LOGISTICS_ISV_TRACE_NOTIFY_SUB,
  PddLogisticsIsvTraceNotifySubRequestInterface,
  PddLogisticsIsvTraceNotifySubResponseInterface,
  PDD_LOGISTICS_ISV_TRACE_NOTIFY_SUB_LIMITERS,
} from './wuLiu/PddLogisticsIsvTraceNotifySub';
import {
  PDD_LOGISTICS_ONLINE_SEND,
  PDD_LOGISTICS_ONLINE_SEND_RESPONSE_KEY,
  PddLogisticsOnlineSendRequestInterface,
  PddLogisticsOnlineSendResponseInterface,
  PddLogisticsOnlineSendLogisticsOnlineSendResponseResponseInterface,
  PDD_LOGISTICS_ONLINE_SEND_LIMITERS,
} from './wuLiu/PddLogisticsOnlineSend';
import {
  PDD_LOGISTICS_ORDERTRACE_GET,
  PddLogisticsOrdertraceGetRequestInterface,
  PddLogisticsOrdertraceGetResponseInterface,
  PDD_LOGISTICS_ORDERTRACE_GET_LIMITERS,
} from './wuLiu/PddLogisticsOrdertraceGet';
// 订单API
import {
  PDD_ERP_ORDER_SYNC,
  PddErpOrderSyncRequestInterface,
  PddErpOrderSyncResponseInterface,
  PDD_ERP_ORDER_SYNC_LIMITERS,
} from './dingDan/PddErpOrderSync';
import {
  PDD_ORDER_BASIC_LIST_GET,
  PDD_ORDER_BASIC_LIST_GET_RESPONSE_KEY,
  PddOrderBasicListGetRequestInterface,
  PddOrderBasicListGetResponseInterface,
  PddOrderBasicListGetOrderBasicListGetResponseResponseInterface,
} from './dingDan/PddOrderBasicListGet';
import {
  PDD_ORDER_INFORMATION_GET,
  PDD_ORDER_INFORMATION_GET_RESPONSE_KEY,
  PddOrderInformationGetRequestInterface,
  PddOrderInformationGetResponseInterface,
  PddOrderInformationGetOrderInfoGetResponseResponseInterface,
  PDD_ORDER_INFORMATION_GET_LIMITERS,
} from './dingDan/PddOrderInformationGet';
import {
  PDD_ORDER_LIST_GET,
  PDD_ORDER_LIST_GET_RESPONSE_KEY,
  PddOrderListGetRequestInterface,
  PddOrderListGetResponseInterface,
  PddOrderListGetOrderListGetResponseResponseInterface,
  PDD_ORDER_LIST_GET_LIMITERS,
} from './dingDan/PddOrderListGet';
import {
  PDD_ORDER_NOTE_UPDATE,
  PddOrderNoteUpdateRequestInterface,
  PddOrderNoteUpdateResponseInterface,
} from './dingDan/PddOrderNoteUpdate';
import {
  PDD_ORDER_NUMBER_LIST_INCREMENT_GET,
  PDD_ORDER_NUMBER_LIST_INCREMENT_GET_RESPONSE_KEY,
  PddOrderNumberListIncrementGetRequestInterface,
  PddOrderNumberListIncrementGetResponseInterface,
  PddOrderNumberListIncrementGetOrderSnIncrementGetResponseResponseInterface,
  PDD_ORDER_NUMBER_LIST_INCREMENT_GET_LIMITERS,
} from './dingDan/PddOrderNumberListIncrementGet';
import {
  PDD_ORDER_PROMISE_INFO_GET,
  PDD_ORDER_PROMISE_INFO_GET_RESPONSE_KEY,
  PddOrderPromiseInfoGetRequestInterface,
  PddOrderPromiseInfoGetResponseInterface,
  PddOrderPromiseInfoGetPromiseInfoGetResponseResponseInterface,
} from './dingDan/PddOrderPromiseInfoGet';
import {
  PDD_ORDER_STATUS_GET,
  PDD_ORDER_STATUS_GET_RESPONSE_KEY,
  PddOrderStatusGetRequestInterface,
  PddOrderStatusGetResponseInterface,
  PddOrderStatusGetOrderStatusGetResponseResponseInterface,
  PDD_ORDER_STATUS_GET_LIMITERS,
} from './dingDan/PddOrderStatusGet';
import {
  PDD_ORDER_UPDATE_ADDRESS,
  PddOrderUpdateAddressRequestInterface,
  PddOrderUpdateAddressResponseInterface,
} from './dingDan/PddOrderUpdateAddress';
import {
  PDD_ORDER_UPLOAD_EXTRA_LOGISTICS,
  PDD_ORDER_UPLOAD_EXTRA_LOGISTICS_RESPONSE_KEY,
  PddOrderUploadExtraLogisticsRequestInterface,
  PddOrderUploadExtraLogisticsResponseInterface,
  PddOrderUploadExtraLogisticsUploadExtraLogisticsResponseResponseInterface,
} from './dingDan/PddOrderUploadExtraLogistics';
import {
  PDD_ORDER_UPLOAD_RELATION_LOGISTICS,
  PDD_ORDER_UPLOAD_RELATION_LOGISTICS_RESPONSE_KEY,
  PddOrderUploadRelationLogisticsRequestInterface,
  PddOrderUploadRelationLogisticsResponseInterface,
  PddOrderUploadRelationLogisticsUploadExtraLogisticsResponseResponseInterface,
} from './dingDan/PddOrderUploadRelationLogistics';
import {
  PDD_ORDER_VIRTUAL_INFORMATION_GET,
  PDD_ORDER_VIRTUAL_INFORMATION_GET_RESPONSE_KEY,
  PddOrderVirtualInformationGetRequestInterface,
  PddOrderVirtualInformationGetResponseInterface,
  PddOrderVirtualInformationGetOrderVirtualInformationResponseResponseInterface,
} from './dingDan/PddOrderVirtualInformationGet';
// 售后API
import {
  PDD_NEXTONE_LOGISTICS_WAREHOUSE_UPDATE,
  PddNextoneLogisticsWarehouseUpdateRequestInterface,
  PddNextoneLogisticsWarehouseUpdateResponseInterface,
} from './shouHou/PddNextoneLogisticsWarehouseUpdate';
import {
  PDD_RDC_PDDGENIUS_SENDGOODS_CANCEL,
  PDD_RDC_PDDGENIUS_SENDGOODS_CANCEL_RESPONSE_KEY,
  PddRdcPddgeniusSendgoodsCancelRequestInterface,
  PddRdcPddgeniusSendgoodsCancelResponseInterface,
  PddRdcPddgeniusSendgoodsCancelRdcPddgeniusSendgoodsCancelResponseResponseInterface,
  PDD_RDC_PDDGENIUS_SENDGOODS_CANCEL_LIMITERS,
} from './shouHou/PddRdcPddgeniusSendgoodsCancel';
import {
  PDD_REFUND_ADDRESS_LIST_GET,
  PDD_REFUND_ADDRESS_LIST_GET_RESPONSE_KEY,
  PddRefundAddressListGetRequestInterface,
  PddRefundAddressListGetResponseInterface,
  PddRefundAddressListGetRefundAddressListGetResponseResponseInterface,
  PDD_REFUND_ADDRESS_LIST_GET_LIMITERS,
} from './shouHou/PddRefundAddressListGet';
import {
  PDD_REFUND_AGREE,
  PddRefundAgreeRequestInterface,
  PddRefundAgreeResponseInterface,
} from './shouHou/PddRefundAgree';
import {
  PDD_REFUND_EXCHANGE_SHIPPING,
  PddRefundExchangeShippingRequestInterface,
  PddRefundExchangeShippingResponseInterface,
} from './shouHou/PddRefundExchangeShipping';
import {
  PDD_REFUND_INFORMATION_GET,
  PddRefundInformationGetRequestInterface,
  PddRefundInformationGetResponseInterface,
  PDD_REFUND_INFORMATION_GET_LIMITERS,
} from './shouHou/PddRefundInformationGet';
import {
  PDD_REFUND_LIST_INCREMENT_GET,
  PDD_REFUND_LIST_INCREMENT_GET_RESPONSE_KEY,
  PddRefundListIncrementGetRequestInterface,
  PddRefundListIncrementGetResponseInterface,
  PddRefundListIncrementGetRefundIncrementGetResponseResponseInterface,
  PDD_REFUND_LIST_INCREMENT_GET_LIMITERS,
} from './shouHou/PddRefundListIncrementGet';
import {
  PDD_REFUND_RETURNGOODS_AGREE,
  PddRefundReturngoodsAgreeRequestInterface,
  PddRefundReturngoodsAgreeResponseInterface,
} from './shouHou/PddRefundReturngoodsAgree';
import {
  PDD_REFUND_STATUS_CHECK,
  PDD_REFUND_STATUS_CHECK_RESPONSE_KEY,
  PddRefundStatusCheckRequestInterface,
  PddRefundStatusCheckResponseInterface,
  PddRefundStatusCheckRefundStatusCheckResponseResponseInterface,
  PDD_REFUND_STATUS_CHECK_LIMITERS,
} from './shouHou/PddRefundStatusCheck';
// 虚拟类目API
import {
  PDD_VIRTUAL_GAME_SERVER_QUERY,
  PDD_VIRTUAL_GAME_SERVER_QUERY_RESPONSE_KEY,
  PddVirtualGameServerQueryRequestInterface,
  PddVirtualGameServerQueryResponseInterface,
  PddVirtualGameServerQueryGameServerQueryResponseResponseInterface,
} from './xuNiLeiMu/PddVirtualGameServerQuery';
import {
  PDD_VIRTUAL_MOBILE_CHARGE_NOTIFY,
  PDD_VIRTUAL_MOBILE_CHARGE_NOTIFY_RESPONSE_KEY,
  PddVirtualMobileChargeNotifyRequestInterface,
  PddVirtualMobileChargeNotifyResponseInterface,
  PddVirtualMobileChargeNotifyMobileChargeNotifyResponseResponseInterface,
  PDD_VIRTUAL_MOBILE_CHARGE_NOTIFY_LIMITERS,
} from './xuNiLeiMu/PddVirtualMobileChargeNotify';
// 商品API
import {
  PDD_DELETE_DRAFT_COMMIT,
  PddDeleteDraftCommitRequestInterface,
  PddDeleteDraftCommitResponseInterface,
  PDD_DELETE_DRAFT_COMMIT_LIMITERS,
} from './shangPin/PddDeleteDraftCommit';
import {
  PDD_DELETE_GOODS_COMMIT,
  PddDeleteGoodsCommitRequestInterface,
  PddDeleteGoodsCommitResponseInterface,
  PDD_DELETE_GOODS_COMMIT_LIMITERS,
} from './shangPin/PddDeleteGoodsCommit';
import {
  PDD_GOODS_ADD,
  PDD_GOODS_ADD_RESPONSE_KEY,
  PddGoodsAddRequestInterface,
  PddGoodsAddResponseInterface,
  PddGoodsAddGoodsAddResponseResponseInterface,
  PDD_GOODS_ADD_LIMITERS,
} from './shangPin/PddGoodsAdd';
import {
  PDD_GOODS_ADVICE_PRICE_GET,
  PDD_GOODS_ADVICE_PRICE_GET_RESPONSE_KEY,
  PddGoodsAdvicePriceGetRequestInterface,
  PddGoodsAdvicePriceGetResponseInterface,
  PddGoodsAdvicePriceGetGoodsAdvicePriceGetResponseResponseInterface,
} from './shangPin/PddGoodsAdvicePriceGet';
import {
  PDD_GOODS_AUTHORIZATION_CATS,
  PDD_GOODS_AUTHORIZATION_CATS_RESPONSE_KEY,
  PddGoodsAuthorizationCatsRequestInterface,
  PddGoodsAuthorizationCatsResponseInterface,
  PddGoodsAuthorizationCatsGoodsAuthCatsGetResponseResponseInterface,
  PDD_GOODS_AUTHORIZATION_CATS_LIMITERS,
} from './shangPin/PddGoodsAuthorizationCats';
import {
  PDD_GOODS_CAT_RULE_GET,
  PDD_GOODS_CAT_RULE_GET_RESPONSE_KEY,
  PddGoodsCatRuleGetRequestInterface,
  PddGoodsCatRuleGetResponseInterface,
  PddGoodsCatRuleGetCatRuleGetResponseResponseInterface,
} from './shangPin/PddGoodsCatRuleGet';
import {
  PDD_GOODS_CAT_TEMPLATE_GET,
  PDD_GOODS_CAT_TEMPLATE_GET_RESPONSE_KEY,
  PddGoodsCatTemplateGetRequestInterface,
  PddGoodsCatTemplateGetResponseInterface,
  PddGoodsCatTemplateGetOpenApiResponseResponseInterface,
  PDD_GOODS_CAT_TEMPLATE_GET_LIMITERS,
} from './shangPin/PddGoodsCatTemplateGet';
import {
  PDD_GOODS_CATS_GET,
  PDD_GOODS_CATS_GET_RESPONSE_KEY,
  PddGoodsCatsGetRequestInterface,
  PddGoodsCatsGetResponseInterface,
  PddGoodsCatsGetGoodsCatsGetResponseResponseInterface,
  PDD_GOODS_CATS_GET_LIMITERS,
} from './shangPin/PddGoodsCatsGet';
import {
  PDD_GOODS_CHILD_SKU_EDIT,
  PDD_GOODS_CHILD_SKU_EDIT_RESPONSE_KEY,
  PddGoodsChildSkuEditRequestInterface,
  PddGoodsChildSkuEditResponseInterface,
  PddGoodsChildSkuEditChildSkuEditResponseResponseInterface,
} from './shangPin/PddGoodsChildSkuEdit';
import {
  PDD_GOODS_COMMIT_DETAIL_GET,
  PDD_GOODS_COMMIT_DETAIL_GET_RESPONSE_KEY,
  PddGoodsCommitDetailGetRequestInterface,
  PddGoodsCommitDetailGetResponseInterface,
  PddGoodsCommitDetailGetGoodsCommitDetailResponseResponseInterface,
  PDD_GOODS_COMMIT_DETAIL_GET_LIMITERS,
} from './shangPin/PddGoodsCommitDetailGet';
import {
  PDD_GOODS_COMMIT_LIST_GET,
  PDD_GOODS_COMMIT_LIST_GET_RESPONSE_KEY,
  PddGoodsCommitListGetRequestInterface,
  PddGoodsCommitListGetResponseInterface,
  PddGoodsCommitListGetGoodsCommitListGetResponseResponseInterface,
} from './shangPin/PddGoodsCommitListGet';
import {
  PDD_GOODS_COMMIT_STATUS_GET,
  PDD_GOODS_COMMIT_STATUS_GET_RESPONSE_KEY,
  PddGoodsCommitStatusGetRequestInterface,
  PddGoodsCommitStatusGetResponseInterface,
  PddGoodsCommitStatusGetGoodsCommitStatusGetResponseResponseInterface,
} from './shangPin/PddGoodsCommitStatusGet';
import {
  PDD_GOODS_COUNTRY_GET,
  PDD_GOODS_COUNTRY_GET_RESPONSE_KEY,
  PddGoodsCountryGetRequestInterface,
  PddGoodsCountryGetResponseInterface,
  PddGoodsCountryGetGoodsCountryGetResponseResponseInterface,
  PDD_GOODS_COUNTRY_GET_LIMITERS,
} from './shangPin/PddGoodsCountryGet';
import {
  PDD_GOODS_CPS_MALL_UNIT_CHANGE,
  PDD_GOODS_CPS_MALL_UNIT_CHANGE_RESPONSE_KEY,
  PddGoodsCpsMallUnitChangeRequestInterface,
  PddGoodsCpsMallUnitChangeResponseInterface,
  PddGoodsCpsMallUnitChangeGoodsCpsMallUnitChangeResponseResponseInterface,
} from './shangPin/PddGoodsCpsMallUnitChange';
import {
  PDD_GOODS_CPS_MALL_UNIT_CREATE,
  PddGoodsCpsMallUnitCreateRequestInterface,
  PddGoodsCpsMallUnitCreateResponseInterface,
  PDD_GOODS_CPS_MALL_UNIT_CREATE_LIMITERS,
} from './shangPin/PddGoodsCpsMallUnitCreate';
import {
  PDD_GOODS_CPS_MALL_UNIT_PAUSE,
  PDD_GOODS_CPS_MALL_UNIT_PAUSE_RESPONSE_KEY,
  PddGoodsCpsMallUnitPauseRequestInterface,
  PddGoodsCpsMallUnitPauseResponseInterface,
  PddGoodsCpsMallUnitPauseGoodsCpsMallUnitPauseResponseResponseInterface,
} from './shangPin/PddGoodsCpsMallUnitPause';
import {
  PDD_GOODS_CPS_MALL_UNIT_QUERY,
  PDD_GOODS_CPS_MALL_UNIT_QUERY_RESPONSE_KEY,
  PddGoodsCpsMallUnitQueryRequestInterface,
  PddGoodsCpsMallUnitQueryResponseInterface,
  PddGoodsCpsMallUnitQueryGoodsCpsMallUnitQueryResponseResponseInterface,
} from './shangPin/PddGoodsCpsMallUnitQuery';
import {
  PDD_GOODS_CPS_MALL_UNIT_RESUME,
  PDD_GOODS_CPS_MALL_UNIT_RESUME_RESPONSE_KEY,
  PddGoodsCpsMallUnitResumeRequestInterface,
  PddGoodsCpsMallUnitResumeResponseInterface,
  PddGoodsCpsMallUnitResumeGoodsCpsMallUnitResumeResponseResponseInterface,
  PDD_GOODS_CPS_MALL_UNIT_RESUME_LIMITERS,
} from './shangPin/PddGoodsCpsMallUnitResume';
import {
  PDD_GOODS_CPS_UNIT_CHANGE,
  PddGoodsCpsUnitChangeRequestInterface,
  PddGoodsCpsUnitChangeResponseInterface,
  PDD_GOODS_CPS_UNIT_CHANGE_LIMITERS,
} from './shangPin/PddGoodsCpsUnitChange';
import {
  PDD_GOODS_CPS_UNIT_CREATE,
  PddGoodsCpsUnitCreateRequestInterface,
  PddGoodsCpsUnitCreateResponseInterface,
  PDD_GOODS_CPS_UNIT_CREATE_LIMITERS,
} from './shangPin/PddGoodsCpsUnitCreate';
import {
  PDD_GOODS_CPS_UNIT_DELETE,
  PDD_GOODS_CPS_UNIT_DELETE_RESPONSE_KEY,
  PddGoodsCpsUnitDeleteRequestInterface,
  PddGoodsCpsUnitDeleteResponseInterface,
  PddGoodsCpsUnitDeleteGoodsCpsUnitDeleteResponseResponseInterface,
  PDD_GOODS_CPS_UNIT_DELETE_LIMITERS,
} from './shangPin/PddGoodsCpsUnitDelete';
import {
  PDD_GOODS_CPS_UNIT_QUERY,
  PddGoodsCpsUnitQueryRequestInterface,
  PddGoodsCpsUnitQueryResponseInterface,
  PDD_GOODS_CPS_UNIT_QUERY_LIMITERS,
} from './shangPin/PddGoodsCpsUnitQuery';
import {
  PDD_GOODS_DETAIL_GET,
  PDD_GOODS_DETAIL_GET_RESPONSE_KEY,
  PddGoodsDetailGetRequestInterface,
  PddGoodsDetailGetResponseInterface,
  PddGoodsDetailGetGoodsDetailGetResponseResponseInterface,
  PDD_GOODS_DETAIL_GET_LIMITERS,
} from './shangPin/PddGoodsDetailGet';
import {
  PDD_GOODS_EDIT_GOODS_COMMIT,
  PDD_GOODS_EDIT_GOODS_COMMIT_RESPONSE_KEY,
  PddGoodsEditGoodsCommitRequestInterface,
  PddGoodsEditGoodsCommitResponseInterface,
  PddGoodsEditGoodsCommitGoodsUpdateResponseResponseInterface,
  PDD_GOODS_EDIT_GOODS_COMMIT_LIMITERS,
} from './shangPin/PddGoodsEditGoodsCommit';
import {
  PDD_GOODS_FILE_INFO_GET,
  PDD_GOODS_FILE_INFO_GET_RESPONSE_KEY,
  PddGoodsFileInfoGetRequestInterface,
  PddGoodsFileInfoGetResponseInterface,
  PddGoodsFileInfoGetGoodsFileInfoResponseResponseInterface,
} from './shangPin/PddGoodsFileInfoGet';
import {
  PDD_GOODS_FILESPACE_IMAGE_UPLOAD,
  PDD_GOODS_FILESPACE_IMAGE_UPLOAD_RESPONSE_KEY,
  PddGoodsFilespaceImageUploadRequestInterface,
  PddGoodsFilespaceImageUploadResponseInterface,
  PddGoodsFilespaceImageUploadGoodsFilespaceImageUploadResponseResponseInterface,
} from './shangPin/PddGoodsFilespaceImageUpload';
import {
  PDD_GOODS_IMAGE_UPLOAD,
  PDD_GOODS_IMAGE_UPLOAD_RESPONSE_KEY,
  PddGoodsImageUploadRequestInterface,
  PddGoodsImageUploadResponseInterface,
  PddGoodsImageUploadGoodsImageUploadResponseResponseInterface,
  PDD_GOODS_IMAGE_UPLOAD_LIMITERS,
} from './shangPin/PddGoodsImageUpload';
import {
  PDD_GOODS_IMG_UPLOAD,
  PDD_GOODS_IMG_UPLOAD_RESPONSE_KEY,
  PddGoodsImgUploadRequestInterface,
  PddGoodsImgUploadResponseInterface,
  PddGoodsImgUploadGoodsImgUploadResponseResponseInterface,
} from './shangPin/PddGoodsImgUpload';
import {
  PDD_GOODS_INFORMATION_GET,
  PDD_GOODS_INFORMATION_GET_RESPONSE_KEY,
  PddGoodsInformationGetRequestInterface,
  PddGoodsInformationGetResponseInterface,
  PddGoodsInformationGetGoodsInfoGetResponseResponseInterface,
  PDD_GOODS_INFORMATION_GET_LIMITERS,
} from './shangPin/PddGoodsInformationGet';
import {
  PDD_GOODS_INFORMATION_UPDATE,
  PDD_GOODS_INFORMATION_UPDATE_RESPONSE_KEY,
  PddGoodsInformationUpdateRequestInterface,
  PddGoodsInformationUpdateResponseInterface,
  PddGoodsInformationUpdateGoodsUpdateResponseResponseInterface,
  PDD_GOODS_INFORMATION_UPDATE_LIMITERS,
} from './shangPin/PddGoodsInformationUpdate';
import {
  PDD_GOODS_LATEST_COMMIT_STATUS_GET,
  PDD_GOODS_LATEST_COMMIT_STATUS_GET_RESPONSE_KEY,
  PddGoodsLatestCommitStatusGetRequestInterface,
  PddGoodsLatestCommitStatusGetResponseInterface,
  PddGoodsLatestCommitStatusGetGoodsLatestCommitStatusGetResponseResponseInterface,
} from './shangPin/PddGoodsLatestCommitStatusGet';
import {
  PDD_GOODS_LIST_GET,
  PDD_GOODS_LIST_GET_RESPONSE_KEY,
  PddGoodsListGetRequestInterface,
  PddGoodsListGetResponseInterface,
  PddGoodsListGetGoodsListGetResponseResponseInterface,
  PDD_GOODS_LIST_GET_LIMITERS,
} from './shangPin/PddGoodsListGet';
import {
  PDD_GOODS_LOGISTICS_SER_TEMPLATE_CREATE,
  PDD_GOODS_LOGISTICS_SER_TEMPLATE_CREATE_RESPONSE_KEY,
  PddGoodsLogisticsSerTemplateCreateRequestInterface,
  PddGoodsLogisticsSerTemplateCreateResponseInterface,
  PddGoodsLogisticsSerTemplateCreateGoodsLogisticsSerTemplateCreateResponseResponseInterface,
} from './shangPin/PddGoodsLogisticsSerTemplateCreate';
import {
  PDD_GOODS_LOGISTICS_SER_TEMPLATE_DELETE,
  PDD_GOODS_LOGISTICS_SER_TEMPLATE_DELETE_RESPONSE_KEY,
  PddGoodsLogisticsSerTemplateDeleteRequestInterface,
  PddGoodsLogisticsSerTemplateDeleteResponseInterface,
  PddGoodsLogisticsSerTemplateDeleteGoodsLogisticsSerTemplateDeleteResponseResponseInterface,
} from './shangPin/PddGoodsLogisticsSerTemplateDelete';
import {
  PDD_GOODS_LOGISTICS_SER_TEMPLATE_DETAIL,
  PDD_GOODS_LOGISTICS_SER_TEMPLATE_DETAIL_RESPONSE_KEY,
  PddGoodsLogisticsSerTemplateDetailRequestInterface,
  PddGoodsLogisticsSerTemplateDetailResponseInterface,
  PddGoodsLogisticsSerTemplateDetailGoodsLogisticsSerTemplateDetailResponseResponseInterface,
} from './shangPin/PddGoodsLogisticsSerTemplateDetail';
import {
  PDD_GOODS_LOGISTICS_SER_TEMPLATE_LIST,
  PDD_GOODS_LOGISTICS_SER_TEMPLATE_LIST_RESPONSE_KEY,
  PddGoodsLogisticsSerTemplateListRequestInterface,
  PddGoodsLogisticsSerTemplateListResponseInterface,
  PddGoodsLogisticsSerTemplateListGoodsLogisticsSerTemplateListResponseResponseInterface,
} from './shangPin/PddGoodsLogisticsSerTemplateList';
import {
  PDD_GOODS_LOGISTICS_SER_TEMPLATE_UPDATE,
  PDD_GOODS_LOGISTICS_SER_TEMPLATE_UPDATE_RESPONSE_KEY,
  PddGoodsLogisticsSerTemplateUpdateRequestInterface,
  PddGoodsLogisticsSerTemplateUpdateResponseInterface,
  PddGoodsLogisticsSerTemplateUpdateGoodsLogisticsSerTemplateUpdateResponseResponseInterface,
} from './shangPin/PddGoodsLogisticsSerTemplateUpdate';
import {
  PDD_GOODS_LOGISTICS_TEMPLATE_CREATE,
  PDD_GOODS_LOGISTICS_TEMPLATE_CREATE_RESPONSE_KEY,
  PddGoodsLogisticsTemplateCreateRequestInterface,
  PddGoodsLogisticsTemplateCreateResponseInterface,
  PddGoodsLogisticsTemplateCreateGoodsLogisticsTemplateCreateResponseResponseInterface,
  PDD_GOODS_LOGISTICS_TEMPLATE_CREATE_LIMITERS,
} from './shangPin/PddGoodsLogisticsTemplateCreate';
import {
  PDD_GOODS_LOGISTICS_TEMPLATE_GET,
  PDD_GOODS_LOGISTICS_TEMPLATE_GET_RESPONSE_KEY,
  PddGoodsLogisticsTemplateGetRequestInterface,
  PddGoodsLogisticsTemplateGetResponseInterface,
  PddGoodsLogisticsTemplateGetGoodsLogisticsTemplateGetResponseResponseInterface,
  PDD_GOODS_LOGISTICS_TEMPLATE_GET_LIMITERS,
} from './shangPin/PddGoodsLogisticsTemplateGet';
import {
  PDD_GOODS_MATERIAL_CREATE,
  PddGoodsMaterialCreateRequestInterface,
  PddGoodsMaterialCreateResponseInterface,
} from './shangPin/PddGoodsMaterialCreate';
import {
  PDD_GOODS_MATERIAL_DELETE,
  PddGoodsMaterialDeleteRequestInterface,
  PddGoodsMaterialDeleteResponseInterface,
} from './shangPin/PddGoodsMaterialDelete';
import {
  PDD_GOODS_MATERIAL_QUERY,
  PddGoodsMaterialQueryRequestInterface,
  PddGoodsMaterialQueryResponseInterface,
} from './shangPin/PddGoodsMaterialQuery';
import {
  PDD_GOODS_OPT_GET,
  PDD_GOODS_OPT_GET_RESPONSE_KEY,
  PddGoodsOptGetRequestInterface,
  PddGoodsOptGetResponseInterface,
  PddGoodsOptGetGoodsOptGetResponseResponseInterface,
  PDD_GOODS_OPT_GET_LIMITERS,
} from './shangPin/PddGoodsOptGet';
import {
  PDD_GOODS_OUT_PROPERTY_MAPPING_GET,
  PDD_GOODS_OUT_PROPERTY_MAPPING_GET_RESPONSE_KEY,
  PddGoodsOutPropertyMappingGetRequestInterface,
  PddGoodsOutPropertyMappingGetResponseInterface,
  PddGoodsOutPropertyMappingGetOutPropertyMappingGetResponseResponseInterface,
} from './shangPin/PddGoodsOutPropertyMappingGet';
import {
  PDD_GOODS_OUTER_CAT_MAPPING_GET,
  PDD_GOODS_OUTER_CAT_MAPPING_GET_RESPONSE_KEY,
  PddGoodsOuterCatMappingGetRequestInterface,
  PddGoodsOuterCatMappingGetResponseInterface,
  PddGoodsOuterCatMappingGetOuterCatMappingGetResponseResponseInterface,
  PDD_GOODS_OUTER_CAT_MAPPING_GET_LIMITERS,
} from './shangPin/PddGoodsOuterCatMappingGet';
import {
  PDD_GOODS_PRICE_CHECK,
  PDD_GOODS_PRICE_CHECK_RESPONSE_KEY,
  PddGoodsPriceCheckRequestInterface,
  PddGoodsPriceCheckResponseInterface,
  PddGoodsPriceCheckGoodsidPriceCheckResponseResponseInterface,
} from './shangPin/PddGoodsPriceCheck';
import {
  PDD_GOODS_QUANTITY_UPDATE,
  PDD_GOODS_QUANTITY_UPDATE_RESPONSE_KEY,
  PddGoodsQuantityUpdateRequestInterface,
  PddGoodsQuantityUpdateResponseInterface,
  PddGoodsQuantityUpdateGoodsQuantityUpdateResponseResponseInterface,
  PDD_GOODS_QUANTITY_UPDATE_LIMITERS,
} from './shangPin/PddGoodsQuantityUpdate';
import {
  PDD_GOODS_SALE_STATUS_SET,
  PDD_GOODS_SALE_STATUS_SET_RESPONSE_KEY,
  PddGoodsSaleStatusSetRequestInterface,
  PddGoodsSaleStatusSetResponseInterface,
  PddGoodsSaleStatusSetGoodsSaleStatusSetResponseResponseInterface,
  PDD_GOODS_SALE_STATUS_SET_LIMITERS,
} from './shangPin/PddGoodsSaleStatusSet';
import {
  PDD_GOODS_SIZESPEC_CLASS_GET,
  PddGoodsSizespecClassGetRequestInterface,
  PddGoodsSizespecClassGetResponseInterface,
} from './shangPin/PddGoodsSizespecClassGet';
import {
  PDD_GOODS_SIZESPEC_META_GET,
  PddGoodsSizespecMetaGetRequestInterface,
  PddGoodsSizespecMetaGetResponseInterface,
} from './shangPin/PddGoodsSizespecMetaGet';
import {
  PDD_GOODS_SIZESPEC_TEMPLATE_ADD,
  PddGoodsSizespecTemplateAddRequestInterface,
  PddGoodsSizespecTemplateAddResponseInterface,
} from './shangPin/PddGoodsSizespecTemplateAdd';
import {
  PDD_GOODS_SIZESPEC_TEMPLATE_DELETE,
  PddGoodsSizespecTemplateDeleteRequestInterface,
  PddGoodsSizespecTemplateDeleteResponseInterface,
} from './shangPin/PddGoodsSizespecTemplateDelete';
import {
  PDD_GOODS_SIZESPEC_TEMPLATE_GET,
  PddGoodsSizespecTemplateGetRequestInterface,
  PddGoodsSizespecTemplateGetResponseInterface,
} from './shangPin/PddGoodsSizespecTemplateGet';
import {
  PDD_GOODS_SIZESPEC_TEMPLATE_UPDATE,
  PddGoodsSizespecTemplateUpdateRequestInterface,
  PddGoodsSizespecTemplateUpdateResponseInterface,
} from './shangPin/PddGoodsSizespecTemplateUpdate';
import {
  PDD_GOODS_SIZESPEC_TEMPLATES_GET,
  PddGoodsSizespecTemplatesGetRequestInterface,
  PddGoodsSizespecTemplatesGetResponseInterface,
} from './shangPin/PddGoodsSizespecTemplatesGet';
import {
  PDD_GOODS_SKU_PRICE_UPDATE,
  PDD_GOODS_SKU_PRICE_UPDATE_RESPONSE_KEY,
  PddGoodsSkuPriceUpdateRequestInterface,
  PddGoodsSkuPriceUpdateResponseInterface,
  PddGoodsSkuPriceUpdateGoodsUpdateSkuPriceResponseResponseInterface,
  PDD_GOODS_SKU_PRICE_UPDATE_LIMITERS,
} from './shangPin/PddGoodsSkuPriceUpdate';
import {
  PDD_GOODS_SKUS_GET,
  PDD_GOODS_SKUS_GET_RESPONSE_KEY,
  PddGoodsSkusGetRequestInterface,
  PddGoodsSkusGetResponseInterface,
  PddGoodsSkusGetGoodsSkuGetResponseResponseInterface,
  PDD_GOODS_SKUS_GET_LIMITERS,
} from './shangPin/PddGoodsSkusGet';
import {
  PDD_GOODS_SPEC_GET,
  PDD_GOODS_SPEC_GET_RESPONSE_KEY,
  PddGoodsSpecGetRequestInterface,
  PddGoodsSpecGetResponseInterface,
  PddGoodsSpecGetGoodsSpecGetResponseResponseInterface,
  PDD_GOODS_SPEC_GET_LIMITERS,
} from './shangPin/PddGoodsSpecGet';
import {
  PDD_GOODS_SPEC_ID_GET,
  PDD_GOODS_SPEC_ID_GET_RESPONSE_KEY,
  PddGoodsSpecIdGetRequestInterface,
  PddGoodsSpecIdGetResponseInterface,
  PddGoodsSpecIdGetGoodsSpecIdGetResponseResponseInterface,
  PDD_GOODS_SPEC_ID_GET_LIMITERS,
} from './shangPin/PddGoodsSpecIdGet';
import {
  PDD_GOODS_SPU_GET,
  PDD_GOODS_SPU_GET_RESPONSE_KEY,
  PddGoodsSpuGetRequestInterface,
  PddGoodsSpuGetResponseInterface,
  PddGoodsSpuGetSpuGetResponseResponseInterface,
} from './shangPin/PddGoodsSpuGet';
import {
  PDD_GOODS_SPU_SEARCH,
  PDD_GOODS_SPU_SEARCH_RESPONSE_KEY,
  PddGoodsSpuSearchRequestInterface,
  PddGoodsSpuSearchResponseInterface,
  PddGoodsSpuSearchSpuSearchResponseResponseInterface,
} from './shangPin/PddGoodsSpuSearch';
import {
  PDD_GOODS_SUBMIT_GOODS_COMMIT,
  PDD_GOODS_SUBMIT_GOODS_COMMIT_RESPONSE_KEY,
  PddGoodsSubmitGoodsCommitRequestInterface,
  PddGoodsSubmitGoodsCommitResponseInterface,
  PddGoodsSubmitGoodsCommitGoodsUpdateResponseResponseInterface,
  PDD_GOODS_SUBMIT_GOODS_COMMIT_LIMITERS,
} from './shangPin/PddGoodsSubmitGoodsCommit';
import {
  PDD_GOODS_TEMPLATE_PROPERTY_VALUE_SEARCH,
  PDD_GOODS_TEMPLATE_PROPERTY_VALUE_SEARCH_RESPONSE_KEY,
  PddGoodsTemplatePropertyValueSearchRequestInterface,
  PddGoodsTemplatePropertyValueSearchResponseInterface,
  PddGoodsTemplatePropertyValueSearchGoodsTemplatePropValSearchResponseResponseInterface,
} from './shangPin/PddGoodsTemplatePropertyValueSearch';
import {
  PDD_GOOODS_SKU_MEASUREMENT_LIST,
  PDD_GOOODS_SKU_MEASUREMENT_LIST_RESPONSE_KEY,
  PddGooodsSkuMeasurementListRequestInterface,
  PddGooodsSkuMeasurementListResponseInterface,
  PddGooodsSkuMeasurementListGooodsSkuMeasurementListResponseResponseInterface,
} from './shangPin/PddGooodsSkuMeasurementList';
import {
  PDD_ONE_EXPRESS_COST_TEMPLATE,
  PDD_ONE_EXPRESS_COST_TEMPLATE_RESPONSE_KEY,
  PddOneExpressCostTemplateRequestInterface,
  PddOneExpressCostTemplateResponseInterface,
  PddOneExpressCostTemplateOneExpressCostTemplateResponseResponseInterface,
} from './shangPin/PddOneExpressCostTemplate';
// 多多客API
import {
  PDD_DDK_GOODS_PID_GENERATE,
  PDD_DDK_GOODS_PID_GENERATE_RESPONSE_KEY,
  PddDdkGoodsPidGenerateRequestInterface,
  PddDdkGoodsPidGenerateResponseInterface,
  PddDdkGoodsPidGeneratePIdGenerateResponseResponseInterface,
} from './duoDuoKe/PddDdkGoodsPidGenerate';
import {
  PDD_DDK_CASHGIFT_STATUS_UPDATE,
  PDD_DDK_CASHGIFT_STATUS_UPDATE_RESPONSE_KEY,
  PddDdkCashgiftStatusUpdateRequestInterface,
  PddDdkCashgiftStatusUpdateResponseInterface,
  PddDdkCashgiftStatusUpdateUpdateCashgiftResponseResponseInterface,
} from './duoDuoKe/PddDdkCashgiftStatusUpdate';
import {
  PDD_DDK_GOODS_PID_QUERY,
  PDD_DDK_GOODS_PID_QUERY_RESPONSE_KEY,
  PddDdkGoodsPidQueryRequestInterface,
  PddDdkGoodsPidQueryResponseInterface,
  PddDdkGoodsPidQueryPIdQueryResponseResponseInterface,
} from './duoDuoKe/PddDdkGoodsPidQuery';
import {
  PDD_DDK_PID_MEDIAID_BIND,
  PDD_DDK_PID_MEDIAID_BIND_RESPONSE_KEY,
  PddDdkPidMediaidBindRequestInterface,
  PddDdkPidMediaidBindResponseInterface,
  PddDdkPidMediaidBindPIdBindResponseResponseInterface,
} from './duoDuoKe/PddDdkPidMediaidBind';
import {
  PDD_DDK_GOODS_ZS_UNIT_URL_GEN,
  PDD_DDK_GOODS_ZS_UNIT_URL_GEN_RESPONSE_KEY,
  PddDdkGoodsZsUnitUrlGenRequestInterface,
  PddDdkGoodsZsUnitUrlGenResponseInterface,
  PddDdkGoodsZsUnitUrlGenGoodsZsUnitGenerateResponseResponseInterface,
} from './duoDuoKe/PddDdkGoodsZsUnitUrlGen';
import {
  PDD_DDK_MEMBER_AUTHORITY_QUERY,
  PDD_DDK_MEMBER_AUTHORITY_QUERY_RESPONSE_KEY,
  PddDdkMemberAuthorityQueryRequestInterface,
  PddDdkMemberAuthorityQueryResponseInterface,
  PddDdkMemberAuthorityQueryAuthorityQueryResponseResponseInterface,
} from './duoDuoKe/PddDdkMemberAuthorityQuery';
import {
  PDD_DDK_CASHGIFT_DATA_QUERY,
  PDD_DDK_CASHGIFT_DATA_QUERY_RESPONSE_KEY,
  PddDdkCashgiftDataQueryRequestInterface,
  PddDdkCashgiftDataQueryResponseInterface,
  PddDdkCashgiftDataQueryCashgiftDataResponseResponseInterface,
} from './duoDuoKe/PddDdkCashgiftDataQuery';
import {
  PDD_DDK_STATISTICS_DATA_QUERY,
  PDD_DDK_STATISTICS_DATA_QUERY_RESPONSE_KEY,
  PddDdkStatisticsDataQueryRequestInterface,
  PddDdkStatisticsDataQueryResponseInterface,
  PddDdkStatisticsDataQueryStatisticsDataResponseResponseInterface,
} from './duoDuoKe/PddDdkStatisticsDataQuery';
import {
  PDD_DDK_CMS_PROM_URL_GENERATE,
  PDD_DDK_CMS_PROM_URL_GENERATE_RESPONSE_KEY,
  PddDdkCmsPromUrlGenerateRequestInterface,
  PddDdkCmsPromUrlGenerateResponseInterface,
  PddDdkCmsPromUrlGenerateCmsPromotionUrlGenerateResponseResponseInterface,
  PDD_DDK_CMS_PROM_URL_GENERATE_LIMITERS,
} from './duoDuoKe/PddDdkCmsPromUrlGenerate';
import {
  PDD_DDK_GOODS_PROMOTION_URL_GENERATE,
  PDD_DDK_GOODS_PROMOTION_URL_GENERATE_RESPONSE_KEY,
  PddDdkGoodsPromotionUrlGenerateRequestInterface,
  PddDdkGoodsPromotionUrlGenerateResponseInterface,
  PddDdkGoodsPromotionUrlGenerateGoodsPromotionUrlGenerateResponseResponseInterface,
  PDD_DDK_GOODS_PROMOTION_URL_GENERATE_LIMITERS,
} from './duoDuoKe/PddDdkGoodsPromotionUrlGenerate';
import {
  PDD_DDK_ORDER_LIST_RANGE_GET,
  PDD_DDK_ORDER_LIST_RANGE_GET_RESPONSE_KEY,
  PddDdkOrderListRangeGetRequestInterface,
  PddDdkOrderListRangeGetResponseInterface,
  PddDdkOrderListRangeGetOrderListGetResponseResponseInterface,
} from './duoDuoKe/PddDdkOrderListRangeGet';
import {
  PDD_DDK_GOODS_SEARCH,
  PDD_DDK_GOODS_SEARCH_RESPONSE_KEY,
  PddDdkGoodsSearchRequestInterface,
  PddDdkGoodsSearchResponseInterface,
  PddDdkGoodsSearchGoodsSearchResponseResponseInterface,
  PDD_DDK_GOODS_SEARCH_LIMITERS,
} from './duoDuoKe/PddDdkGoodsSearch';
import {
  PDD_DDK_GOODS_DETAIL,
  PDD_DDK_GOODS_DETAIL_RESPONSE_KEY,
  PddDdkGoodsDetailRequestInterface,
  PddDdkGoodsDetailResponseInterface,
  PddDdkGoodsDetailGoodsDetailResponseResponseInterface,
  PDD_DDK_GOODS_DETAIL_LIMITERS,
} from './duoDuoKe/PddDdkGoodsDetail';
import {
  PDD_DDK_RESOURCE_URL_GEN,
  PDD_DDK_RESOURCE_URL_GEN_RESPONSE_KEY,
  PddDdkResourceUrlGenRequestInterface,
  PddDdkResourceUrlGenResponseInterface,
  PddDdkResourceUrlGenResourceUrlResponseResponseInterface,
  PDD_DDK_RESOURCE_URL_GEN_LIMITERS,
} from './duoDuoKe/PddDdkResourceUrlGen';
import {
  PDD_DDK_CASHGIFT_CREATE,
  PDD_DDK_CASHGIFT_CREATE_RESPONSE_KEY,
  PddDdkCashgiftCreateRequestInterface,
  PddDdkCashgiftCreateResponseInterface,
  PddDdkCashgiftCreateCreateCashgiftResponseResponseInterface,
} from './duoDuoKe/PddDdkCashgiftCreate';
import {
  PDD_DDK_ORDER_DETAIL_GET,
  PDD_DDK_ORDER_DETAIL_GET_RESPONSE_KEY,
  PddDdkOrderDetailGetRequestInterface,
  PddDdkOrderDetailGetResponseInterface,
  PddDdkOrderDetailGetOrderDetailResponseResponseInterface,
  PDD_DDK_ORDER_DETAIL_GET_LIMITERS,
} from './duoDuoKe/PddDdkOrderDetailGet';
import {
  PDD_DDK_ORDER_LIST_INCREMENT_GET,
  PDD_DDK_ORDER_LIST_INCREMENT_GET_RESPONSE_KEY,
  PddDdkOrderListIncrementGetRequestInterface,
  PddDdkOrderListIncrementGetResponseInterface,
  PddDdkOrderListIncrementGetOrderListGetResponseResponseInterface,
  PDD_DDK_ORDER_LIST_INCREMENT_GET_LIMITERS,
} from './duoDuoKe/PddDdkOrderListIncrementGet';
import {
  PDD_DDK_GOODS_RECOMMEND_GET,
  PDD_DDK_GOODS_RECOMMEND_GET_RESPONSE_KEY,
  PddDdkGoodsRecommendGetRequestInterface,
  PddDdkGoodsRecommendGetResponseInterface,
  PddDdkGoodsRecommendGetGoodsBasicDetailResponseResponseInterface,
  PDD_DDK_GOODS_RECOMMEND_GET_LIMITERS,
} from './duoDuoKe/PddDdkGoodsRecommendGet';
import {
  PDD_DDK_RP_PROM_URL_GENERATE,
  PDD_DDK_RP_PROM_URL_GENERATE_RESPONSE_KEY,
  PddDdkRpPromUrlGenerateRequestInterface,
  PddDdkRpPromUrlGenerateResponseInterface,
  PddDdkRpPromUrlGenerateRpPromotionUrlGenerateResponseResponseInterface,
  PDD_DDK_RP_PROM_URL_GENERATE_LIMITERS,
} from './duoDuoKe/PddDdkRpPromUrlGenerate';
// 多多客工具API
import {
  PDD_DDK_ALL_ORDER_LIST_INCREMENT_GET,
  PDD_DDK_ALL_ORDER_LIST_INCREMENT_GET_RESPONSE_KEY,
  PddDdkAllOrderListIncrementGetRequestInterface,
  PddDdkAllOrderListIncrementGetResponseInterface,
  PddDdkAllOrderListIncrementGetOrderListGetResponseResponseInterface,
} from './duoDuoKeGongJu/PddDdkAllOrderListIncrementGet';
import {
  PDD_DDK_OAUTH_CASHGIFT_CREATE,
  PDD_DDK_OAUTH_CASHGIFT_CREATE_RESPONSE_KEY,
  PddDdkOauthCashgiftCreateRequestInterface,
  PddDdkOauthCashgiftCreateResponseInterface,
  PddDdkOauthCashgiftCreateCreateCashgiftResponseResponseInterface,
} from './duoDuoKeGongJu/PddDdkOauthCashgiftCreate';
import {
  PDD_DDK_OAUTH_CASHGIFT_STATUS_UPDATE,
  PDD_DDK_OAUTH_CASHGIFT_STATUS_UPDATE_RESPONSE_KEY,
  PddDdkOauthCashgiftStatusUpdateRequestInterface,
  PddDdkOauthCashgiftStatusUpdateResponseInterface,
  PddDdkOauthCashgiftStatusUpdateUpdateCashgiftResponseResponseInterface,
} from './duoDuoKeGongJu/PddDdkOauthCashgiftStatusUpdate';
import {
  PDD_DDK_OAUTH_CMS_PROM_URL_GENERATE,
  PDD_DDK_OAUTH_CMS_PROM_URL_GENERATE_RESPONSE_KEY,
  PddDdkOauthCmsPromUrlGenerateRequestInterface,
  PddDdkOauthCmsPromUrlGenerateResponseInterface,
  PddDdkOauthCmsPromUrlGenerateCmsPromotionUrlGenerateResponseResponseInterface,
} from './duoDuoKeGongJu/PddDdkOauthCmsPromUrlGenerate';
import {
  PDD_DDK_OAUTH_GOODS_DETAIL,
  PDD_DDK_OAUTH_GOODS_DETAIL_RESPONSE_KEY,
  PddDdkOauthGoodsDetailRequestInterface,
  PddDdkOauthGoodsDetailResponseInterface,
  PddDdkOauthGoodsDetailGoodsDetailResponseResponseInterface,
} from './duoDuoKeGongJu/PddDdkOauthGoodsDetail';
import {
  PDD_DDK_OAUTH_GOODS_PID_GENERATE,
  PDD_DDK_OAUTH_GOODS_PID_GENERATE_RESPONSE_KEY,
  PddDdkOauthGoodsPidGenerateRequestInterface,
  PddDdkOauthGoodsPidGenerateResponseInterface,
  PddDdkOauthGoodsPidGeneratePIdGenerateResponseResponseInterface,
} from './duoDuoKeGongJu/PddDdkOauthGoodsPidGenerate';
import {
  PDD_DDK_OAUTH_GOODS_PID_QUERY,
  PDD_DDK_OAUTH_GOODS_PID_QUERY_RESPONSE_KEY,
  PddDdkOauthGoodsPidQueryRequestInterface,
  PddDdkOauthGoodsPidQueryResponseInterface,
  PddDdkOauthGoodsPidQueryPIdQueryResponseResponseInterface,
} from './duoDuoKeGongJu/PddDdkOauthGoodsPidQuery';
import {
  PDD_DDK_OAUTH_GOODS_PROM_URL_GENERATE,
  PDD_DDK_OAUTH_GOODS_PROM_URL_GENERATE_RESPONSE_KEY,
  PddDdkOauthGoodsPromUrlGenerateRequestInterface,
  PddDdkOauthGoodsPromUrlGenerateResponseInterface,
  PddDdkOauthGoodsPromUrlGenerateGoodsPromotionUrlGenerateResponseResponseInterface,
  PDD_DDK_OAUTH_GOODS_PROM_URL_GENERATE_LIMITERS,
} from './duoDuoKeGongJu/PddDdkOauthGoodsPromUrlGenerate';
import {
  PDD_DDK_OAUTH_GOODS_RECOMMEND_GET,
  PDD_DDK_OAUTH_GOODS_RECOMMEND_GET_RESPONSE_KEY,
  PddDdkOauthGoodsRecommendGetRequestInterface,
  PddDdkOauthGoodsRecommendGetResponseInterface,
  PddDdkOauthGoodsRecommendGetGoodsBasicDetailResponseResponseInterface,
} from './duoDuoKeGongJu/PddDdkOauthGoodsRecommendGet';
import {
  PDD_DDK_OAUTH_GOODS_SEARCH,
  PDD_DDK_OAUTH_GOODS_SEARCH_RESPONSE_KEY,
  PddDdkOauthGoodsSearchRequestInterface,
  PddDdkOauthGoodsSearchResponseInterface,
  PddDdkOauthGoodsSearchGoodsSearchResponseResponseInterface,
} from './duoDuoKeGongJu/PddDdkOauthGoodsSearch';
import {
  PDD_DDK_OAUTH_GOODS_ZS_UNIT_URL_GEN,
  PDD_DDK_OAUTH_GOODS_ZS_UNIT_URL_GEN_RESPONSE_KEY,
  PddDdkOauthGoodsZsUnitUrlGenRequestInterface,
  PddDdkOauthGoodsZsUnitUrlGenResponseInterface,
  PddDdkOauthGoodsZsUnitUrlGenGoodsZsUnitGenerateResponseResponseInterface,
} from './duoDuoKeGongJu/PddDdkOauthGoodsZsUnitUrlGen';
import {
  PDD_DDK_OAUTH_MEMBER_AUTHORITY_QUERY,
  PDD_DDK_OAUTH_MEMBER_AUTHORITY_QUERY_RESPONSE_KEY,
  PddDdkOauthMemberAuthorityQueryRequestInterface,
  PddDdkOauthMemberAuthorityQueryResponseInterface,
  PddDdkOauthMemberAuthorityQueryAuthorityQueryResponseResponseInterface,
  PDD_DDK_OAUTH_MEMBER_AUTHORITY_QUERY_LIMITERS,
} from './duoDuoKeGongJu/PddDdkOauthMemberAuthorityQuery';
import {
  PDD_DDK_OAUTH_ORDER_DETAIL_GET,
  PDD_DDK_OAUTH_ORDER_DETAIL_GET_RESPONSE_KEY,
  PddDdkOauthOrderDetailGetRequestInterface,
  PddDdkOauthOrderDetailGetResponseInterface,
  PddDdkOauthOrderDetailGetOrderDetailResponseResponseInterface,
  PDD_DDK_OAUTH_ORDER_DETAIL_GET_LIMITERS,
} from './duoDuoKeGongJu/PddDdkOauthOrderDetailGet';
import {
  PDD_DDK_OAUTH_PID_MEDIAID_BIND,
  PDD_DDK_OAUTH_PID_MEDIAID_BIND_RESPONSE_KEY,
  PddDdkOauthPidMediaidBindRequestInterface,
  PddDdkOauthPidMediaidBindResponseInterface,
  PddDdkOauthPidMediaidBindPIdBindResponseResponseInterface,
} from './duoDuoKeGongJu/PddDdkOauthPidMediaidBind';
import {
  PDD_DDK_OAUTH_RESOURCE_URL_GEN,
  PDD_DDK_OAUTH_RESOURCE_URL_GEN_RESPONSE_KEY,
  PddDdkOauthResourceUrlGenRequestInterface,
  PddDdkOauthResourceUrlGenResponseInterface,
  PddDdkOauthResourceUrlGenResourceUrlResponseResponseInterface,
} from './duoDuoKeGongJu/PddDdkOauthResourceUrlGen';
import {
  PDD_DDK_OAUTH_RP_PROM_URL_GENERATE,
  PDD_DDK_OAUTH_RP_PROM_URL_GENERATE_RESPONSE_KEY,
  PddDdkOauthRpPromUrlGenerateRequestInterface,
  PddDdkOauthRpPromUrlGenerateResponseInterface,
  PddDdkOauthRpPromUrlGenerateRpPromotionUrlGenerateResponseResponseInterface,
} from './duoDuoKeGongJu/PddDdkOauthRpPromUrlGenerate';
import {
  PDD_DDK_OAUTH_WEAPP_QRCODE_URL_GEN,
  PDD_DDK_OAUTH_WEAPP_QRCODE_URL_GEN_RESPONSE_KEY,
  PddDdkOauthWeappQrcodeUrlGenRequestInterface,
  PddDdkOauthWeappQrcodeUrlGenResponseInterface,
  PddDdkOauthWeappQrcodeUrlGenWeappQrcodeGenerateResponseResponseInterface,
  PDD_DDK_OAUTH_WEAPP_QRCODE_URL_GEN_LIMITERS,
} from './duoDuoKeGongJu/PddDdkOauthWeappQrcodeUrlGen';
// 方舟物流服务商API
import {
  PDD_LOGISTICS_CS_HISTORY_MESSAGE_GET,
  PDD_LOGISTICS_CS_HISTORY_MESSAGE_GET_RESPONSE_KEY,
  PddLogisticsCsHistoryMessageGetRequestInterface,
  PddLogisticsCsHistoryMessageGetResponseInterface,
  PddLogisticsCsHistoryMessageGetLogisticsCsHistoryMessageGetResponseResponseInterface,
} from './fangZhouWuLiuFuWuShang/PddLogisticsCsHistoryMessageGet';
import {
  PDD_LOGISTICS_CS_MESSAGE_SEND,
  PDD_LOGISTICS_CS_MESSAGE_SEND_RESPONSE_KEY,
  PddLogisticsCsMessageSendRequestInterface,
  PddLogisticsCsMessageSendResponseInterface,
  PddLogisticsCsMessageSendLogisticsCsMessageSendResponseResponseInterface,
} from './fangZhouWuLiuFuWuShang/PddLogisticsCsMessageSend';
import {
  PDD_LOGISTICS_CS_SESSION_CLOSE,
  PDD_LOGISTICS_CS_SESSION_CLOSE_RESPONSE_KEY,
  PddLogisticsCsSessionCloseRequestInterface,
  PddLogisticsCsSessionCloseResponseInterface,
  PddLogisticsCsSessionCloseLogisticsCsSessionCloseResponseResponseInterface,
} from './fangZhouWuLiuFuWuShang/PddLogisticsCsSessionClose';
import {
  PDD_LOGISTICS_CS_SESSION_START,
  PDD_LOGISTICS_CS_SESSION_START_RESPONSE_KEY,
  PddLogisticsCsSessionStartRequestInterface,
  PddLogisticsCsSessionStartResponseInterface,
  PddLogisticsCsSessionStartLogisticsCsSessionStartResponseResponseInterface,
} from './fangZhouWuLiuFuWuShang/PddLogisticsCsSessionStart';
import {
  PDD_LOGISTICS_TICKET_GET,
  PDD_LOGISTICS_TICKET_GET_RESPONSE_KEY,
  PddLogisticsTicketGetRequestInterface,
  PddLogisticsTicketGetResponseInterface,
  PddLogisticsTicketGetLogisticsTicketGetResponseResponseInterface,
  PDD_LOGISTICS_TICKET_GET_LIMITERS,
} from './fangZhouWuLiuFuWuShang/PddLogisticsTicketGet';
import {
  PDD_LOGISTICS_TICKET_IMAGE_UPLOAD,
  PDD_LOGISTICS_TICKET_IMAGE_UPLOAD_RESPONSE_KEY,
  PddLogisticsTicketImageUploadRequestInterface,
  PddLogisticsTicketImageUploadResponseInterface,
  PddLogisticsTicketImageUploadLogisticsTicketImageUploadResponseResponseInterface,
  PDD_LOGISTICS_TICKET_IMAGE_UPLOAD_LIMITERS,
} from './fangZhouWuLiuFuWuShang/PddLogisticsTicketImageUpload';
import {
  PDD_LOGISTICS_TICKET_NOTIFY,
  PDD_LOGISTICS_TICKET_NOTIFY_RESPONSE_KEY,
  PddLogisticsTicketNotifyRequestInterface,
  PddLogisticsTicketNotifyResponseInterface,
  PddLogisticsTicketNotifyLogisticsTicketNotifyResponseResponseInterface,
  PDD_LOGISTICS_TICKET_NOTIFY_LIMITERS,
} from './fangZhouWuLiuFuWuShang/PddLogisticsTicketNotify';
import {
  PDD_LOGISTICS_TICKET_PROBLEM_TYPE_GET,
  PDD_LOGISTICS_TICKET_PROBLEM_TYPE_GET_RESPONSE_KEY,
  PddLogisticsTicketProblemTypeGetRequestInterface,
  PddLogisticsTicketProblemTypeGetResponseInterface,
  PddLogisticsTicketProblemTypeGetLogisticsProblemTypeGetResponseResponseInterface,
  PDD_LOGISTICS_TICKET_PROBLEM_TYPE_GET_LIMITERS,
} from './fangZhouWuLiuFuWuShang/PddLogisticsTicketProblemTypeGet';
import {
  PDD_SERVICE_MAIL_BIZACTION_NOTIFY,
  PddServiceMailBizactionNotifyRequestInterface,
  PddServiceMailBizactionNotifyResponseInterface,
} from './fangZhouWuLiuFuWuShang/PddServiceMailBizactionNotify';
import {
  PDD_LOGISTICS_CO_TRACK_SUB,
  PddLogisticsCoTrackSubRequestInterface,
  PddLogisticsCoTrackSubResponseInterface,
} from './fangZhouWuLiuFuWuShang/PddLogisticsCoTrackSub';
import {
  PDD_SERVICE_MAIL_ORDER_FC_AUTH,
  PddServiceMailOrderFcAuthRequestInterface,
  PddServiceMailOrderFcAuthResponseInterface,
} from './fangZhouWuLiuFuWuShang/PddServiceMailOrderFcAuth';
import {
  PDD_SERVICE_MAIL_SERVICE_TIME_QUERY,
  PddServiceMailServiceTimeQueryRequestInterface,
  PddServiceMailServiceTimeQueryResponseInterface,
} from './fangZhouWuLiuFuWuShang/PddServiceMailServiceTimeQuery';
// 营销API
import {
  PDD_PROMOTION_COUPON_CLOSE,
  PDD_PROMOTION_COUPON_CLOSE_RESPONSE_KEY,
  PddPromotionCouponCloseRequestInterface,
  PddPromotionCouponCloseResponseInterface,
  PddPromotionCouponClosePromotionCouponBatchCloseResponseResponseInterface,
  PDD_PROMOTION_COUPON_CLOSE_LIMITERS,
} from './yingXiao/PddPromotionCouponClose';
import {
  PDD_PROMOTION_COUPON_QUANTITY_ADD,
  PDD_PROMOTION_COUPON_QUANTITY_ADD_RESPONSE_KEY,
  PddPromotionCouponQuantityAddRequestInterface,
  PddPromotionCouponQuantityAddResponseInterface,
  PddPromotionCouponQuantityAddCouponQuantityAddResponseResponseInterface,
  PDD_PROMOTION_COUPON_QUANTITY_ADD_LIMITERS,
} from './yingXiao/PddPromotionCouponQuantityAdd';
import {
  PDD_PROMOTION_GOODS_COUPON_CREATE,
  PDD_PROMOTION_GOODS_COUPON_CREATE_RESPONSE_KEY,
  PddPromotionGoodsCouponCreateRequestInterface,
  PddPromotionGoodsCouponCreateResponseInterface,
  PddPromotionGoodsCouponCreateGoodsCouponBatchCreateResponseResponseInterface,
  PDD_PROMOTION_GOODS_COUPON_CREATE_LIMITERS,
} from './yingXiao/PddPromotionGoodsCouponCreate';
import {
  PDD_PROMOTION_GOODS_COUPON_LIST_GET,
  PDD_PROMOTION_GOODS_COUPON_LIST_GET_RESPONSE_KEY,
  PddPromotionGoodsCouponListGetRequestInterface,
  PddPromotionGoodsCouponListGetResponseInterface,
  PddPromotionGoodsCouponListGetGoodsCouponBatchListResponseResponseInterface,
  PDD_PROMOTION_GOODS_COUPON_LIST_GET_LIMITERS,
} from './yingXiao/PddPromotionGoodsCouponListGet';
import {
  PDD_PROMOTION_HOME_COUPON_CREATE,
  PDD_PROMOTION_HOME_COUPON_CREATE_RESPONSE_KEY,
  PddPromotionHomeCouponCreateRequestInterface,
  PddPromotionHomeCouponCreateResponseInterface,
  PddPromotionHomeCouponCreateHomeCouponBatchCreateResponseResponseInterface,
  PDD_PROMOTION_HOME_COUPON_CREATE_LIMITERS,
} from './yingXiao/PddPromotionHomeCouponCreate';
import {
  PDD_PROMOTION_LIMITED_ACTIVITY_CANCEL,
  PddPromotionLimitedActivityCancelRequestInterface,
  PddPromotionLimitedActivityCancelResponseInterface,
} from './yingXiao/PddPromotionLimitedActivityCancel';
import {
  PDD_PROMOTION_LIMITED_ACTIVITY_CREATE,
  PddPromotionLimitedActivityCreateRequestInterface,
  PddPromotionLimitedActivityCreateResponseInterface,
} from './yingXiao/PddPromotionLimitedActivityCreate';
import {
  PDD_PROMOTION_LIMITED_DISCOUNT_LIST_GET,
  PddPromotionLimitedDiscountListGetRequestInterface,
  PddPromotionLimitedDiscountListGetResponseInterface,
} from './yingXiao/PddPromotionLimitedDiscountListGet';
import {
  PDD_PROMOTION_LIMITED_QUALIFIED_GOODS_GET,
  PddPromotionLimitedQualifiedGoodsGetRequestInterface,
  PddPromotionLimitedQualifiedGoodsGetResponseInterface,
} from './yingXiao/PddPromotionLimitedQualifiedGoodsGet';
import {
  PDD_PROMOTION_LIMITED_QUALIFIED_SKU_GET,
  PddPromotionLimitedQualifiedSkuGetRequestInterface,
  PddPromotionLimitedQualifiedSkuGetResponseInterface,
} from './yingXiao/PddPromotionLimitedQualifiedSkuGet';
import {
  PDD_PROMOTION_MERCHANT_COUPON_LIST_GET,
  PDD_PROMOTION_MERCHANT_COUPON_LIST_GET_RESPONSE_KEY,
  PddPromotionMerchantCouponListGetRequestInterface,
  PddPromotionMerchantCouponListGetResponseInterface,
  PddPromotionMerchantCouponListGetMerchantCouponBatchListResponseResponseInterface,
  PDD_PROMOTION_MERCHANT_COUPON_LIST_GET_LIMITERS,
} from './yingXiao/PddPromotionMerchantCouponListGet';
// 卡券API
import {
  PDD_VOUCHER_APPOINTMENT_INFO_SEND,
  PDD_VOUCHER_APPOINTMENT_INFO_SEND_RESPONSE_KEY,
  PddVoucherAppointmentInfoSendRequestInterface,
  PddVoucherAppointmentInfoSendResponseInterface,
  PddVoucherAppointmentInfoSendVoucherAppointmentInfoSendResponseResponseInterface,
  PDD_VOUCHER_APPOINTMENT_INFO_SEND_LIMITERS,
} from './kaQuan/PddVoucherAppointmentInfoSend';
import {
  PDD_VOUCHER_OTA_CARD_PREPARE_VERIFICATION,
  PddVoucherOtaCardPrepareVerificationRequestInterface,
  PddVoucherOtaCardPrepareVerificationResponseInterface,
} from './kaQuan/PddVoucherOtaCardPrepareVerification';
import {
  PDD_VOUCHER_OTA_CARD_VERIFICATION,
  PDD_VOUCHER_OTA_CARD_VERIFICATION_RESPONSE_KEY,
  PddVoucherOtaCardVerificationRequestInterface,
  PddVoucherOtaCardVerificationResponseInterface,
  PddVoucherOtaCardVerificationVoucherOtaCardVerificationResponseResponseInterface,
  PDD_VOUCHER_OTA_CARD_VERIFICATION_LIMITERS,
} from './kaQuan/PddVoucherOtaCardVerification';
import {
  PDD_VOUCHER_PHYSICAL_GOODS_SEND,
  PDD_VOUCHER_PHYSICAL_GOODS_SEND_RESPONSE_KEY,
  PddVoucherPhysicalGoodsSendRequestInterface,
  PddVoucherPhysicalGoodsSendResponseInterface,
  PddVoucherPhysicalGoodsSendVoucherPhysicalVoucherSendResponseResponseInterface,
  PDD_VOUCHER_PHYSICAL_GOODS_SEND_LIMITERS,
} from './kaQuan/PddVoucherPhysicalGoodsSend';
import {
  PDD_VOUCHER_REALTIME_ORDERNO_GET,
  PddVoucherRealtimeOrdernoGetRequestInterface,
  PddVoucherRealtimeOrdernoGetResponseInterface,
  PDD_VOUCHER_REALTIME_ORDERNO_GET_LIMITERS,
} from './kaQuan/PddVoucherRealtimeOrdernoGet';
import {
  PDD_VOUCHER_REALTIME_VERIFY_SYNC,
  PddVoucherRealtimeVerifySyncRequestInterface,
  PddVoucherRealtimeVerifySyncResponseInterface,
} from './kaQuan/PddVoucherRealtimeVerifySync';
import {
  PDD_VOUCHER_VIRTUAL_CARD_BATCH_ADD,
  PddVoucherVirtualCardBatchAddRequestInterface,
  PddVoucherVirtualCardBatchAddResponseInterface,
} from './kaQuan/PddVoucherVirtualCardBatchAdd';
import {
  PDD_VOUCHER_VIRTUAL_CARD_VERIFICATION,
  PDD_VOUCHER_VIRTUAL_CARD_VERIFICATION_RESPONSE_KEY,
  PddVoucherVirtualCardVerificationRequestInterface,
  PddVoucherVirtualCardVerificationResponseInterface,
  PddVoucherVirtualCardVerificationVoucherVoucherInfoVerifyResponseResponseInterface,
  PDD_VOUCHER_VIRTUAL_CARD_VERIFICATION_LIMITERS,
} from './kaQuan/PddVoucherVirtualCardVerification';
import {
  PDD_VOUCHER_VOUCHER_COMPLAIN,
  PDD_VOUCHER_VOUCHER_COMPLAIN_RESPONSE_KEY,
  PddVoucherVoucherComplainRequestInterface,
  PddVoucherVoucherComplainResponseInterface,
  PddVoucherVoucherComplainVoucherVoucherComplainResponseResponseInterface,
  PDD_VOUCHER_VOUCHER_COMPLAIN_LIMITERS,
} from './kaQuan/PddVoucherVoucherComplain';
import {
  PDD_VOUCHER_VOUCHER_INFO_SEND,
  PDD_VOUCHER_VOUCHER_INFO_SEND_RESPONSE_KEY,
  PddVoucherVoucherInfoSendRequestInterface,
  PddVoucherVoucherInfoSendResponseInterface,
  PddVoucherVoucherInfoSendVoucherVoucherInfoSendResponseResponseInterface,
  PDD_VOUCHER_VOUCHER_INFO_SEND_LIMITERS,
} from './kaQuan/PddVoucherVoucherInfoSend';
// 发票服务API
import {
  PDD_EINVOICE_INFO_QUERY,
  PDD_EINVOICE_INFO_QUERY_RESPONSE_KEY,
  PddEinvoiceInfoQueryRequestInterface,
  PddEinvoiceInfoQueryResponseInterface,
  PddEinvoiceInfoQueryEinvoiceInfoQueryResponseResponseInterface,
  PDD_EINVOICE_INFO_QUERY_LIMITERS,
} from './faPiaoFuWu/PddEinvoiceInfoQuery';
import {
  PDD_INVOICE_APPLICATION_QUERY,
  PDD_INVOICE_APPLICATION_QUERY_RESPONSE_KEY,
  PddInvoiceApplicationQueryRequestInterface,
  PddInvoiceApplicationQueryResponseInterface,
  PddInvoiceApplicationQueryInvoiceApplicationQueryResponseResponseInterface,
  PDD_INVOICE_APPLICATION_QUERY_LIMITERS,
} from './faPiaoFuWu/PddInvoiceApplicationQuery';
import {
  PDD_INVOICE_DETAIL_INVALID,
  PDD_INVOICE_DETAIL_INVALID_RESPONSE_KEY,
  PddInvoiceDetailInvalidRequestInterface,
  PddInvoiceDetailInvalidResponseInterface,
  PddInvoiceDetailInvalidInvoiceDetailInvalidResponseResponseInterface,
  PDD_INVOICE_DETAIL_INVALID_LIMITERS,
} from './faPiaoFuWu/PddInvoiceDetailInvalid';
import {
  PDD_INVOICE_DETAIL_UPLOAD,
  PDD_INVOICE_DETAIL_UPLOAD_RESPONSE_KEY,
  PddInvoiceDetailUploadRequestInterface,
  PddInvoiceDetailUploadResponseInterface,
  PddInvoiceDetailUploadInvoiceDetailUploadResponseResponseInterface,
} from './faPiaoFuWu/PddInvoiceDetailUpload';
// 店铺API
import {
  PDD_MALL_CPS_PROTOCOL_STATUS_QUERY,
  PDD_MALL_CPS_PROTOCOL_STATUS_QUERY_RESPONSE_KEY,
  PddMallCpsProtocolStatusQueryRequestInterface,
  PddMallCpsProtocolStatusQueryResponseInterface,
  PddMallCpsProtocolStatusQueryMallCpsProtocolStatusQueryResponseResponseInterface,
} from './dianPu/PddMallCpsProtocolStatusQuery';
import {
  PDD_MALL_INFO_GET,
  PDD_MALL_INFO_GET_RESPONSE_KEY,
  PddMallInfoGetRequestInterface,
  PddMallInfoGetResponseInterface,
  PddMallInfoGetMallInfoGetResponseResponseInterface,
  PDD_MALL_INFO_GET_LIMITERS,
} from './dianPu/PddMallInfoGet';
import {
  PDD_TRACE_SOURCE_UPLOAD_CODE_INFO,
  PddTraceSourceUploadCodeInfoRequestInterface,
  PddTraceSourceUploadCodeInfoResponseInterface,
} from './dianPu/PddTraceSourceUploadCodeInfo';
import {
  PDD_TRACE_SOURCE_UPLOAD_PLAN_INFO,
  PddTraceSourceUploadPlanInfoRequestInterface,
  PddTraceSourceUploadPlanInfoResponseInterface,
} from './dianPu/PddTraceSourceUploadPlanInfo';
import {
  PDD_TRACE_SOURCE_QUERY_GOODS_INFO,
  PddTraceSourceQueryGoodsInfoRequestInterface,
  PddTraceSourceQueryGoodsInfoResponseInterface,
} from './dianPu/PddTraceSourceQueryGoodsInfo';
// 工具API
import {
  PDD_OPEN_DECRYPT_BATCH,
  PDD_OPEN_DECRYPT_BATCH_RESPONSE_KEY,
  PddOpenDecryptBatchRequestInterface,
  PddOpenDecryptBatchResponseInterface,
  PddOpenDecryptBatchOpenDecryptBatchResponseResponseInterface,
  PDD_OPEN_DECRYPT_BATCH_LIMITERS,
} from './gongJu/PddOpenDecryptBatch';
import {
  PDD_OPEN_DECRYPT_MASK_BATCH,
  PDD_OPEN_DECRYPT_MASK_BATCH_RESPONSE_KEY,
  PddOpenDecryptMaskBatchRequestInterface,
  PddOpenDecryptMaskBatchResponseInterface,
  PddOpenDecryptMaskBatchOpenDecryptMaskBatchResponseResponseInterface,
  PDD_OPEN_DECRYPT_MASK_BATCH_LIMITERS,
} from './gongJu/PddOpenDecryptMaskBatch';
import {
  PDD_OPEN_KMS_ENCRYPT_BATCH,
  PDD_OPEN_KMS_ENCRYPT_BATCH_RESPONSE_KEY,
  PddOpenKmsEncryptBatchRequestInterface,
  PddOpenKmsEncryptBatchResponseInterface,
  PddOpenKmsEncryptBatchOpenKmsEncryptBatchResponseResponseInterface,
  PDD_OPEN_KMS_ENCRYPT_BATCH_LIMITERS,
} from './gongJu/PddOpenKmsEncryptBatch';
import {
  PDD_OPEN_KMS_SEARCH_BATCH,
  PDD_OPEN_KMS_SEARCH_BATCH_RESPONSE_KEY,
  PddOpenKmsSearchBatchRequestInterface,
  PddOpenKmsSearchBatchResponseInterface,
  PddOpenKmsSearchBatchOpenKmsSearchBatchResponseResponseInterface,
  PDD_OPEN_KMS_SEARCH_BATCH_LIMITERS,
} from './gongJu/PddOpenKmsSearchBatch';
import {
  PDD_OPEN_VIRTUAL_NUMBER_CHECK,
  PDD_OPEN_VIRTUAL_NUMBER_CHECK_RESPONSE_KEY,
  PddOpenVirtualNumberCheckRequestInterface,
  PddOpenVirtualNumberCheckResponseInterface,
  PddOpenVirtualNumberCheckOpenVirtualNumberCheckResponseResponseInterface,
} from './gongJu/PddOpenVirtualNumberCheck';
import {
  PDD_POP_AUTH_TOKEN_CREATE,
  PDD_POP_AUTH_TOKEN_CREATE_RESPONSE_KEY,
  PddPopAuthTokenCreateRequestInterface,
  PddPopAuthTokenCreateResponseInterface,
  PddPopAuthTokenCreatePopAuthTokenCreateResponseResponseInterface,
} from './gongJu/PddPopAuthTokenCreate';
import {
  PDD_POP_AUTH_TOKEN_REFRESH,
  PDD_POP_AUTH_TOKEN_REFRESH_RESPONSE_KEY,
  PddPopAuthTokenRefreshRequestInterface,
  PddPopAuthTokenRefreshResponseInterface,
  PddPopAuthTokenRefreshPopAuthTokenRefreshResponseResponseInterface,
} from './gongJu/PddPopAuthTokenRefresh';
import {
  PDD_TIME_GET,
  PDD_TIME_GET_RESPONSE_KEY,
  PddTimeGetRequestInterface,
  PddTimeGetResponseInterface,
  PddTimeGetTimeGetResponseResponseInterface,
} from './gongJu/PddTimeGet';
// 仓储API
import {
  PDD_EXPRESS_ADD_DEPOT,
  PddExpressAddDepotRequestInterface,
  PddExpressAddDepotResponseInterface,
} from './cangChu/PddExpressAddDepot';
import {
  PDD_EXPRESS_CHANGE_DEPOT_INFO,
  PddExpressChangeDepotInfoRequestInterface,
  PddExpressChangeDepotInfoResponseInterface,
} from './cangChu/PddExpressChangeDepotInfo';
import {
  PDD_EXPRESS_DEPOT_INFO_GET,
  PDD_EXPRESS_DEPOT_INFO_GET_RESPONSE_KEY,
  PddExpressDepotInfoGetRequestInterface,
  PddExpressDepotInfoGetResponseInterface,
  PddExpressDepotInfoGetOpenApiResponseResponseInterface,
} from './cangChu/PddExpressDepotInfoGet';
import {
  PDD_EXPRESS_DEPOT_LIST_GET,
  PDD_EXPRESS_DEPOT_LIST_GET_RESPONSE_KEY,
  PddExpressDepotListGetRequestInterface,
  PddExpressDepotListGetResponseInterface,
  PddExpressDepotListGetOpenApiResponseResponseInterface,
} from './cangChu/PddExpressDepotListGet';
import {
  PDD_EXPRESS_MALL_DEPOT_SIMPLE_GET,
  PDD_EXPRESS_MALL_DEPOT_SIMPLE_GET_RESPONSE_KEY,
  PddExpressMallDepotSimpleGetRequestInterface,
  PddExpressMallDepotSimpleGetResponseInterface,
  PddExpressMallDepotSimpleGetOpenApiResponseResponseInterface,
} from './cangChu/PddExpressMallDepotSimpleGet';
import {
  PDD_EXPRESS_SEARCH_DEPOT,
  PDD_EXPRESS_SEARCH_DEPOT_RESPONSE_KEY,
  PddExpressSearchDepotRequestInterface,
  PddExpressSearchDepotResponseInterface,
  PddExpressSearchDepotOpenApiResponseResponseInterface,
} from './cangChu/PddExpressSearchDepot';
import {
  PDD_STOCK_DEPOT_PRIORITY_LIST,
  PDD_STOCK_DEPOT_PRIORITY_LIST_RESPONSE_KEY,
  PddStockDepotPriorityListRequestInterface,
  PddStockDepotPriorityListResponseInterface,
  PddStockDepotPriorityListOpenApiResponseResponseInterface,
} from './cangChu/PddStockDepotPriorityList';
import {
  PDD_STOCK_DEPOT_PRIORITY_UPDATE,
  PddStockDepotPriorityUpdateRequestInterface,
  PddStockDepotPriorityUpdateResponseInterface,
} from './cangChu/PddStockDepotPriorityUpdate';
import {
  PDD_STOCK_GOODS_ID_TO_SKU_QUERY,
  PDD_STOCK_GOODS_ID_TO_SKU_QUERY_RESPONSE_KEY,
  PddStockGoodsIdToSkuQueryRequestInterface,
  PddStockGoodsIdToSkuQueryResponseInterface,
  PddStockGoodsIdToSkuQueryOpenApiResponseResponseInterface,
} from './cangChu/PddStockGoodsIdToSkuQuery';
import {
  PDD_STOCK_WARE_CREATE,
  PddStockWareCreateRequestInterface,
  PddStockWareCreateResponseInterface,
} from './cangChu/PddStockWareCreate';
import {
  PDD_STOCK_WARE_DELETE,
  PddStockWareDeleteRequestInterface,
  PddStockWareDeleteResponseInterface,
} from './cangChu/PddStockWareDelete';
import {
  PDD_STOCK_WARE_DETAIL_QUERY,
  PDD_STOCK_WARE_DETAIL_QUERY_RESPONSE_KEY,
  PddStockWareDetailQueryRequestInterface,
  PddStockWareDetailQueryResponseInterface,
  PddStockWareDetailQueryOpenApiResponseResponseInterface,
} from './cangChu/PddStockWareDetailQuery';
import {
  PDD_STOCK_WARE_INFO_LIST,
  PDD_STOCK_WARE_INFO_LIST_RESPONSE_KEY,
  PddStockWareInfoListRequestInterface,
  PddStockWareInfoListResponseInterface,
  PddStockWareInfoListStockWareInfoListResponseResponseInterface,
} from './cangChu/PddStockWareInfoList';
import {
  PDD_STOCK_WARE_LIST,
  PDD_STOCK_WARE_LIST_RESPONSE_KEY,
  PddStockWareListRequestInterface,
  PddStockWareListResponseInterface,
  PddStockWareListOpenApiResponseResponseInterface,
} from './cangChu/PddStockWareList';
import {
  PDD_STOCK_WARE_MOVE,
  PddStockWareMoveRequestInterface,
  PddStockWareMoveResponseInterface,
} from './cangChu/PddStockWareMove';
import {
  PDD_STOCK_WARE_SKU_UPDATE,
  PddStockWareSkuUpdateRequestInterface,
  PddStockWareSkuUpdateResponseInterface,
} from './cangChu/PddStockWareSkuUpdate';
import {
  PDD_STOCK_WARE_UPDATE,
  PddStockWareUpdateRequestInterface,
  PddStockWareUpdateResponseInterface,
} from './cangChu/PddStockWareUpdate';
import {
  PDD_STOCK_WARE_WAREHOUSE_QUERY,
  PddStockWareWarehouseQueryRequestInterface,
  PddStockWareWarehouseQueryResponseInterface,
} from './cangChu/PddStockWareWarehouseQuery';
// 消息服务API
import {
  PDD_PMC_ACCRUE_QUERY,
  PDD_PMC_ACCRUE_QUERY_RESPONSE_KEY,
  PddPmcAccrueQueryRequestInterface,
  PddPmcAccrueQueryResponseInterface,
  PddPmcAccrueQueryPmcUserGetResponseResponseInterface,
  PDD_PMC_ACCRUE_QUERY_LIMITERS,
} from './xiaoXiFuWu/PddPmcAccrueQuery';
import {
  PDD_PMC_USER_CANCEL,
  PDD_PMC_USER_CANCEL_RESPONSE_KEY,
  PddPmcUserCancelRequestInterface,
  PddPmcUserCancelResponseInterface,
  PddPmcUserCancelTmcUserCancelResponseResponseInterface,
} from './xiaoXiFuWu/PddPmcUserCancel';
import {
  PDD_PMC_USER_GET,
  PDD_PMC_USER_GET_RESPONSE_KEY,
  PddPmcUserGetRequestInterface,
  PddPmcUserGetResponseInterface,
  PddPmcUserGetPmcUserGetResponseResponseInterface,
} from './xiaoXiFuWu/PddPmcUserGet';
import {
  PDD_PMC_USER_PERMIT,
  PDD_PMC_USER_PERMIT_RESPONSE_KEY,
  PddPmcUserPermitRequestInterface,
  PddPmcUserPermitResponseInterface,
  PddPmcUserPermitPmcUserPermitResponseResponseInterface,
} from './xiaoXiFuWu/PddPmcUserPermit';
// 电子面单API
import {
  PDD_CLOUDPRINT_CMDPRINT_RENDER,
  PDD_CLOUDPRINT_CMDPRINT_RENDER_RESPONSE_KEY,
  PddCloudprintCmdprintRenderRequestInterface,
  PddCloudprintCmdprintRenderResponseInterface,
  PddCloudprintCmdprintRenderCloudprintCmdprintRenderResponseResponseInterface,
} from './dianZiMianDan/PddCloudprintCmdprintRender';
import {
  PDD_CLOUDPRINT_CUSTOMARES_GET,
  PDD_CLOUDPRINT_CUSTOMARES_GET_RESPONSE_KEY,
  PddCloudprintCustomaresGetRequestInterface,
  PddCloudprintCustomaresGetResponseInterface,
  PddCloudprintCustomaresGetPddCloudprintCustomaresGetResponseResponseInterface,
} from './dianZiMianDan/PddCloudprintCustomaresGet';
import {
  PDD_CLOUDPRINT_PORTABLEPRINTER_GET,
  PDD_CLOUDPRINT_PORTABLEPRINTER_GET_RESPONSE_KEY,
  PddCloudprintPortableprinterGetRequestInterface,
  PddCloudprintPortableprinterGetResponseInterface,
  PddCloudprintPortableprinterGetPddCloudprintPortableprinterGetResponseResponseInterface,
} from './dianZiMianDan/PddCloudprintPortableprinterGet';
import {
  PDD_CLOUDPRINT_STDTEMPLATES_GET,
  PDD_CLOUDPRINT_STDTEMPLATES_GET_RESPONSE_KEY,
  PddCloudprintStdtemplatesGetRequestInterface,
  PddCloudprintStdtemplatesGetResponseInterface,
  PddCloudprintStdtemplatesGetPddCloudprintStdtemplatesGetResponseResponseInterface,
  PDD_CLOUDPRINT_STDTEMPLATES_GET_LIMITERS,
} from './dianZiMianDan/PddCloudprintStdtemplatesGet';
import {
  PDD_WAYBILL_CANCEL,
  PDD_WAYBILL_CANCEL_RESPONSE_KEY,
  PddWaybillCancelRequestInterface,
  PddWaybillCancelResponseInterface,
  PddWaybillCancelPddWaybillCancelResponseResponseInterface,
} from './dianZiMianDan/PddWaybillCancel';
import {
  PDD_WAYBILL_GET,
  PDD_WAYBILL_GET_RESPONSE_KEY,
  PddWaybillGetRequestInterface,
  PddWaybillGetResponseInterface,
  PddWaybillGetPddWaybillGetResponseResponseInterface,
  PDD_WAYBILL_GET_LIMITERS,
} from './dianZiMianDan/PddWaybillGet';
import {
  PDD_WAYBILL_QUERY_BY_WAYBILLCODE,
  PDD_WAYBILL_QUERY_BY_WAYBILLCODE_RESPONSE_KEY,
  PddWaybillQueryByWaybillcodeRequestInterface,
  PddWaybillQueryByWaybillcodeResponseInterface,
  PddWaybillQueryByWaybillcodePddWaybillQueryByWaybillcodeResponseResponseInterface,
} from './dianZiMianDan/PddWaybillQueryByWaybillcode';
import {
  PDD_WAYBILL_SEARCH,
  PDD_WAYBILL_SEARCH_RESPONSE_KEY,
  PddWaybillSearchRequestInterface,
  PddWaybillSearchResponseInterface,
  PddWaybillSearchPddWaybillSearchResponseResponseInterface,
  PDD_WAYBILL_SEARCH_LIMITERS,
} from './dianZiMianDan/PddWaybillSearch';
import {
  PDD_WAYBILL_UPDATE,
  PDD_WAYBILL_UPDATE_RESPONSE_KEY,
  PddWaybillUpdateRequestInterface,
  PddWaybillUpdateResponseInterface,
  PddWaybillUpdatePddWaybillUpdateResponseResponseInterface,
} from './dianZiMianDan/PddWaybillUpdate';
// 财务API
import {
  PDD_FINANCE_BALANCE_DAILY_BILL_URL_GET,
  PDD_FINANCE_BALANCE_DAILY_BILL_URL_GET_RESPONSE_KEY,
  PddFinanceBalanceDailyBillUrlGetRequestInterface,
  PddFinanceBalanceDailyBillUrlGetResponseInterface,
  PddFinanceBalanceDailyBillUrlGetFinanceBalanceDailyBillUrlGetResponseResponseInterface,
  PDD_FINANCE_BALANCE_DAILY_BILL_URL_GET_LIMITERS,
} from './caiWu/PddFinanceBalanceDailyBillUrlGet';
// 服务市场API
import {
  PDD_SERVICEMARKET_CONTRACT_SEARCH,
  PDD_SERVICEMARKET_CONTRACT_SEARCH_RESPONSE_KEY,
  PddServicemarketContractSearchRequestInterface,
  PddServicemarketContractSearchResponseInterface,
  PddServicemarketContractSearchServicemarketContractSearchResponseResponseInterface,
} from './fuWuShiChang/PddServicemarketContractSearch';
import {
  PDD_SERVICEMARKET_SETTLEMENTBILL_GET,
  PDD_SERVICEMARKET_SETTLEMENTBILL_GET_RESPONSE_KEY,
  PddServicemarketSettlementbillGetRequestInterface,
  PddServicemarketSettlementbillGetResponseInterface,
  PddServicemarketSettlementbillGetSettlementBillSearchResponseResponseInterface,
} from './fuWuShiChang/PddServicemarketSettlementbillGet';
import {
  PDD_SERVICEMARKET_TRADELIST_GET,
  PDD_SERVICEMARKET_TRADELIST_GET_RESPONSE_KEY,
  PddServicemarketTradelistGetRequestInterface,
  PddServicemarketTradelistGetResponseInterface,
  PddServicemarketTradelistGetMallBalanceFlowSearchResponseResponseInterface,
  PDD_SERVICEMARKET_TRADELIST_GET_LIMITERS,
} from './fuWuShiChang/PddServicemarketTradelistGet';
import {
  PDD_VAS_ORDER_SEARCH,
  PDD_VAS_ORDER_SEARCH_RESPONSE_KEY,
  PddVasOrderSearchRequestInterface,
  PddVasOrderSearchResponseInterface,
  PddVasOrderSearchVasOrderSearchResponseResponseInterface,
  PDD_VAS_ORDER_SEARCH_LIMITERS,
} from './fuWuShiChang/PddVasOrderSearch';
// 短信服务API
import {
  PDD_OPEN_MSG_SERVICE_QUERY_MSG_RECORD,
  PddOpenMsgServiceQueryMsgRecordRequestInterface,
  PddOpenMsgServiceQueryMsgRecordResponseInterface,
} from './duanXinFuWu/PddOpenMsgServiceQueryMsgRecord';
import {
  PDD_OPEN_MSG_SERVICE_SEND_BATCH_MSG,
  PddOpenMsgServiceSendBatchMsgRequestInterface,
  PddOpenMsgServiceSendBatchMsgResponseInterface,
} from './duanXinFuWu/PddOpenMsgServiceSendBatchMsg';
import {
  PDD_OPEN_MSG_SERVICE_SEND_EXPRESS_MSG,
  PddOpenMsgServiceSendExpressMsgRequestInterface,
  PddOpenMsgServiceSendExpressMsgResponseInterface,
} from './duanXinFuWu/PddOpenMsgServiceSendExpressMsg';
import {
  PDD_OPEN_MSG_SERVICE_SEND_MSG,
  PddOpenMsgServiceSendMsgRequestInterface,
  PddOpenMsgServiceSendMsgResponseInterface,
} from './duanXinFuWu/PddOpenMsgServiceSendMsg';
// 短信供应商API
import {
  PDD_SMS_DETAILBILL_PUSH,
  PddSmsDetailbillPushRequestInterface,
  PddSmsDetailbillPushResponseInterface,
} from './duanXinGongYingShang/PddSmsDetailbillPush';
import {
  PDD_SMS_VENDOR_COMPLAINT_CREATE,
  PddSmsVendorComplaintCreateRequestInterface,
  PddSmsVendorComplaintCreateResponseInterface,
} from './duanXinGongYingShang/PddSmsVendorComplaintCreate';
// 多多推广API
import {
  PDD_AD_API_ADVERTISER_OPEN_ACCOUNT,
  PddAdApiAdvertiserOpenAccountRequestInterface,
  PddAdApiAdvertiserOpenAccountResponseInterface,
  PDD_AD_API_ADVERTISER_OPEN_ACCOUNT_LIMITERS,
} from './duoDuoTuiGuang/PddAdApiAdvertiserOpenAccount';
import {
  PDD_AD_API_ADVERTISER_QUERY_ACCOUNT_BALANCE,
  PddAdApiAdvertiserQueryAccountBalanceRequestInterface,
  PddAdApiAdvertiserQueryAccountBalanceResponseInterface,
  PDD_AD_API_ADVERTISER_QUERY_ACCOUNT_BALANCE_LIMITERS,
} from './duoDuoTuiGuang/PddAdApiAdvertiserQueryAccountBalance';
import {
  PDD_AD_API_ADVERTISER_QUERY_ACCOUNT_INFO,
  PddAdApiAdvertiserQueryAccountInfoRequestInterface,
  PddAdApiAdvertiserQueryAccountInfoResponseInterface,
  PDD_AD_API_ADVERTISER_QUERY_ACCOUNT_INFO_LIMITERS,
} from './duoDuoTuiGuang/PddAdApiAdvertiserQueryAccountInfo';
import {
  PDD_AD_API_ADVERTISER_QUERY_DETAIL,
  PddAdApiAdvertiserQueryDetailRequestInterface,
  PddAdApiAdvertiserQueryDetailResponseInterface,
  PDD_AD_API_ADVERTISER_QUERY_DETAIL_LIMITERS,
} from './duoDuoTuiGuang/PddAdApiAdvertiserQueryDetail';
import {
  PDD_AD_API_GOODS_QUERY_GALLERY_IMAGES,
  PddAdApiGoodsQueryGalleryImagesRequestInterface,
  PddAdApiGoodsQueryGalleryImagesResponseInterface,
  PDD_AD_API_GOODS_QUERY_GALLERY_IMAGES_LIMITERS,
} from './duoDuoTuiGuang/PddAdApiGoodsQueryGalleryImages';
import {
  PDD_AD_API_GOODS_QUERY_LONG_IMAGES,
  PddAdApiGoodsQueryLongImagesRequestInterface,
  PddAdApiGoodsQueryLongImagesResponseInterface,
  PDD_AD_API_GOODS_QUERY_LONG_IMAGES_LIMITERS,
} from './duoDuoTuiGuang/PddAdApiGoodsQueryLongImages';
import {
  PDD_AD_API_GOODS_QUERY_PAGE,
  PddAdApiGoodsQueryPageRequestInterface,
  PddAdApiGoodsQueryPageResponseInterface,
  PDD_AD_API_GOODS_QUERY_PAGE_LIMITERS,
} from './duoDuoTuiGuang/PddAdApiGoodsQueryPage';
import {
  PDD_AD_API_KEYWORD_CREATE,
  PddAdApiKeywordCreateRequestInterface,
  PddAdApiKeywordCreateResponseInterface,
  PDD_AD_API_KEYWORD_CREATE_LIMITERS,
} from './duoDuoTuiGuang/PddAdApiKeywordCreate';
import {
  PDD_AD_API_KEYWORD_DELETE,
  PddAdApiKeywordDeleteRequestInterface,
  PddAdApiKeywordDeleteResponseInterface,
  PDD_AD_API_KEYWORD_DELETE_LIMITERS,
} from './duoDuoTuiGuang/PddAdApiKeywordDelete';
import {
  PDD_AD_API_KEYWORD_QUERY_LIST,
  PddAdApiKeywordQueryListRequestInterface,
  PddAdApiKeywordQueryListResponseInterface,
  PDD_AD_API_KEYWORD_QUERY_LIST_LIMITERS,
} from './duoDuoTuiGuang/PddAdApiKeywordQueryList';
import {
  PDD_AD_API_KEYWORD_RECOMMEND_GET,
  PddAdApiKeywordRecommendGetRequestInterface,
  PddAdApiKeywordRecommendGetResponseInterface,
  PDD_AD_API_KEYWORD_RECOMMEND_GET_LIMITERS,
} from './duoDuoTuiGuang/PddAdApiKeywordRecommendGet';
import {
  PDD_AD_API_KEYWORD_RELEVANCE_GET,
  PddAdApiKeywordRelevanceGetRequestInterface,
  PddAdApiKeywordRelevanceGetResponseInterface,
  PDD_AD_API_KEYWORD_RELEVANCE_GET_LIMITERS,
} from './duoDuoTuiGuang/PddAdApiKeywordRelevanceGet';
import {
  PDD_AD_API_KEYWORD_UPDATE,
  PddAdApiKeywordUpdateRequestInterface,
  PddAdApiKeywordUpdateResponseInterface,
  PDD_AD_API_KEYWORD_UPDATE_LIMITERS,
} from './duoDuoTuiGuang/PddAdApiKeywordUpdate';
import {
  PDD_AD_API_PLAN_CREATE,
  PddAdApiPlanCreateRequestInterface,
  PddAdApiPlanCreateResponseInterface,
  PDD_AD_API_PLAN_CREATE_LIMITERS,
} from './duoDuoTuiGuang/PddAdApiPlanCreate';
import {
  PDD_AD_API_PLAN_DELETE,
  PddAdApiPlanDeleteRequestInterface,
  PddAdApiPlanDeleteResponseInterface,
  PDD_AD_API_PLAN_DELETE_LIMITERS,
} from './duoDuoTuiGuang/PddAdApiPlanDelete';
import {
  PDD_AD_API_PLAN_QUERY_CAN_CREATE_AD_PLAN,
  PddAdApiPlanQueryCanCreateAdPlanRequestInterface,
  PddAdApiPlanQueryCanCreateAdPlanResponseInterface,
  PDD_AD_API_PLAN_QUERY_CAN_CREATE_AD_PLAN_LIMITERS,
} from './duoDuoTuiGuang/PddAdApiPlanQueryCanCreateAdPlan';
import {
  PDD_AD_API_PLAN_QUERY_CAN_UPDATE_MAX_COST,
  PddAdApiPlanQueryCanUpdateMaxCostRequestInterface,
  PddAdApiPlanQueryCanUpdateMaxCostResponseInterface,
  PDD_AD_API_PLAN_QUERY_CAN_UPDATE_MAX_COST_LIMITERS,
} from './duoDuoTuiGuang/PddAdApiPlanQueryCanUpdateMaxCost';
import {
  PDD_AD_API_PLAN_QUERY_LIST,
  PddAdApiPlanQueryListRequestInterface,
  PddAdApiPlanQueryListResponseInterface,
  PDD_AD_API_PLAN_QUERY_LIST_LIMITERS,
} from './duoDuoTuiGuang/PddAdApiPlanQueryList';
import {
  PDD_AD_API_PLAN_UPDATE_DATA_OPERATE_STATUS,
  PddAdApiPlanUpdateDataOperateStatusRequestInterface,
  PddAdApiPlanUpdateDataOperateStatusResponseInterface,
  PDD_AD_API_PLAN_UPDATE_DATA_OPERATE_STATUS_LIMITERS,
} from './duoDuoTuiGuang/PddAdApiPlanUpdateDataOperateStatus';
import {
  PDD_AD_API_PLAN_UPDATE_MAX_COST,
  PddAdApiPlanUpdateMaxCostRequestInterface,
  PddAdApiPlanUpdateMaxCostResponseInterface,
  PDD_AD_API_PLAN_UPDATE_MAX_COST_LIMITERS,
} from './duoDuoTuiGuang/PddAdApiPlanUpdateMaxCost';
import {
  PDD_AD_API_PLAN_UPDATE_PLAN_DISCOUNT,
  PddAdApiPlanUpdatePlanDiscountRequestInterface,
  PddAdApiPlanUpdatePlanDiscountResponseInterface,
  PDD_AD_API_PLAN_UPDATE_PLAN_DISCOUNT_LIMITERS,
} from './duoDuoTuiGuang/PddAdApiPlanUpdatePlanDiscount';
import {
  PDD_AD_API_PLAN_UPDATE_PLAN_NAME,
  PddAdApiPlanUpdatePlanNameRequestInterface,
  PddAdApiPlanUpdatePlanNameResponseInterface,
  PDD_AD_API_PLAN_UPDATE_PLAN_NAME_LIMITERS,
} from './duoDuoTuiGuang/PddAdApiPlanUpdatePlanName';
import {
  PDD_AD_API_PLAN_UPDATE_PLAN_TO_OCPC,
  PddAdApiPlanUpdatePlanToOcpcRequestInterface,
  PddAdApiPlanUpdatePlanToOcpcResponseInterface,
} from './duoDuoTuiGuang/PddAdApiPlanUpdatePlanToOcpc';
import {
  PDD_AD_API_REPORT_DAILY_REPORT_QUERY,
  PddAdApiReportDailyReportQueryRequestInterface,
  PddAdApiReportDailyReportQueryResponseInterface,
  PDD_AD_API_REPORT_DAILY_REPORT_QUERY_LIMITERS,
} from './duoDuoTuiGuang/PddAdApiReportDailyReportQuery';
import {
  PDD_AD_API_REPORT_ENTITY_REPORT_QUERY,
  PddAdApiReportEntityReportQueryRequestInterface,
  PddAdApiReportEntityReportQueryResponseInterface,
  PDD_AD_API_REPORT_ENTITY_REPORT_QUERY_LIMITERS,
} from './duoDuoTuiGuang/PddAdApiReportEntityReportQuery';
import {
  PDD_AD_API_REPORT_HOURLY_REPORT_QUERY,
  PddAdApiReportHourlyReportQueryRequestInterface,
  PddAdApiReportHourlyReportQueryResponseInterface,
  PDD_AD_API_REPORT_HOURLY_REPORT_QUERY_LIMITERS,
} from './duoDuoTuiGuang/PddAdApiReportHourlyReportQuery';
import {
  PDD_AD_API_UNIT_BID_DELETE,
  PddAdApiUnitBidDeleteRequestInterface,
  PddAdApiUnitBidDeleteResponseInterface,
  PDD_AD_API_UNIT_BID_DELETE_LIMITERS,
} from './duoDuoTuiGuang/PddAdApiUnitBidDelete';
import {
  PDD_AD_API_UNIT_BID_QUERY_BASE_LOCATION_PROFILE,
  PddAdApiUnitBidQueryBaseLocationProfileRequestInterface,
  PddAdApiUnitBidQueryBaseLocationProfileResponseInterface,
  PDD_AD_API_UNIT_BID_QUERY_BASE_LOCATION_PROFILE_LIMITERS,
} from './duoDuoTuiGuang/PddAdApiUnitBidQueryBaseLocationProfile';
import {
  PDD_AD_API_UNIT_BID_QUERY_BASE_TARGET_PROFILE,
  PddAdApiUnitBidQueryBaseTargetProfileRequestInterface,
  PddAdApiUnitBidQueryBaseTargetProfileResponseInterface,
  PDD_AD_API_UNIT_BID_QUERY_BASE_TARGET_PROFILE_LIMITERS,
} from './duoDuoTuiGuang/PddAdApiUnitBidQueryBaseTargetProfile';
import {
  PDD_AD_API_UNIT_BID_QUERY_LIST,
  PddAdApiUnitBidQueryListRequestInterface,
  PddAdApiUnitBidQueryListResponseInterface,
  PDD_AD_API_UNIT_BID_QUERY_LIST_LIMITERS,
} from './duoDuoTuiGuang/PddAdApiUnitBidQueryList';
import {
  PDD_AD_API_UNIT_BID_QUERY_TARGETING_TAG_LIST,
  PddAdApiUnitBidQueryTargetingTagListRequestInterface,
  PddAdApiUnitBidQueryTargetingTagListResponseInterface,
  PDD_AD_API_UNIT_BID_QUERY_TARGETING_TAG_LIST_LIMITERS,
} from './duoDuoTuiGuang/PddAdApiUnitBidQueryTargetingTagList';
import {
  PDD_AD_API_UNIT_BID_SYNC,
  PddAdApiUnitBidSyncRequestInterface,
  PddAdApiUnitBidSyncResponseInterface,
  PDD_AD_API_UNIT_BID_SYNC_LIMITERS,
} from './duoDuoTuiGuang/PddAdApiUnitBidSync';
import {
  PDD_AD_API_UNIT_BID_UPDATE,
  PddAdApiUnitBidUpdateRequestInterface,
  PddAdApiUnitBidUpdateResponseInterface,
  PDD_AD_API_UNIT_BID_UPDATE_LIMITERS,
} from './duoDuoTuiGuang/PddAdApiUnitBidUpdate';
import {
  PDD_AD_API_UNIT_CREATE,
  PddAdApiUnitCreateRequestInterface,
  PddAdApiUnitCreateResponseInterface,
  PDD_AD_API_UNIT_CREATE_LIMITERS,
} from './duoDuoTuiGuang/PddAdApiUnitCreate';
import {
  PDD_AD_API_UNIT_CREATIVE_CHECK_TITLE,
  PddAdApiUnitCreativeCheckTitleRequestInterface,
  PddAdApiUnitCreativeCheckTitleResponseInterface,
  PDD_AD_API_UNIT_CREATIVE_CHECK_TITLE_LIMITERS,
} from './duoDuoTuiGuang/PddAdApiUnitCreativeCheckTitle';
import {
  PDD_AD_API_UNIT_CREATIVE_CREATE,
  PddAdApiUnitCreativeCreateRequestInterface,
  PddAdApiUnitCreativeCreateResponseInterface,
  PDD_AD_API_UNIT_CREATIVE_CREATE_LIMITERS,
} from './duoDuoTuiGuang/PddAdApiUnitCreativeCreate';
import {
  PDD_AD_API_UNIT_CREATIVE_DELETE,
  PddAdApiUnitCreativeDeleteRequestInterface,
  PddAdApiUnitCreativeDeleteResponseInterface,
  PDD_AD_API_UNIT_CREATIVE_DELETE_LIMITERS,
} from './duoDuoTuiGuang/PddAdApiUnitCreativeDelete';
import {
  PDD_AD_API_UNIT_CREATIVE_DISTRIBUTE_FLOW_RATE,
  PddAdApiUnitCreativeDistributeFlowRateRequestInterface,
  PddAdApiUnitCreativeDistributeFlowRateResponseInterface,
  PDD_AD_API_UNIT_CREATIVE_DISTRIBUTE_FLOW_RATE_LIMITERS,
} from './duoDuoTuiGuang/PddAdApiUnitCreativeDistributeFlowRate';
import {
  PDD_AD_API_UNIT_CREATIVE_QUERY_FLOW_RATE,
  PddAdApiUnitCreativeQueryFlowRateRequestInterface,
  PddAdApiUnitCreativeQueryFlowRateResponseInterface,
  PDD_AD_API_UNIT_CREATIVE_QUERY_FLOW_RATE_LIMITERS,
} from './duoDuoTuiGuang/PddAdApiUnitCreativeQueryFlowRate';
import {
  PDD_AD_API_UNIT_CREATIVE_QUERY_LIST,
  PddAdApiUnitCreativeQueryListRequestInterface,
  PddAdApiUnitCreativeQueryListResponseInterface,
  PDD_AD_API_UNIT_CREATIVE_QUERY_LIST_LIMITERS,
} from './duoDuoTuiGuang/PddAdApiUnitCreativeQueryList';
import {
  PDD_AD_API_UNIT_CREATIVE_UPDATE_CONTENT,
  PddAdApiUnitCreativeUpdateContentRequestInterface,
  PddAdApiUnitCreativeUpdateContentResponseInterface,
  PDD_AD_API_UNIT_CREATIVE_UPDATE_CONTENT_LIMITERS,
} from './duoDuoTuiGuang/PddAdApiUnitCreativeUpdateContent';
import {
  PDD_AD_API_UNIT_CREATIVE_UPDATE_DATA_OPERATE_STATUS,
  PddAdApiUnitCreativeUpdateDataOperateStatusRequestInterface,
  PddAdApiUnitCreativeUpdateDataOperateStatusResponseInterface,
  PDD_AD_API_UNIT_CREATIVE_UPDATE_DATA_OPERATE_STATUS_LIMITERS,
} from './duoDuoTuiGuang/PddAdApiUnitCreativeUpdateDataOperateStatus';
import {
  PDD_AD_API_UNIT_CREATIVE_UPDATE_SMART_CREATIVE,
  PddAdApiUnitCreativeUpdateSmartCreativeRequestInterface,
  PddAdApiUnitCreativeUpdateSmartCreativeResponseInterface,
  PDD_AD_API_UNIT_CREATIVE_UPDATE_SMART_CREATIVE_LIMITERS,
} from './duoDuoTuiGuang/PddAdApiUnitCreativeUpdateSmartCreative';
import {
  PDD_AD_API_UNIT_DELETE,
  PddAdApiUnitDeleteRequestInterface,
  PddAdApiUnitDeleteResponseInterface,
  PDD_AD_API_UNIT_DELETE_LIMITERS,
} from './duoDuoTuiGuang/PddAdApiUnitDelete';
import {
  PDD_AD_API_UNIT_QUERY_LIST,
  PddAdApiUnitQueryListRequestInterface,
  PddAdApiUnitQueryListResponseInterface,
  PDD_AD_API_UNIT_QUERY_LIST_LIMITERS,
} from './duoDuoTuiGuang/PddAdApiUnitQueryList';
import {
  PDD_AD_API_UNIT_UPDATE_DATA_OPERATE_STATUS,
  PddAdApiUnitUpdateDataOperateStatusRequestInterface,
  PddAdApiUnitUpdateDataOperateStatusResponseInterface,
  PDD_AD_API_UNIT_UPDATE_DATA_OPERATE_STATUS_LIMITERS,
} from './duoDuoTuiGuang/PddAdApiUnitUpdateDataOperateStatus';
import {
  PDD_AD_API_UNIT_UPDATE_OPTIMIZATION_MESSAGE,
  PddAdApiUnitUpdateOptimizationMessageRequestInterface,
  PddAdApiUnitUpdateOptimizationMessageResponseInterface,
  PDD_AD_API_UNIT_UPDATE_OPTIMIZATION_MESSAGE_LIMITERS,
} from './duoDuoTuiGuang/PddAdApiUnitUpdateOptimizationMessage';
import {
  PDD_AD_API_UNIT_UPDATE_UNIT_BID,
  PddAdApiUnitUpdateUnitBidRequestInterface,
  PddAdApiUnitUpdateUnitBidResponseInterface,
  PDD_AD_API_UNIT_UPDATE_UNIT_BID_LIMITERS,
} from './duoDuoTuiGuang/PddAdApiUnitUpdateUnitBid';
import {
  PDD_AD_API_UNIT_UPDATE_UNIT_NAME,
  PddAdApiUnitUpdateUnitNameRequestInterface,
  PddAdApiUnitUpdateUnitNameResponseInterface,
  PDD_AD_API_UNIT_UPDATE_UNIT_NAME_LIMITERS,
} from './duoDuoTuiGuang/PddAdApiUnitUpdateUnitName';
// 电子面单代打API
import {
  PDD_FDS_ORDER_GET,
  PDD_FDS_ORDER_GET_RESPONSE_KEY,
  PddFdsOrderGetRequestInterface,
  PddFdsOrderGetResponseInterface,
  PddFdsOrderGetPddFdsOrderGetResponseResponseInterface,
  PDD_FDS_ORDER_GET_LIMITERS,
} from './dianZiMianDanDaiDa/PddFdsOrderGet';
import {
  PDD_FDS_ORDER_LIST_GET,
  PDD_FDS_ORDER_LIST_GET_RESPONSE_KEY,
  PddFdsOrderListGetRequestInterface,
  PddFdsOrderListGetResponseInterface,
  PddFdsOrderListGetPddFdsOrderListGetResponseResponseInterface,
  PDD_FDS_ORDER_LIST_GET_LIMITERS,
} from './dianZiMianDanDaiDa/PddFdsOrderListGet';
import {
  PDD_FDS_ROLE_GET,
  PDD_FDS_ROLE_GET_RESPONSE_KEY,
  PddFdsRoleGetRequestInterface,
  PddFdsRoleGetResponseInterface,
  PddFdsRoleGetPddFdsRoleGetResponseResponseInterface,
  PDD_FDS_ROLE_GET_LIMITERS,
} from './dianZiMianDanDaiDa/PddFdsRoleGet';
import {
  PDD_FDS_WAYBILL_CANCEL,
  PDD_FDS_WAYBILL_CANCEL_RESPONSE_KEY,
  PddFdsWaybillCancelRequestInterface,
  PddFdsWaybillCancelResponseInterface,
  PddFdsWaybillCancelPddFdsWaybillCancelResponseResponseInterface,
  PDD_FDS_WAYBILL_CANCEL_LIMITERS,
} from './dianZiMianDanDaiDa/PddFdsWaybillCancel';
import {
  PDD_FDS_WAYBILL_GET,
  PDD_FDS_WAYBILL_GET_RESPONSE_KEY,
  PddFdsWaybillGetRequestInterface,
  PddFdsWaybillGetResponseInterface,
  PddFdsWaybillGetPddFdsWaybillGetResponseResponseInterface,
  PDD_FDS_WAYBILL_GET_LIMITERS,
} from './dianZiMianDanDaiDa/PddFdsWaybillGet';
import {
  PDD_FDS_WAYBILL_RETURN,
  PDD_FDS_WAYBILL_RETURN_RESPONSE_KEY,
  PddFdsWaybillReturnRequestInterface,
  PddFdsWaybillReturnResponseInterface,
  PddFdsWaybillReturnPddFdsWaybillReturnResponseResponseInterface,
  PDD_FDS_WAYBILL_RETURN_LIMITERS,
} from './dianZiMianDanDaiDa/PddFdsWaybillReturn';
import {
  PDD_FDS_WAYBILL_RETURN_SLAVE,
  PDD_FDS_WAYBILL_RETURN_SLAVE_RESPONSE_KEY,
  PddFdsWaybillReturnSlaveRequestInterface,
  PddFdsWaybillReturnSlaveResponseInterface,
  PddFdsWaybillReturnSlavePddFdsWaybillReturnSlaveResponseResponseInterface,
} from './dianZiMianDanDaiDa/PddFdsWaybillReturnSlave';
// 门店API
import {
  PDD_MALL_INFO_GROUP_ADD_POST,
  PddMallInfoGroupAddPostRequestInterface,
  PddMallInfoGroupAddPostResponseInterface,
} from './menDian/PddMallInfoGroupAddPost';
import {
  PDD_MALL_INFO_GROUP_ADD_STORE_POST,
  PDD_MALL_INFO_GROUP_ADD_STORE_POST_RESPONSE_KEY,
  PddMallInfoGroupAddStorePostRequestInterface,
  PddMallInfoGroupAddStorePostResponseInterface,
  PddMallInfoGroupAddStorePostMallInfoGroupAddStorePostResponseResponseInterface,
} from './menDian/PddMallInfoGroupAddStorePost';
import {
  PDD_MALL_INFO_GROUP_DELETE_POST,
  PddMallInfoGroupDeletePostRequestInterface,
  PddMallInfoGroupDeletePostResponseInterface,
} from './menDian/PddMallInfoGroupDeletePost';
import {
  PDD_MALL_INFO_GROUP_LIST_STORE_GET,
  PDD_MALL_INFO_GROUP_LIST_STORE_GET_RESPONSE_KEY,
  PddMallInfoGroupListStoreGetRequestInterface,
  PddMallInfoGroupListStoreGetResponseInterface,
  PddMallInfoGroupListStoreGetMallInfoGroupListStoreGetResponseResponseInterface,
} from './menDian/PddMallInfoGroupListStoreGet';
import {
  PDD_MALL_INFO_GROUP_QUERY_POST,
  PddMallInfoGroupQueryPostRequestInterface,
  PddMallInfoGroupQueryPostResponseInterface,
} from './menDian/PddMallInfoGroupQueryPost';
import {
  PDD_MALL_INFO_GROUP_REMOVE_STORE_GET,
  PDD_MALL_INFO_GROUP_REMOVE_STORE_GET_RESPONSE_KEY,
  PddMallInfoGroupRemoveStoreGetRequestInterface,
  PddMallInfoGroupRemoveStoreGetResponseInterface,
  PddMallInfoGroupRemoveStoreGetMallInfoGroupRemoveStoreGetResponseResponseInterface,
} from './menDian/PddMallInfoGroupRemoveStoreGet';
import {
  PDD_MALL_INFO_GROUP_UPDATE_POST,
  PddMallInfoGroupUpdatePostRequestInterface,
  PddMallInfoGroupUpdatePostResponseInterface,
} from './menDian/PddMallInfoGroupUpdatePost';
import {
  PDD_MALL_INFO_STORE_CREATE_POST,
  PDD_MALL_INFO_STORE_CREATE_POST_RESPONSE_KEY,
  PddMallInfoStoreCreatePostRequestInterface,
  PddMallInfoStoreCreatePostResponseInterface,
  PddMallInfoStoreCreatePostMallInfoStoreCreatePostResponseResponseInterface,
} from './menDian/PddMallInfoStoreCreatePost';
import {
  PDD_MALL_INFO_STORE_CREATE_POST_NOPOI,
  PddMallInfoStoreCreatePostNopoiRequestInterface,
  PddMallInfoStoreCreatePostNopoiResponseInterface,
} from './menDian/PddMallInfoStoreCreatePostNopoi';
import {
  PDD_MALL_INFO_STORE_DELETE_POST,
  PDD_MALL_INFO_STORE_DELETE_POST_RESPONSE_KEY,
  PddMallInfoStoreDeletePostRequestInterface,
  PddMallInfoStoreDeletePostResponseInterface,
  PddMallInfoStoreDeletePostMallInfoStoreDeletePostResponseResponseInterface,
} from './menDian/PddMallInfoStoreDeletePost';
import {
  PDD_MALL_INFO_STORE_GET,
  PddMallInfoStoreGetRequestInterface,
  PddMallInfoStoreGetResponseInterface,
} from './menDian/PddMallInfoStoreGet';
import {
  PDD_MALL_INFO_STORE_UPDATE_POST,
  PDD_MALL_INFO_STORE_UPDATE_POST_RESPONSE_KEY,
  PddMallInfoStoreUpdatePostRequestInterface,
  PddMallInfoStoreUpdatePostResponseInterface,
  PddMallInfoStoreUpdatePostMallInfoStoreUpdatePostResponseResponseInterface,
} from './menDian/PddMallInfoStoreUpdatePost';
import {
  PDD_MALL_INFO_STORE_UPDATE_POST_NOPOI,
  PddMallInfoStoreUpdatePostNopoiRequestInterface,
  PddMallInfoStoreUpdatePostNopoiResponseInterface,
} from './menDian/PddMallInfoStoreUpdatePostNopoi';
import {
  PDD_QRPAY_PAYEE_REGISTER,
  PDD_QRPAY_PAYEE_REGISTER_RESPONSE_KEY,
  PddQrpayPayeeRegisterRequestInterface,
  PddQrpayPayeeRegisterResponseInterface,
  PddQrpayPayeeRegisterQrpayPayeeRegisterResponseResponseInterface,
  PDD_QRPAY_PAYEE_REGISTER_LIMITERS,
} from './menDian/PddQrpayPayeeRegister';
// 多多国际API
import {
  PDD_MALL_INFO_BONDED_WAREHOUSE_GET,
  PDD_MALL_INFO_BONDED_WAREHOUSE_GET_RESPONSE_KEY,
  PddMallInfoBondedWarehouseGetRequestInterface,
  PddMallInfoBondedWarehouseGetResponseInterface,
  PddMallInfoBondedWarehouseGetMallInfoBondedWarehouseGetResponseResponseInterface,
  PDD_MALL_INFO_BONDED_WAREHOUSE_GET_LIMITERS,
} from './duoDuoGuoJi/PddMallInfoBondedWarehouseGet';
import {
  PDD_OVERSEA_CLEARANCE_GET,
  PDD_OVERSEA_CLEARANCE_GET_RESPONSE_KEY,
  PddOverseaClearanceGetRequestInterface,
  PddOverseaClearanceGetResponseInterface,
  PddOverseaClearanceGetClearanceResponseResponseInterface,
} from './duoDuoGuoJi/PddOverseaClearanceGet';
import {
  PDD_OVERSEA_DECLARATION_FAIL_NOTIFY,
  PDD_OVERSEA_DECLARATION_FAIL_NOTIFY_RESPONSE_KEY,
  PddOverseaDeclarationFailNotifyRequestInterface,
  PddOverseaDeclarationFailNotifyResponseInterface,
  PddOverseaDeclarationFailNotifyNotifyExceededResponseResponseInterface,
} from './duoDuoGuoJi/PddOverseaDeclarationFailNotify';
// 方舟旅游门票API
import {
  PDD_TICKET_AREACODE_GET,
  PddTicketAreacodeGetRequestInterface,
  PddTicketAreacodeGetResponseInterface,
} from './fangZhouLvYouMenPiao/PddTicketAreacodeGet';
import {
  PDD_TICKET_GOODS_QUERY,
  PDD_TICKET_GOODS_QUERY_RESPONSE_KEY,
  PddTicketGoodsQueryRequestInterface,
  PddTicketGoodsQueryResponseInterface,
  PddTicketGoodsQueryGoodsDetailGetResponseResponseInterface,
} from './fangZhouLvYouMenPiao/PddTicketGoodsQuery';
import {
  PDD_TICKET_GOODS_UPLOAD,
  PDD_TICKET_GOODS_UPLOAD_RESPONSE_KEY,
  PddTicketGoodsUploadRequestInterface,
  PddTicketGoodsUploadResponseInterface,
  PddTicketGoodsUploadGoodsUploadResponseResponseInterface,
} from './fangZhouLvYouMenPiao/PddTicketGoodsUpload';
import {
  PDD_TICKET_ORDER_CREATE_NOTIFYCATION,
  PddTicketOrderCreateNotifycationRequestInterface,
  PddTicketOrderCreateNotifycationResponseInterface,
} from './fangZhouLvYouMenPiao/PddTicketOrderCreateNotifycation';
import {
  PDD_TICKET_ORDER_REFUND_NOTIFYCATION,
  PddTicketOrderRefundNotifycationRequestInterface,
  PddTicketOrderRefundNotifycationResponseInterface,
} from './fangZhouLvYouMenPiao/PddTicketOrderRefundNotifycation';
import {
  PDD_TICKET_SCENIC_GET,
  PddTicketScenicGetRequestInterface,
  PddTicketScenicGetResponseInterface,
} from './fangZhouLvYouMenPiao/PddTicketScenicGet';
import {
  PDD_TICKET_SKU_RULE_ADD,
  PddTicketSkuRuleAddRequestInterface,
  PddTicketSkuRuleAddResponseInterface,
} from './fangZhouLvYouMenPiao/PddTicketSkuRuleAdd';
import {
  PDD_TICKET_SKU_RULE_EDIT,
  PddTicketSkuRuleEditRequestInterface,
  PddTicketSkuRuleEditResponseInterface,
} from './fangZhouLvYouMenPiao/PddTicketSkuRuleEdit';
import {
  PDD_TICKET_SKU_RULE_GET,
  PddTicketSkuRuleGetRequestInterface,
  PddTicketSkuRuleGetResponseInterface,
} from './fangZhouLvYouMenPiao/PddTicketSkuRuleGet';
import {
  PDD_TICKET_VERIFICATION_NOTIFYCATION,
  PddTicketVerificationNotifycationRequestInterface,
  PddTicketVerificationNotifycationResponseInterface,
} from './fangZhouLvYouMenPiao/PddTicketVerificationNotifycation';
// 方舟多多云API
import {
  PDD_CLOUD_ISV_PAGE_CODE,
  PddCloudIsvPageCodeRequestInterface,
  PddCloudIsvPageCodeResponseInterface,
} from './fangZhouDuoDuoYun/PddCloudIsvPageCode';
import {
  PDD_CLOUD_SECURITY_EVENT_TRACKING_BATCH_ORDER,
  PddCloudSecurityEventTrackingBatchOrderRequestInterface,
  PddCloudSecurityEventTrackingBatchOrderResponseInterface,
} from './fangZhouDuoDuoYun/PddCloudSecurityEventTrackingBatchOrder';
import {
  PDD_CLOUD_SECURITY_EVENT_TRACKING_LOGIN,
  PddCloudSecurityEventTrackingLoginRequestInterface,
  PddCloudSecurityEventTrackingLoginResponseInterface,
} from './fangZhouDuoDuoYun/PddCloudSecurityEventTrackingLogin';
import {
  PDD_DDY_PDP_USER_ADD,
  PDD_DDY_PDP_USER_ADD_RESPONSE_KEY,
  PddDdyPdpUserAddRequestInterface,
  PddDdyPdpUserAddResponseInterface,
  PddDdyPdpUserAddDdyPdpUserAddResponseResponseInterface,
  PDD_DDY_PDP_USER_ADD_LIMITERS,
} from './fangZhouDuoDuoYun/PddDdyPdpUserAdd';
import {
  PDD_DDY_PDP_USER_DELETE,
  PDD_DDY_PDP_USER_DELETE_RESPONSE_KEY,
  PddDdyPdpUserDeleteRequestInterface,
  PddDdyPdpUserDeleteResponseInterface,
  PddDdyPdpUserDeleteDdyPdpUsersDeleteResponseResponseInterface,
} from './fangZhouDuoDuoYun/PddDdyPdpUserDelete';
import {
  PDD_DDY_PDP_USERS_GET,
  PDD_DDY_PDP_USERS_GET_RESPONSE_KEY,
  PddDdyPdpUsersGetRequestInterface,
  PddDdyPdpUsersGetResponseInterface,
  PddDdyPdpUsersGetDdyPdpUsersGetResponseResponseInterface,
  PDD_DDY_PDP_USERS_GET_LIMITERS,
} from './fangZhouDuoDuoYun/PddDdyPdpUsersGet';
import {
  PDD_CLOUD_DTS_ORDER_LIST_INCREMENT_GET,
  PDD_CLOUD_DTS_ORDER_LIST_INCREMENT_GET_RESPONSE_KEY,
  PddCloudDtsOrderListIncrementGetRequestInterface,
  PddCloudDtsOrderListIncrementGetResponseInterface,
  PddCloudDtsOrderListIncrementGetOrderSnIncrementGetResponseResponseInterface,
} from './fangZhouDuoDuoYun/PddCloudDtsOrderListIncrementGet';
import {
  PDD_CLOUD_LOGISTICS_ONLINE_SEND,
  PDD_CLOUD_LOGISTICS_ONLINE_SEND_RESPONSE_KEY,
  PddCloudLogisticsOnlineSendRequestInterface,
  PddCloudLogisticsOnlineSendResponseInterface,
  PddCloudLogisticsOnlineSendLogisticsOnlineSendResponseResponseInterface,
} from './fangZhouDuoDuoYun/PddCloudLogisticsOnlineSend';
import {
  PDD_CLOUD_WAYBILL_GET,
  PDD_CLOUD_WAYBILL_GET_RESPONSE_KEY,
  PddCloudWaybillGetRequestInterface,
  PddCloudWaybillGetResponseInterface,
  PddCloudWaybillGetPddWaybillGetResponseResponseInterface,
} from './fangZhouDuoDuoYun/PddCloudWaybillGet';
import {
  PDD_CLOUD_WAYBILL_UPDATE,
  PDD_CLOUD_WAYBILL_UPDATE_RESPONSE_KEY,
  PddCloudWaybillUpdateRequestInterface,
  PddCloudWaybillUpdateResponseInterface,
  PddCloudWaybillUpdatePddWaybillUpdateResponseResponseInterface,
} from './fangZhouDuoDuoYun/PddCloudWaybillUpdate';
import {
  PDD_CLOUD_WEBSESSION_SEND,
  PDD_CLOUD_WEBSESSION_SEND_RESPONSE_KEY,
  PddCloudWebsessionSendRequestInterface,
  PddCloudWebsessionSendResponseInterface,
  PddCloudWebsessionSendSendResponseResponseInterface,
} from './fangZhouDuoDuoYun/PddCloudWebsessionSend';
import {
  PDD_CLOUD_WMS_ORDER_SEND,
  PDD_CLOUD_WMS_ORDER_SEND_RESPONSE_KEY,
  PddCloudWmsOrderSendRequestInterface,
  PddCloudWmsOrderSendResponseInterface,
  PddCloudWmsOrderSendSendResponseResponseInterface,
} from './fangZhouDuoDuoYun/PddCloudWmsOrderSend';
const PddResponseTypeAndRequestTypeMapping = {
  [PDD_LOGISTICS_ADDRESS_GET]: PDD_LOGISTICS_ADDRESS_GET_RESPONSE_KEY,
  [PDD_LOGISTICS_COMPANIES_GET]: PDD_LOGISTICS_COMPANIES_GET_RESPONSE_KEY,
  [PDD_LOGISTICS_ONLINE_SEND]: PDD_LOGISTICS_ONLINE_SEND_RESPONSE_KEY,
  [PDD_ORDER_BASIC_LIST_GET]: PDD_ORDER_BASIC_LIST_GET_RESPONSE_KEY,
  [PDD_ORDER_INFORMATION_GET]: PDD_ORDER_INFORMATION_GET_RESPONSE_KEY,
  [PDD_ORDER_LIST_GET]: PDD_ORDER_LIST_GET_RESPONSE_KEY,
  [PDD_ORDER_NUMBER_LIST_INCREMENT_GET]: PDD_ORDER_NUMBER_LIST_INCREMENT_GET_RESPONSE_KEY,
  [PDD_ORDER_PROMISE_INFO_GET]: PDD_ORDER_PROMISE_INFO_GET_RESPONSE_KEY,
  [PDD_ORDER_STATUS_GET]: PDD_ORDER_STATUS_GET_RESPONSE_KEY,
  [PDD_ORDER_UPLOAD_EXTRA_LOGISTICS]: PDD_ORDER_UPLOAD_EXTRA_LOGISTICS_RESPONSE_KEY,
  [PDD_ORDER_UPLOAD_RELATION_LOGISTICS]: PDD_ORDER_UPLOAD_RELATION_LOGISTICS_RESPONSE_KEY,
  [PDD_ORDER_VIRTUAL_INFORMATION_GET]: PDD_ORDER_VIRTUAL_INFORMATION_GET_RESPONSE_KEY,
  [PDD_RDC_PDDGENIUS_SENDGOODS_CANCEL]: PDD_RDC_PDDGENIUS_SENDGOODS_CANCEL_RESPONSE_KEY,
  [PDD_REFUND_ADDRESS_LIST_GET]: PDD_REFUND_ADDRESS_LIST_GET_RESPONSE_KEY,
  [PDD_REFUND_LIST_INCREMENT_GET]: PDD_REFUND_LIST_INCREMENT_GET_RESPONSE_KEY,
  [PDD_REFUND_STATUS_CHECK]: PDD_REFUND_STATUS_CHECK_RESPONSE_KEY,
  [PDD_VIRTUAL_GAME_SERVER_QUERY]: PDD_VIRTUAL_GAME_SERVER_QUERY_RESPONSE_KEY,
  [PDD_VIRTUAL_MOBILE_CHARGE_NOTIFY]: PDD_VIRTUAL_MOBILE_CHARGE_NOTIFY_RESPONSE_KEY,
  [PDD_GOODS_ADD]: PDD_GOODS_ADD_RESPONSE_KEY,
  [PDD_GOODS_ADVICE_PRICE_GET]: PDD_GOODS_ADVICE_PRICE_GET_RESPONSE_KEY,
  [PDD_GOODS_AUTHORIZATION_CATS]: PDD_GOODS_AUTHORIZATION_CATS_RESPONSE_KEY,
  [PDD_GOODS_CAT_RULE_GET]: PDD_GOODS_CAT_RULE_GET_RESPONSE_KEY,
  [PDD_GOODS_CAT_TEMPLATE_GET]: PDD_GOODS_CAT_TEMPLATE_GET_RESPONSE_KEY,
  [PDD_GOODS_CATS_GET]: PDD_GOODS_CATS_GET_RESPONSE_KEY,
  [PDD_GOODS_CHILD_SKU_EDIT]: PDD_GOODS_CHILD_SKU_EDIT_RESPONSE_KEY,
  [PDD_GOODS_COMMIT_DETAIL_GET]: PDD_GOODS_COMMIT_DETAIL_GET_RESPONSE_KEY,
  [PDD_GOODS_COMMIT_LIST_GET]: PDD_GOODS_COMMIT_LIST_GET_RESPONSE_KEY,
  [PDD_GOODS_COMMIT_STATUS_GET]: PDD_GOODS_COMMIT_STATUS_GET_RESPONSE_KEY,
  [PDD_GOODS_COUNTRY_GET]: PDD_GOODS_COUNTRY_GET_RESPONSE_KEY,
  [PDD_GOODS_CPS_MALL_UNIT_CHANGE]: PDD_GOODS_CPS_MALL_UNIT_CHANGE_RESPONSE_KEY,
  [PDD_GOODS_CPS_MALL_UNIT_PAUSE]: PDD_GOODS_CPS_MALL_UNIT_PAUSE_RESPONSE_KEY,
  [PDD_GOODS_CPS_MALL_UNIT_QUERY]: PDD_GOODS_CPS_MALL_UNIT_QUERY_RESPONSE_KEY,
  [PDD_GOODS_CPS_MALL_UNIT_RESUME]: PDD_GOODS_CPS_MALL_UNIT_RESUME_RESPONSE_KEY,
  [PDD_GOODS_CPS_UNIT_DELETE]: PDD_GOODS_CPS_UNIT_DELETE_RESPONSE_KEY,
  [PDD_GOODS_DETAIL_GET]: PDD_GOODS_DETAIL_GET_RESPONSE_KEY,
  [PDD_GOODS_EDIT_GOODS_COMMIT]: PDD_GOODS_EDIT_GOODS_COMMIT_RESPONSE_KEY,
  [PDD_GOODS_FILE_INFO_GET]: PDD_GOODS_FILE_INFO_GET_RESPONSE_KEY,
  [PDD_GOODS_FILESPACE_IMAGE_UPLOAD]: PDD_GOODS_FILESPACE_IMAGE_UPLOAD_RESPONSE_KEY,
  [PDD_GOODS_IMAGE_UPLOAD]: PDD_GOODS_IMAGE_UPLOAD_RESPONSE_KEY,
  [PDD_GOODS_IMG_UPLOAD]: PDD_GOODS_IMG_UPLOAD_RESPONSE_KEY,
  [PDD_GOODS_INFORMATION_GET]: PDD_GOODS_INFORMATION_GET_RESPONSE_KEY,
  [PDD_GOODS_INFORMATION_UPDATE]: PDD_GOODS_INFORMATION_UPDATE_RESPONSE_KEY,
  [PDD_GOODS_LATEST_COMMIT_STATUS_GET]: PDD_GOODS_LATEST_COMMIT_STATUS_GET_RESPONSE_KEY,
  [PDD_GOODS_LIST_GET]: PDD_GOODS_LIST_GET_RESPONSE_KEY,
  [PDD_GOODS_LOGISTICS_SER_TEMPLATE_CREATE]: PDD_GOODS_LOGISTICS_SER_TEMPLATE_CREATE_RESPONSE_KEY,
  [PDD_GOODS_LOGISTICS_SER_TEMPLATE_DELETE]: PDD_GOODS_LOGISTICS_SER_TEMPLATE_DELETE_RESPONSE_KEY,
  [PDD_GOODS_LOGISTICS_SER_TEMPLATE_DETAIL]: PDD_GOODS_LOGISTICS_SER_TEMPLATE_DETAIL_RESPONSE_KEY,
  [PDD_GOODS_LOGISTICS_SER_TEMPLATE_LIST]: PDD_GOODS_LOGISTICS_SER_TEMPLATE_LIST_RESPONSE_KEY,
  [PDD_GOODS_LOGISTICS_SER_TEMPLATE_UPDATE]: PDD_GOODS_LOGISTICS_SER_TEMPLATE_UPDATE_RESPONSE_KEY,
  [PDD_GOODS_LOGISTICS_TEMPLATE_CREATE]: PDD_GOODS_LOGISTICS_TEMPLATE_CREATE_RESPONSE_KEY,
  [PDD_GOODS_LOGISTICS_TEMPLATE_GET]: PDD_GOODS_LOGISTICS_TEMPLATE_GET_RESPONSE_KEY,
  [PDD_GOODS_OPT_GET]: PDD_GOODS_OPT_GET_RESPONSE_KEY,
  [PDD_GOODS_OUT_PROPERTY_MAPPING_GET]: PDD_GOODS_OUT_PROPERTY_MAPPING_GET_RESPONSE_KEY,
  [PDD_GOODS_OUTER_CAT_MAPPING_GET]: PDD_GOODS_OUTER_CAT_MAPPING_GET_RESPONSE_KEY,
  [PDD_GOODS_PRICE_CHECK]: PDD_GOODS_PRICE_CHECK_RESPONSE_KEY,
  [PDD_GOODS_QUANTITY_UPDATE]: PDD_GOODS_QUANTITY_UPDATE_RESPONSE_KEY,
  [PDD_GOODS_SALE_STATUS_SET]: PDD_GOODS_SALE_STATUS_SET_RESPONSE_KEY,
  [PDD_GOODS_SKU_PRICE_UPDATE]: PDD_GOODS_SKU_PRICE_UPDATE_RESPONSE_KEY,
  [PDD_GOODS_SKUS_GET]: PDD_GOODS_SKUS_GET_RESPONSE_KEY,
  [PDD_GOODS_SPEC_GET]: PDD_GOODS_SPEC_GET_RESPONSE_KEY,
  [PDD_GOODS_SPEC_ID_GET]: PDD_GOODS_SPEC_ID_GET_RESPONSE_KEY,
  [PDD_GOODS_SPU_GET]: PDD_GOODS_SPU_GET_RESPONSE_KEY,
  [PDD_GOODS_SPU_SEARCH]: PDD_GOODS_SPU_SEARCH_RESPONSE_KEY,
  [PDD_GOODS_SUBMIT_GOODS_COMMIT]: PDD_GOODS_SUBMIT_GOODS_COMMIT_RESPONSE_KEY,
  [PDD_GOODS_TEMPLATE_PROPERTY_VALUE_SEARCH]: PDD_GOODS_TEMPLATE_PROPERTY_VALUE_SEARCH_RESPONSE_KEY,
  [PDD_GOOODS_SKU_MEASUREMENT_LIST]: PDD_GOOODS_SKU_MEASUREMENT_LIST_RESPONSE_KEY,
  [PDD_ONE_EXPRESS_COST_TEMPLATE]: PDD_ONE_EXPRESS_COST_TEMPLATE_RESPONSE_KEY,
  [PDD_DDK_GOODS_PID_GENERATE]: PDD_DDK_GOODS_PID_GENERATE_RESPONSE_KEY,
  [PDD_DDK_CASHGIFT_STATUS_UPDATE]: PDD_DDK_CASHGIFT_STATUS_UPDATE_RESPONSE_KEY,
  [PDD_DDK_GOODS_PID_QUERY]: PDD_DDK_GOODS_PID_QUERY_RESPONSE_KEY,
  [PDD_DDK_PID_MEDIAID_BIND]: PDD_DDK_PID_MEDIAID_BIND_RESPONSE_KEY,
  [PDD_DDK_GOODS_ZS_UNIT_URL_GEN]: PDD_DDK_GOODS_ZS_UNIT_URL_GEN_RESPONSE_KEY,
  [PDD_DDK_MEMBER_AUTHORITY_QUERY]: PDD_DDK_MEMBER_AUTHORITY_QUERY_RESPONSE_KEY,
  [PDD_DDK_CASHGIFT_DATA_QUERY]: PDD_DDK_CASHGIFT_DATA_QUERY_RESPONSE_KEY,
  [PDD_DDK_STATISTICS_DATA_QUERY]: PDD_DDK_STATISTICS_DATA_QUERY_RESPONSE_KEY,
  [PDD_DDK_CMS_PROM_URL_GENERATE]: PDD_DDK_CMS_PROM_URL_GENERATE_RESPONSE_KEY,
  [PDD_DDK_GOODS_PROMOTION_URL_GENERATE]: PDD_DDK_GOODS_PROMOTION_URL_GENERATE_RESPONSE_KEY,
  [PDD_DDK_ORDER_LIST_RANGE_GET]: PDD_DDK_ORDER_LIST_RANGE_GET_RESPONSE_KEY,
  [PDD_DDK_GOODS_SEARCH]: PDD_DDK_GOODS_SEARCH_RESPONSE_KEY,
  [PDD_DDK_GOODS_DETAIL]: PDD_DDK_GOODS_DETAIL_RESPONSE_KEY,
  [PDD_DDK_RESOURCE_URL_GEN]: PDD_DDK_RESOURCE_URL_GEN_RESPONSE_KEY,
  [PDD_DDK_CASHGIFT_CREATE]: PDD_DDK_CASHGIFT_CREATE_RESPONSE_KEY,
  [PDD_DDK_ORDER_DETAIL_GET]: PDD_DDK_ORDER_DETAIL_GET_RESPONSE_KEY,
  [PDD_DDK_ORDER_LIST_INCREMENT_GET]: PDD_DDK_ORDER_LIST_INCREMENT_GET_RESPONSE_KEY,
  [PDD_DDK_GOODS_RECOMMEND_GET]: PDD_DDK_GOODS_RECOMMEND_GET_RESPONSE_KEY,
  [PDD_DDK_RP_PROM_URL_GENERATE]: PDD_DDK_RP_PROM_URL_GENERATE_RESPONSE_KEY,
  [PDD_DDK_ALL_ORDER_LIST_INCREMENT_GET]: PDD_DDK_ALL_ORDER_LIST_INCREMENT_GET_RESPONSE_KEY,
  [PDD_DDK_OAUTH_CASHGIFT_CREATE]: PDD_DDK_OAUTH_CASHGIFT_CREATE_RESPONSE_KEY,
  [PDD_DDK_OAUTH_CASHGIFT_STATUS_UPDATE]: PDD_DDK_OAUTH_CASHGIFT_STATUS_UPDATE_RESPONSE_KEY,
  [PDD_DDK_OAUTH_CMS_PROM_URL_GENERATE]: PDD_DDK_OAUTH_CMS_PROM_URL_GENERATE_RESPONSE_KEY,
  [PDD_DDK_OAUTH_GOODS_DETAIL]: PDD_DDK_OAUTH_GOODS_DETAIL_RESPONSE_KEY,
  [PDD_DDK_OAUTH_GOODS_PID_GENERATE]: PDD_DDK_OAUTH_GOODS_PID_GENERATE_RESPONSE_KEY,
  [PDD_DDK_OAUTH_GOODS_PID_QUERY]: PDD_DDK_OAUTH_GOODS_PID_QUERY_RESPONSE_KEY,
  [PDD_DDK_OAUTH_GOODS_PROM_URL_GENERATE]: PDD_DDK_OAUTH_GOODS_PROM_URL_GENERATE_RESPONSE_KEY,
  [PDD_DDK_OAUTH_GOODS_RECOMMEND_GET]: PDD_DDK_OAUTH_GOODS_RECOMMEND_GET_RESPONSE_KEY,
  [PDD_DDK_OAUTH_GOODS_SEARCH]: PDD_DDK_OAUTH_GOODS_SEARCH_RESPONSE_KEY,
  [PDD_DDK_OAUTH_GOODS_ZS_UNIT_URL_GEN]: PDD_DDK_OAUTH_GOODS_ZS_UNIT_URL_GEN_RESPONSE_KEY,
  [PDD_DDK_OAUTH_MEMBER_AUTHORITY_QUERY]: PDD_DDK_OAUTH_MEMBER_AUTHORITY_QUERY_RESPONSE_KEY,
  [PDD_DDK_OAUTH_ORDER_DETAIL_GET]: PDD_DDK_OAUTH_ORDER_DETAIL_GET_RESPONSE_KEY,
  [PDD_DDK_OAUTH_PID_MEDIAID_BIND]: PDD_DDK_OAUTH_PID_MEDIAID_BIND_RESPONSE_KEY,
  [PDD_DDK_OAUTH_RESOURCE_URL_GEN]: PDD_DDK_OAUTH_RESOURCE_URL_GEN_RESPONSE_KEY,
  [PDD_DDK_OAUTH_RP_PROM_URL_GENERATE]: PDD_DDK_OAUTH_RP_PROM_URL_GENERATE_RESPONSE_KEY,
  [PDD_DDK_OAUTH_WEAPP_QRCODE_URL_GEN]: PDD_DDK_OAUTH_WEAPP_QRCODE_URL_GEN_RESPONSE_KEY,
  [PDD_LOGISTICS_CS_HISTORY_MESSAGE_GET]: PDD_LOGISTICS_CS_HISTORY_MESSAGE_GET_RESPONSE_KEY,
  [PDD_LOGISTICS_CS_MESSAGE_SEND]: PDD_LOGISTICS_CS_MESSAGE_SEND_RESPONSE_KEY,
  [PDD_LOGISTICS_CS_SESSION_CLOSE]: PDD_LOGISTICS_CS_SESSION_CLOSE_RESPONSE_KEY,
  [PDD_LOGISTICS_CS_SESSION_START]: PDD_LOGISTICS_CS_SESSION_START_RESPONSE_KEY,
  [PDD_LOGISTICS_TICKET_GET]: PDD_LOGISTICS_TICKET_GET_RESPONSE_KEY,
  [PDD_LOGISTICS_TICKET_IMAGE_UPLOAD]: PDD_LOGISTICS_TICKET_IMAGE_UPLOAD_RESPONSE_KEY,
  [PDD_LOGISTICS_TICKET_NOTIFY]: PDD_LOGISTICS_TICKET_NOTIFY_RESPONSE_KEY,
  [PDD_LOGISTICS_TICKET_PROBLEM_TYPE_GET]: PDD_LOGISTICS_TICKET_PROBLEM_TYPE_GET_RESPONSE_KEY,
  [PDD_PROMOTION_COUPON_CLOSE]: PDD_PROMOTION_COUPON_CLOSE_RESPONSE_KEY,
  [PDD_PROMOTION_COUPON_QUANTITY_ADD]: PDD_PROMOTION_COUPON_QUANTITY_ADD_RESPONSE_KEY,
  [PDD_PROMOTION_GOODS_COUPON_CREATE]: PDD_PROMOTION_GOODS_COUPON_CREATE_RESPONSE_KEY,
  [PDD_PROMOTION_GOODS_COUPON_LIST_GET]: PDD_PROMOTION_GOODS_COUPON_LIST_GET_RESPONSE_KEY,
  [PDD_PROMOTION_HOME_COUPON_CREATE]: PDD_PROMOTION_HOME_COUPON_CREATE_RESPONSE_KEY,
  [PDD_PROMOTION_MERCHANT_COUPON_LIST_GET]: PDD_PROMOTION_MERCHANT_COUPON_LIST_GET_RESPONSE_KEY,
  [PDD_VOUCHER_APPOINTMENT_INFO_SEND]: PDD_VOUCHER_APPOINTMENT_INFO_SEND_RESPONSE_KEY,
  [PDD_VOUCHER_OTA_CARD_VERIFICATION]: PDD_VOUCHER_OTA_CARD_VERIFICATION_RESPONSE_KEY,
  [PDD_VOUCHER_PHYSICAL_GOODS_SEND]: PDD_VOUCHER_PHYSICAL_GOODS_SEND_RESPONSE_KEY,
  [PDD_VOUCHER_VIRTUAL_CARD_VERIFICATION]: PDD_VOUCHER_VIRTUAL_CARD_VERIFICATION_RESPONSE_KEY,
  [PDD_VOUCHER_VOUCHER_COMPLAIN]: PDD_VOUCHER_VOUCHER_COMPLAIN_RESPONSE_KEY,
  [PDD_VOUCHER_VOUCHER_INFO_SEND]: PDD_VOUCHER_VOUCHER_INFO_SEND_RESPONSE_KEY,
  [PDD_EINVOICE_INFO_QUERY]: PDD_EINVOICE_INFO_QUERY_RESPONSE_KEY,
  [PDD_INVOICE_APPLICATION_QUERY]: PDD_INVOICE_APPLICATION_QUERY_RESPONSE_KEY,
  [PDD_INVOICE_DETAIL_INVALID]: PDD_INVOICE_DETAIL_INVALID_RESPONSE_KEY,
  [PDD_INVOICE_DETAIL_UPLOAD]: PDD_INVOICE_DETAIL_UPLOAD_RESPONSE_KEY,
  [PDD_MALL_CPS_PROTOCOL_STATUS_QUERY]: PDD_MALL_CPS_PROTOCOL_STATUS_QUERY_RESPONSE_KEY,
  [PDD_MALL_INFO_GET]: PDD_MALL_INFO_GET_RESPONSE_KEY,
  [PDD_OPEN_DECRYPT_BATCH]: PDD_OPEN_DECRYPT_BATCH_RESPONSE_KEY,
  [PDD_OPEN_DECRYPT_MASK_BATCH]: PDD_OPEN_DECRYPT_MASK_BATCH_RESPONSE_KEY,
  [PDD_OPEN_KMS_ENCRYPT_BATCH]: PDD_OPEN_KMS_ENCRYPT_BATCH_RESPONSE_KEY,
  [PDD_OPEN_KMS_SEARCH_BATCH]: PDD_OPEN_KMS_SEARCH_BATCH_RESPONSE_KEY,
  [PDD_OPEN_VIRTUAL_NUMBER_CHECK]: PDD_OPEN_VIRTUAL_NUMBER_CHECK_RESPONSE_KEY,
  [PDD_POP_AUTH_TOKEN_CREATE]: PDD_POP_AUTH_TOKEN_CREATE_RESPONSE_KEY,
  [PDD_POP_AUTH_TOKEN_REFRESH]: PDD_POP_AUTH_TOKEN_REFRESH_RESPONSE_KEY,
  [PDD_TIME_GET]: PDD_TIME_GET_RESPONSE_KEY,
  [PDD_EXPRESS_DEPOT_INFO_GET]: PDD_EXPRESS_DEPOT_INFO_GET_RESPONSE_KEY,
  [PDD_EXPRESS_DEPOT_LIST_GET]: PDD_EXPRESS_DEPOT_LIST_GET_RESPONSE_KEY,
  [PDD_EXPRESS_MALL_DEPOT_SIMPLE_GET]: PDD_EXPRESS_MALL_DEPOT_SIMPLE_GET_RESPONSE_KEY,
  [PDD_EXPRESS_SEARCH_DEPOT]: PDD_EXPRESS_SEARCH_DEPOT_RESPONSE_KEY,
  [PDD_STOCK_DEPOT_PRIORITY_LIST]: PDD_STOCK_DEPOT_PRIORITY_LIST_RESPONSE_KEY,
  [PDD_STOCK_GOODS_ID_TO_SKU_QUERY]: PDD_STOCK_GOODS_ID_TO_SKU_QUERY_RESPONSE_KEY,
  [PDD_STOCK_WARE_DETAIL_QUERY]: PDD_STOCK_WARE_DETAIL_QUERY_RESPONSE_KEY,
  [PDD_STOCK_WARE_INFO_LIST]: PDD_STOCK_WARE_INFO_LIST_RESPONSE_KEY,
  [PDD_STOCK_WARE_LIST]: PDD_STOCK_WARE_LIST_RESPONSE_KEY,
  [PDD_PMC_ACCRUE_QUERY]: PDD_PMC_ACCRUE_QUERY_RESPONSE_KEY,
  [PDD_PMC_USER_CANCEL]: PDD_PMC_USER_CANCEL_RESPONSE_KEY,
  [PDD_PMC_USER_GET]: PDD_PMC_USER_GET_RESPONSE_KEY,
  [PDD_PMC_USER_PERMIT]: PDD_PMC_USER_PERMIT_RESPONSE_KEY,
  [PDD_CLOUDPRINT_CMDPRINT_RENDER]: PDD_CLOUDPRINT_CMDPRINT_RENDER_RESPONSE_KEY,
  [PDD_CLOUDPRINT_CUSTOMARES_GET]: PDD_CLOUDPRINT_CUSTOMARES_GET_RESPONSE_KEY,
  [PDD_CLOUDPRINT_PORTABLEPRINTER_GET]: PDD_CLOUDPRINT_PORTABLEPRINTER_GET_RESPONSE_KEY,
  [PDD_CLOUDPRINT_STDTEMPLATES_GET]: PDD_CLOUDPRINT_STDTEMPLATES_GET_RESPONSE_KEY,
  [PDD_WAYBILL_CANCEL]: PDD_WAYBILL_CANCEL_RESPONSE_KEY,
  [PDD_WAYBILL_GET]: PDD_WAYBILL_GET_RESPONSE_KEY,
  [PDD_WAYBILL_QUERY_BY_WAYBILLCODE]: PDD_WAYBILL_QUERY_BY_WAYBILLCODE_RESPONSE_KEY,
  [PDD_WAYBILL_SEARCH]: PDD_WAYBILL_SEARCH_RESPONSE_KEY,
  [PDD_WAYBILL_UPDATE]: PDD_WAYBILL_UPDATE_RESPONSE_KEY,
  [PDD_FINANCE_BALANCE_DAILY_BILL_URL_GET]: PDD_FINANCE_BALANCE_DAILY_BILL_URL_GET_RESPONSE_KEY,
  [PDD_SERVICEMARKET_CONTRACT_SEARCH]: PDD_SERVICEMARKET_CONTRACT_SEARCH_RESPONSE_KEY,
  [PDD_SERVICEMARKET_SETTLEMENTBILL_GET]: PDD_SERVICEMARKET_SETTLEMENTBILL_GET_RESPONSE_KEY,
  [PDD_SERVICEMARKET_TRADELIST_GET]: PDD_SERVICEMARKET_TRADELIST_GET_RESPONSE_KEY,
  [PDD_VAS_ORDER_SEARCH]: PDD_VAS_ORDER_SEARCH_RESPONSE_KEY,
  [PDD_FDS_ORDER_GET]: PDD_FDS_ORDER_GET_RESPONSE_KEY,
  [PDD_FDS_ORDER_LIST_GET]: PDD_FDS_ORDER_LIST_GET_RESPONSE_KEY,
  [PDD_FDS_ROLE_GET]: PDD_FDS_ROLE_GET_RESPONSE_KEY,
  [PDD_FDS_WAYBILL_CANCEL]: PDD_FDS_WAYBILL_CANCEL_RESPONSE_KEY,
  [PDD_FDS_WAYBILL_GET]: PDD_FDS_WAYBILL_GET_RESPONSE_KEY,
  [PDD_FDS_WAYBILL_RETURN]: PDD_FDS_WAYBILL_RETURN_RESPONSE_KEY,
  [PDD_FDS_WAYBILL_RETURN_SLAVE]: PDD_FDS_WAYBILL_RETURN_SLAVE_RESPONSE_KEY,
  [PDD_MALL_INFO_GROUP_ADD_STORE_POST]: PDD_MALL_INFO_GROUP_ADD_STORE_POST_RESPONSE_KEY,
  [PDD_MALL_INFO_GROUP_LIST_STORE_GET]: PDD_MALL_INFO_GROUP_LIST_STORE_GET_RESPONSE_KEY,
  [PDD_MALL_INFO_GROUP_REMOVE_STORE_GET]: PDD_MALL_INFO_GROUP_REMOVE_STORE_GET_RESPONSE_KEY,
  [PDD_MALL_INFO_STORE_CREATE_POST]: PDD_MALL_INFO_STORE_CREATE_POST_RESPONSE_KEY,
  [PDD_MALL_INFO_STORE_DELETE_POST]: PDD_MALL_INFO_STORE_DELETE_POST_RESPONSE_KEY,
  [PDD_MALL_INFO_STORE_UPDATE_POST]: PDD_MALL_INFO_STORE_UPDATE_POST_RESPONSE_KEY,
  [PDD_QRPAY_PAYEE_REGISTER]: PDD_QRPAY_PAYEE_REGISTER_RESPONSE_KEY,
  [PDD_MALL_INFO_BONDED_WAREHOUSE_GET]: PDD_MALL_INFO_BONDED_WAREHOUSE_GET_RESPONSE_KEY,
  [PDD_OVERSEA_CLEARANCE_GET]: PDD_OVERSEA_CLEARANCE_GET_RESPONSE_KEY,
  [PDD_OVERSEA_DECLARATION_FAIL_NOTIFY]: PDD_OVERSEA_DECLARATION_FAIL_NOTIFY_RESPONSE_KEY,
  [PDD_TICKET_GOODS_QUERY]: PDD_TICKET_GOODS_QUERY_RESPONSE_KEY,
  [PDD_TICKET_GOODS_UPLOAD]: PDD_TICKET_GOODS_UPLOAD_RESPONSE_KEY,
  [PDD_DDY_PDP_USER_ADD]: PDD_DDY_PDP_USER_ADD_RESPONSE_KEY,
  [PDD_DDY_PDP_USER_DELETE]: PDD_DDY_PDP_USER_DELETE_RESPONSE_KEY,
  [PDD_DDY_PDP_USERS_GET]: PDD_DDY_PDP_USERS_GET_RESPONSE_KEY,
  [PDD_CLOUD_DTS_ORDER_LIST_INCREMENT_GET]: PDD_CLOUD_DTS_ORDER_LIST_INCREMENT_GET_RESPONSE_KEY,
  [PDD_CLOUD_LOGISTICS_ONLINE_SEND]: PDD_CLOUD_LOGISTICS_ONLINE_SEND_RESPONSE_KEY,
  [PDD_CLOUD_WAYBILL_GET]: PDD_CLOUD_WAYBILL_GET_RESPONSE_KEY,
  [PDD_CLOUD_WAYBILL_UPDATE]: PDD_CLOUD_WAYBILL_UPDATE_RESPONSE_KEY,
  [PDD_CLOUD_WEBSESSION_SEND]: PDD_CLOUD_WEBSESSION_SEND_RESPONSE_KEY,
  [PDD_CLOUD_WMS_ORDER_SEND]: PDD_CLOUD_WMS_ORDER_SEND_RESPONSE_KEY,
};
const PddNeedAccessTokenTypeCollections = [
  PDD_LOGISTICS_AVAILABLE_COMPANY_RECOMMEND,
  PDD_LOGISTICS_ONLINE_SEND,
  PDD_ERP_ORDER_SYNC,
  PDD_ORDER_BASIC_LIST_GET,
  PDD_ORDER_INFORMATION_GET,
  PDD_ORDER_LIST_GET,
  PDD_ORDER_NOTE_UPDATE,
  PDD_ORDER_NUMBER_LIST_INCREMENT_GET,
  PDD_ORDER_PROMISE_INFO_GET,
  PDD_ORDER_STATUS_GET,
  PDD_ORDER_UPDATE_ADDRESS,
  PDD_ORDER_UPLOAD_EXTRA_LOGISTICS,
  PDD_ORDER_UPLOAD_RELATION_LOGISTICS,
  PDD_ORDER_VIRTUAL_INFORMATION_GET,
  PDD_NEXTONE_LOGISTICS_WAREHOUSE_UPDATE,
  PDD_RDC_PDDGENIUS_SENDGOODS_CANCEL,
  PDD_REFUND_ADDRESS_LIST_GET,
  PDD_REFUND_AGREE,
  PDD_REFUND_EXCHANGE_SHIPPING,
  PDD_REFUND_INFORMATION_GET,
  PDD_REFUND_LIST_INCREMENT_GET,
  PDD_REFUND_RETURNGOODS_AGREE,
  PDD_REFUND_STATUS_CHECK,
  PDD_VIRTUAL_MOBILE_CHARGE_NOTIFY,
  PDD_DELETE_DRAFT_COMMIT,
  PDD_DELETE_GOODS_COMMIT,
  PDD_GOODS_ADD,
  PDD_GOODS_ADVICE_PRICE_GET,
  PDD_GOODS_AUTHORIZATION_CATS,
  PDD_GOODS_CAT_RULE_GET,
  PDD_GOODS_CAT_TEMPLATE_GET,
  PDD_GOODS_CHILD_SKU_EDIT,
  PDD_GOODS_COMMIT_DETAIL_GET,
  PDD_GOODS_COMMIT_LIST_GET,
  PDD_GOODS_COMMIT_STATUS_GET,
  PDD_GOODS_COUNTRY_GET,
  PDD_GOODS_CPS_MALL_UNIT_CHANGE,
  PDD_GOODS_CPS_MALL_UNIT_CREATE,
  PDD_GOODS_CPS_MALL_UNIT_PAUSE,
  PDD_GOODS_CPS_MALL_UNIT_QUERY,
  PDD_GOODS_CPS_MALL_UNIT_RESUME,
  PDD_GOODS_CPS_UNIT_CHANGE,
  PDD_GOODS_CPS_UNIT_CREATE,
  PDD_GOODS_CPS_UNIT_DELETE,
  PDD_GOODS_CPS_UNIT_QUERY,
  PDD_GOODS_DETAIL_GET,
  PDD_GOODS_EDIT_GOODS_COMMIT,
  PDD_GOODS_FILE_INFO_GET,
  PDD_GOODS_FILESPACE_IMAGE_UPLOAD,
  PDD_GOODS_IMAGE_UPLOAD,
  PDD_GOODS_IMG_UPLOAD,
  PDD_GOODS_INFORMATION_GET,
  PDD_GOODS_INFORMATION_UPDATE,
  PDD_GOODS_LATEST_COMMIT_STATUS_GET,
  PDD_GOODS_LIST_GET,
  PDD_GOODS_LOGISTICS_SER_TEMPLATE_CREATE,
  PDD_GOODS_LOGISTICS_SER_TEMPLATE_DELETE,
  PDD_GOODS_LOGISTICS_SER_TEMPLATE_DETAIL,
  PDD_GOODS_LOGISTICS_SER_TEMPLATE_LIST,
  PDD_GOODS_LOGISTICS_SER_TEMPLATE_UPDATE,
  PDD_GOODS_LOGISTICS_TEMPLATE_CREATE,
  PDD_GOODS_LOGISTICS_TEMPLATE_GET,
  PDD_GOODS_MATERIAL_CREATE,
  PDD_GOODS_MATERIAL_DELETE,
  PDD_GOODS_MATERIAL_QUERY,
  PDD_GOODS_OUT_PROPERTY_MAPPING_GET,
  PDD_GOODS_OUTER_CAT_MAPPING_GET,
  PDD_GOODS_PRICE_CHECK,
  PDD_GOODS_QUANTITY_UPDATE,
  PDD_GOODS_SALE_STATUS_SET,
  PDD_GOODS_SIZESPEC_CLASS_GET,
  PDD_GOODS_SIZESPEC_META_GET,
  PDD_GOODS_SIZESPEC_TEMPLATE_ADD,
  PDD_GOODS_SIZESPEC_TEMPLATE_DELETE,
  PDD_GOODS_SIZESPEC_TEMPLATE_GET,
  PDD_GOODS_SIZESPEC_TEMPLATE_UPDATE,
  PDD_GOODS_SIZESPEC_TEMPLATES_GET,
  PDD_GOODS_SKU_PRICE_UPDATE,
  PDD_GOODS_SKUS_GET,
  PDD_GOODS_SPEC_GET,
  PDD_GOODS_SPEC_ID_GET,
  PDD_GOODS_SPU_GET,
  PDD_GOODS_SPU_SEARCH,
  PDD_GOODS_SUBMIT_GOODS_COMMIT,
  PDD_GOODS_TEMPLATE_PROPERTY_VALUE_SEARCH,
  PDD_ONE_EXPRESS_COST_TEMPLATE,
  PDD_DDK_OAUTH_CASHGIFT_CREATE,
  PDD_DDK_OAUTH_CASHGIFT_STATUS_UPDATE,
  PDD_DDK_OAUTH_CMS_PROM_URL_GENERATE,
  PDD_DDK_OAUTH_GOODS_DETAIL,
  PDD_DDK_OAUTH_GOODS_PID_GENERATE,
  PDD_DDK_OAUTH_GOODS_PID_QUERY,
  PDD_DDK_OAUTH_GOODS_PROM_URL_GENERATE,
  PDD_DDK_OAUTH_GOODS_RECOMMEND_GET,
  PDD_DDK_OAUTH_GOODS_SEARCH,
  PDD_DDK_OAUTH_GOODS_ZS_UNIT_URL_GEN,
  PDD_DDK_OAUTH_MEMBER_AUTHORITY_QUERY,
  PDD_DDK_OAUTH_ORDER_DETAIL_GET,
  PDD_DDK_OAUTH_PID_MEDIAID_BIND,
  PDD_DDK_OAUTH_RESOURCE_URL_GEN,
  PDD_DDK_OAUTH_RP_PROM_URL_GENERATE,
  PDD_DDK_OAUTH_WEAPP_QRCODE_URL_GEN,
  PDD_PROMOTION_COUPON_CLOSE,
  PDD_PROMOTION_COUPON_QUANTITY_ADD,
  PDD_PROMOTION_GOODS_COUPON_CREATE,
  PDD_PROMOTION_GOODS_COUPON_LIST_GET,
  PDD_PROMOTION_HOME_COUPON_CREATE,
  PDD_PROMOTION_LIMITED_ACTIVITY_CANCEL,
  PDD_PROMOTION_LIMITED_ACTIVITY_CREATE,
  PDD_PROMOTION_LIMITED_DISCOUNT_LIST_GET,
  PDD_PROMOTION_LIMITED_QUALIFIED_GOODS_GET,
  PDD_PROMOTION_LIMITED_QUALIFIED_SKU_GET,
  PDD_PROMOTION_MERCHANT_COUPON_LIST_GET,
  PDD_VOUCHER_APPOINTMENT_INFO_SEND,
  PDD_VOUCHER_OTA_CARD_PREPARE_VERIFICATION,
  PDD_VOUCHER_OTA_CARD_VERIFICATION,
  PDD_VOUCHER_PHYSICAL_GOODS_SEND,
  PDD_VOUCHER_REALTIME_ORDERNO_GET,
  PDD_VOUCHER_REALTIME_VERIFY_SYNC,
  PDD_VOUCHER_VIRTUAL_CARD_BATCH_ADD,
  PDD_VOUCHER_VIRTUAL_CARD_VERIFICATION,
  PDD_VOUCHER_VOUCHER_COMPLAIN,
  PDD_VOUCHER_VOUCHER_INFO_SEND,
  PDD_EINVOICE_INFO_QUERY,
  PDD_INVOICE_APPLICATION_QUERY,
  PDD_INVOICE_DETAIL_INVALID,
  PDD_INVOICE_DETAIL_UPLOAD,
  PDD_MALL_CPS_PROTOCOL_STATUS_QUERY,
  PDD_MALL_INFO_GET,
  PDD_TRACE_SOURCE_UPLOAD_PLAN_INFO,
  PDD_OPEN_DECRYPT_BATCH,
  PDD_OPEN_DECRYPT_MASK_BATCH,
  PDD_OPEN_KMS_ENCRYPT_BATCH,
  PDD_OPEN_VIRTUAL_NUMBER_CHECK,
  PDD_EXPRESS_ADD_DEPOT,
  PDD_EXPRESS_CHANGE_DEPOT_INFO,
  PDD_EXPRESS_DEPOT_INFO_GET,
  PDD_EXPRESS_DEPOT_LIST_GET,
  PDD_EXPRESS_MALL_DEPOT_SIMPLE_GET,
  PDD_EXPRESS_SEARCH_DEPOT,
  PDD_STOCK_DEPOT_PRIORITY_LIST,
  PDD_STOCK_DEPOT_PRIORITY_UPDATE,
  PDD_STOCK_GOODS_ID_TO_SKU_QUERY,
  PDD_STOCK_WARE_CREATE,
  PDD_STOCK_WARE_DELETE,
  PDD_STOCK_WARE_DETAIL_QUERY,
  PDD_STOCK_WARE_INFO_LIST,
  PDD_STOCK_WARE_LIST,
  PDD_STOCK_WARE_MOVE,
  PDD_STOCK_WARE_SKU_UPDATE,
  PDD_STOCK_WARE_UPDATE,
  PDD_STOCK_WARE_WAREHOUSE_QUERY,
  PDD_PMC_USER_PERMIT,
  PDD_CLOUDPRINT_CMDPRINT_RENDER,
  PDD_CLOUDPRINT_CUSTOMARES_GET,
  PDD_WAYBILL_CANCEL,
  PDD_WAYBILL_GET,
  PDD_WAYBILL_QUERY_BY_WAYBILLCODE,
  PDD_WAYBILL_SEARCH,
  PDD_WAYBILL_UPDATE,
  PDD_FINANCE_BALANCE_DAILY_BILL_URL_GET,
  PDD_AD_API_ADVERTISER_OPEN_ACCOUNT,
  PDD_AD_API_ADVERTISER_QUERY_ACCOUNT_BALANCE,
  PDD_AD_API_ADVERTISER_QUERY_ACCOUNT_INFO,
  PDD_AD_API_ADVERTISER_QUERY_DETAIL,
  PDD_AD_API_GOODS_QUERY_GALLERY_IMAGES,
  PDD_AD_API_GOODS_QUERY_LONG_IMAGES,
  PDD_AD_API_GOODS_QUERY_PAGE,
  PDD_AD_API_KEYWORD_CREATE,
  PDD_AD_API_KEYWORD_DELETE,
  PDD_AD_API_KEYWORD_QUERY_LIST,
  PDD_AD_API_KEYWORD_RECOMMEND_GET,
  PDD_AD_API_KEYWORD_RELEVANCE_GET,
  PDD_AD_API_KEYWORD_UPDATE,
  PDD_AD_API_PLAN_CREATE,
  PDD_AD_API_PLAN_DELETE,
  PDD_AD_API_PLAN_QUERY_CAN_CREATE_AD_PLAN,
  PDD_AD_API_PLAN_QUERY_CAN_UPDATE_MAX_COST,
  PDD_AD_API_PLAN_QUERY_LIST,
  PDD_AD_API_PLAN_UPDATE_DATA_OPERATE_STATUS,
  PDD_AD_API_PLAN_UPDATE_MAX_COST,
  PDD_AD_API_PLAN_UPDATE_PLAN_DISCOUNT,
  PDD_AD_API_PLAN_UPDATE_PLAN_NAME,
  PDD_AD_API_PLAN_UPDATE_PLAN_TO_OCPC,
  PDD_AD_API_REPORT_DAILY_REPORT_QUERY,
  PDD_AD_API_REPORT_ENTITY_REPORT_QUERY,
  PDD_AD_API_REPORT_HOURLY_REPORT_QUERY,
  PDD_AD_API_UNIT_BID_DELETE,
  PDD_AD_API_UNIT_BID_QUERY_BASE_LOCATION_PROFILE,
  PDD_AD_API_UNIT_BID_QUERY_BASE_TARGET_PROFILE,
  PDD_AD_API_UNIT_BID_QUERY_LIST,
  PDD_AD_API_UNIT_BID_QUERY_TARGETING_TAG_LIST,
  PDD_AD_API_UNIT_BID_SYNC,
  PDD_AD_API_UNIT_BID_UPDATE,
  PDD_AD_API_UNIT_CREATE,
  PDD_AD_API_UNIT_CREATIVE_CHECK_TITLE,
  PDD_AD_API_UNIT_CREATIVE_CREATE,
  PDD_AD_API_UNIT_CREATIVE_DELETE,
  PDD_AD_API_UNIT_CREATIVE_DISTRIBUTE_FLOW_RATE,
  PDD_AD_API_UNIT_CREATIVE_QUERY_FLOW_RATE,
  PDD_AD_API_UNIT_CREATIVE_QUERY_LIST,
  PDD_AD_API_UNIT_CREATIVE_UPDATE_CONTENT,
  PDD_AD_API_UNIT_CREATIVE_UPDATE_DATA_OPERATE_STATUS,
  PDD_AD_API_UNIT_CREATIVE_UPDATE_SMART_CREATIVE,
  PDD_AD_API_UNIT_DELETE,
  PDD_AD_API_UNIT_QUERY_LIST,
  PDD_AD_API_UNIT_UPDATE_DATA_OPERATE_STATUS,
  PDD_AD_API_UNIT_UPDATE_OPTIMIZATION_MESSAGE,
  PDD_AD_API_UNIT_UPDATE_UNIT_BID,
  PDD_AD_API_UNIT_UPDATE_UNIT_NAME,
  PDD_FDS_ORDER_GET,
  PDD_FDS_ORDER_LIST_GET,
  PDD_FDS_ROLE_GET,
  PDD_FDS_WAYBILL_CANCEL,
  PDD_FDS_WAYBILL_GET,
  PDD_FDS_WAYBILL_RETURN,
  PDD_FDS_WAYBILL_RETURN_SLAVE,
  PDD_MALL_INFO_GROUP_ADD_POST,
  PDD_MALL_INFO_GROUP_ADD_STORE_POST,
  PDD_MALL_INFO_GROUP_DELETE_POST,
  PDD_MALL_INFO_GROUP_LIST_STORE_GET,
  PDD_MALL_INFO_GROUP_QUERY_POST,
  PDD_MALL_INFO_GROUP_REMOVE_STORE_GET,
  PDD_MALL_INFO_GROUP_UPDATE_POST,
  PDD_MALL_INFO_STORE_CREATE_POST,
  PDD_MALL_INFO_STORE_CREATE_POST_NOPOI,
  PDD_MALL_INFO_STORE_DELETE_POST,
  PDD_MALL_INFO_STORE_GET,
  PDD_MALL_INFO_STORE_UPDATE_POST,
  PDD_MALL_INFO_STORE_UPDATE_POST_NOPOI,
  PDD_QRPAY_PAYEE_REGISTER,
  PDD_MALL_INFO_BONDED_WAREHOUSE_GET,
  PDD_OVERSEA_CLEARANCE_GET,
  PDD_OVERSEA_DECLARATION_FAIL_NOTIFY,
  PDD_TICKET_AREACODE_GET,
  PDD_TICKET_GOODS_QUERY,
  PDD_TICKET_GOODS_UPLOAD,
  PDD_TICKET_ORDER_CREATE_NOTIFYCATION,
  PDD_TICKET_ORDER_REFUND_NOTIFYCATION,
  PDD_TICKET_SCENIC_GET,
  PDD_TICKET_SKU_RULE_ADD,
  PDD_TICKET_SKU_RULE_EDIT,
  PDD_TICKET_SKU_RULE_GET,
  PDD_TICKET_VERIFICATION_NOTIFYCATION,
  PDD_DDY_PDP_USER_ADD,
];
const PddApiLimiterMapping = {
  [PDD_LOGISTICS_ADDRESS_GET]: PDD_LOGISTICS_ADDRESS_GET_LIMITERS,
  [PDD_LOGISTICS_AVAILABLE_COMPANY_RECOMMEND]: PDD_LOGISTICS_AVAILABLE_COMPANY_RECOMMEND_LIMITERS,
  [PDD_LOGISTICS_COMPANIES_GET]: PDD_LOGISTICS_COMPANIES_GET_LIMITERS,
  [PDD_LOGISTICS_ISV_TRACE_NOTIFY_SUB]: PDD_LOGISTICS_ISV_TRACE_NOTIFY_SUB_LIMITERS,
  [PDD_LOGISTICS_ONLINE_SEND]: PDD_LOGISTICS_ONLINE_SEND_LIMITERS,
  [PDD_LOGISTICS_ORDERTRACE_GET]: PDD_LOGISTICS_ORDERTRACE_GET_LIMITERS,
  [PDD_ERP_ORDER_SYNC]: PDD_ERP_ORDER_SYNC_LIMITERS,
  [PDD_ORDER_INFORMATION_GET]: PDD_ORDER_INFORMATION_GET_LIMITERS,
  [PDD_ORDER_LIST_GET]: PDD_ORDER_LIST_GET_LIMITERS,
  [PDD_ORDER_NUMBER_LIST_INCREMENT_GET]: PDD_ORDER_NUMBER_LIST_INCREMENT_GET_LIMITERS,
  [PDD_ORDER_STATUS_GET]: PDD_ORDER_STATUS_GET_LIMITERS,
  [PDD_RDC_PDDGENIUS_SENDGOODS_CANCEL]: PDD_RDC_PDDGENIUS_SENDGOODS_CANCEL_LIMITERS,
  [PDD_REFUND_ADDRESS_LIST_GET]: PDD_REFUND_ADDRESS_LIST_GET_LIMITERS,
  [PDD_REFUND_INFORMATION_GET]: PDD_REFUND_INFORMATION_GET_LIMITERS,
  [PDD_REFUND_LIST_INCREMENT_GET]: PDD_REFUND_LIST_INCREMENT_GET_LIMITERS,
  [PDD_REFUND_STATUS_CHECK]: PDD_REFUND_STATUS_CHECK_LIMITERS,
  [PDD_VIRTUAL_MOBILE_CHARGE_NOTIFY]: PDD_VIRTUAL_MOBILE_CHARGE_NOTIFY_LIMITERS,
  [PDD_DELETE_DRAFT_COMMIT]: PDD_DELETE_DRAFT_COMMIT_LIMITERS,
  [PDD_DELETE_GOODS_COMMIT]: PDD_DELETE_GOODS_COMMIT_LIMITERS,
  [PDD_GOODS_ADD]: PDD_GOODS_ADD_LIMITERS,
  [PDD_GOODS_AUTHORIZATION_CATS]: PDD_GOODS_AUTHORIZATION_CATS_LIMITERS,
  [PDD_GOODS_CAT_TEMPLATE_GET]: PDD_GOODS_CAT_TEMPLATE_GET_LIMITERS,
  [PDD_GOODS_CATS_GET]: PDD_GOODS_CATS_GET_LIMITERS,
  [PDD_GOODS_COMMIT_DETAIL_GET]: PDD_GOODS_COMMIT_DETAIL_GET_LIMITERS,
  [PDD_GOODS_COUNTRY_GET]: PDD_GOODS_COUNTRY_GET_LIMITERS,
  [PDD_GOODS_CPS_MALL_UNIT_CREATE]: PDD_GOODS_CPS_MALL_UNIT_CREATE_LIMITERS,
  [PDD_GOODS_CPS_MALL_UNIT_RESUME]: PDD_GOODS_CPS_MALL_UNIT_RESUME_LIMITERS,
  [PDD_GOODS_CPS_UNIT_CHANGE]: PDD_GOODS_CPS_UNIT_CHANGE_LIMITERS,
  [PDD_GOODS_CPS_UNIT_CREATE]: PDD_GOODS_CPS_UNIT_CREATE_LIMITERS,
  [PDD_GOODS_CPS_UNIT_DELETE]: PDD_GOODS_CPS_UNIT_DELETE_LIMITERS,
  [PDD_GOODS_CPS_UNIT_QUERY]: PDD_GOODS_CPS_UNIT_QUERY_LIMITERS,
  [PDD_GOODS_DETAIL_GET]: PDD_GOODS_DETAIL_GET_LIMITERS,
  [PDD_GOODS_EDIT_GOODS_COMMIT]: PDD_GOODS_EDIT_GOODS_COMMIT_LIMITERS,
  [PDD_GOODS_IMAGE_UPLOAD]: PDD_GOODS_IMAGE_UPLOAD_LIMITERS,
  [PDD_GOODS_INFORMATION_GET]: PDD_GOODS_INFORMATION_GET_LIMITERS,
  [PDD_GOODS_INFORMATION_UPDATE]: PDD_GOODS_INFORMATION_UPDATE_LIMITERS,
  [PDD_GOODS_LIST_GET]: PDD_GOODS_LIST_GET_LIMITERS,
  [PDD_GOODS_LOGISTICS_TEMPLATE_CREATE]: PDD_GOODS_LOGISTICS_TEMPLATE_CREATE_LIMITERS,
  [PDD_GOODS_LOGISTICS_TEMPLATE_GET]: PDD_GOODS_LOGISTICS_TEMPLATE_GET_LIMITERS,
  [PDD_GOODS_OPT_GET]: PDD_GOODS_OPT_GET_LIMITERS,
  [PDD_GOODS_OUTER_CAT_MAPPING_GET]: PDD_GOODS_OUTER_CAT_MAPPING_GET_LIMITERS,
  [PDD_GOODS_QUANTITY_UPDATE]: PDD_GOODS_QUANTITY_UPDATE_LIMITERS,
  [PDD_GOODS_SALE_STATUS_SET]: PDD_GOODS_SALE_STATUS_SET_LIMITERS,
  [PDD_GOODS_SKU_PRICE_UPDATE]: PDD_GOODS_SKU_PRICE_UPDATE_LIMITERS,
  [PDD_GOODS_SKUS_GET]: PDD_GOODS_SKUS_GET_LIMITERS,
  [PDD_GOODS_SPEC_GET]: PDD_GOODS_SPEC_GET_LIMITERS,
  [PDD_GOODS_SPEC_ID_GET]: PDD_GOODS_SPEC_ID_GET_LIMITERS,
  [PDD_GOODS_SUBMIT_GOODS_COMMIT]: PDD_GOODS_SUBMIT_GOODS_COMMIT_LIMITERS,
  [PDD_DDK_CMS_PROM_URL_GENERATE]: PDD_DDK_CMS_PROM_URL_GENERATE_LIMITERS,
  [PDD_DDK_GOODS_PROMOTION_URL_GENERATE]: PDD_DDK_GOODS_PROMOTION_URL_GENERATE_LIMITERS,
  [PDD_DDK_GOODS_SEARCH]: PDD_DDK_GOODS_SEARCH_LIMITERS,
  [PDD_DDK_GOODS_DETAIL]: PDD_DDK_GOODS_DETAIL_LIMITERS,
  [PDD_DDK_RESOURCE_URL_GEN]: PDD_DDK_RESOURCE_URL_GEN_LIMITERS,
  [PDD_DDK_ORDER_DETAIL_GET]: PDD_DDK_ORDER_DETAIL_GET_LIMITERS,
  [PDD_DDK_ORDER_LIST_INCREMENT_GET]: PDD_DDK_ORDER_LIST_INCREMENT_GET_LIMITERS,
  [PDD_DDK_GOODS_RECOMMEND_GET]: PDD_DDK_GOODS_RECOMMEND_GET_LIMITERS,
  [PDD_DDK_RP_PROM_URL_GENERATE]: PDD_DDK_RP_PROM_URL_GENERATE_LIMITERS,
  [PDD_DDK_OAUTH_GOODS_PROM_URL_GENERATE]: PDD_DDK_OAUTH_GOODS_PROM_URL_GENERATE_LIMITERS,
  [PDD_DDK_OAUTH_MEMBER_AUTHORITY_QUERY]: PDD_DDK_OAUTH_MEMBER_AUTHORITY_QUERY_LIMITERS,
  [PDD_DDK_OAUTH_ORDER_DETAIL_GET]: PDD_DDK_OAUTH_ORDER_DETAIL_GET_LIMITERS,
  [PDD_DDK_OAUTH_WEAPP_QRCODE_URL_GEN]: PDD_DDK_OAUTH_WEAPP_QRCODE_URL_GEN_LIMITERS,
  [PDD_LOGISTICS_TICKET_GET]: PDD_LOGISTICS_TICKET_GET_LIMITERS,
  [PDD_LOGISTICS_TICKET_IMAGE_UPLOAD]: PDD_LOGISTICS_TICKET_IMAGE_UPLOAD_LIMITERS,
  [PDD_LOGISTICS_TICKET_NOTIFY]: PDD_LOGISTICS_TICKET_NOTIFY_LIMITERS,
  [PDD_LOGISTICS_TICKET_PROBLEM_TYPE_GET]: PDD_LOGISTICS_TICKET_PROBLEM_TYPE_GET_LIMITERS,
  [PDD_PROMOTION_COUPON_CLOSE]: PDD_PROMOTION_COUPON_CLOSE_LIMITERS,
  [PDD_PROMOTION_COUPON_QUANTITY_ADD]: PDD_PROMOTION_COUPON_QUANTITY_ADD_LIMITERS,
  [PDD_PROMOTION_GOODS_COUPON_CREATE]: PDD_PROMOTION_GOODS_COUPON_CREATE_LIMITERS,
  [PDD_PROMOTION_GOODS_COUPON_LIST_GET]: PDD_PROMOTION_GOODS_COUPON_LIST_GET_LIMITERS,
  [PDD_PROMOTION_HOME_COUPON_CREATE]: PDD_PROMOTION_HOME_COUPON_CREATE_LIMITERS,
  [PDD_PROMOTION_MERCHANT_COUPON_LIST_GET]: PDD_PROMOTION_MERCHANT_COUPON_LIST_GET_LIMITERS,
  [PDD_VOUCHER_APPOINTMENT_INFO_SEND]: PDD_VOUCHER_APPOINTMENT_INFO_SEND_LIMITERS,
  [PDD_VOUCHER_OTA_CARD_VERIFICATION]: PDD_VOUCHER_OTA_CARD_VERIFICATION_LIMITERS,
  [PDD_VOUCHER_PHYSICAL_GOODS_SEND]: PDD_VOUCHER_PHYSICAL_GOODS_SEND_LIMITERS,
  [PDD_VOUCHER_REALTIME_ORDERNO_GET]: PDD_VOUCHER_REALTIME_ORDERNO_GET_LIMITERS,
  [PDD_VOUCHER_VIRTUAL_CARD_VERIFICATION]: PDD_VOUCHER_VIRTUAL_CARD_VERIFICATION_LIMITERS,
  [PDD_VOUCHER_VOUCHER_COMPLAIN]: PDD_VOUCHER_VOUCHER_COMPLAIN_LIMITERS,
  [PDD_VOUCHER_VOUCHER_INFO_SEND]: PDD_VOUCHER_VOUCHER_INFO_SEND_LIMITERS,
  [PDD_EINVOICE_INFO_QUERY]: PDD_EINVOICE_INFO_QUERY_LIMITERS,
  [PDD_INVOICE_APPLICATION_QUERY]: PDD_INVOICE_APPLICATION_QUERY_LIMITERS,
  [PDD_INVOICE_DETAIL_INVALID]: PDD_INVOICE_DETAIL_INVALID_LIMITERS,
  [PDD_MALL_INFO_GET]: PDD_MALL_INFO_GET_LIMITERS,
  [PDD_OPEN_DECRYPT_BATCH]: PDD_OPEN_DECRYPT_BATCH_LIMITERS,
  [PDD_OPEN_DECRYPT_MASK_BATCH]: PDD_OPEN_DECRYPT_MASK_BATCH_LIMITERS,
  [PDD_OPEN_KMS_ENCRYPT_BATCH]: PDD_OPEN_KMS_ENCRYPT_BATCH_LIMITERS,
  [PDD_OPEN_KMS_SEARCH_BATCH]: PDD_OPEN_KMS_SEARCH_BATCH_LIMITERS,
  [PDD_PMC_ACCRUE_QUERY]: PDD_PMC_ACCRUE_QUERY_LIMITERS,
  [PDD_CLOUDPRINT_STDTEMPLATES_GET]: PDD_CLOUDPRINT_STDTEMPLATES_GET_LIMITERS,
  [PDD_WAYBILL_GET]: PDD_WAYBILL_GET_LIMITERS,
  [PDD_WAYBILL_SEARCH]: PDD_WAYBILL_SEARCH_LIMITERS,
  [PDD_FINANCE_BALANCE_DAILY_BILL_URL_GET]: PDD_FINANCE_BALANCE_DAILY_BILL_URL_GET_LIMITERS,
  [PDD_SERVICEMARKET_TRADELIST_GET]: PDD_SERVICEMARKET_TRADELIST_GET_LIMITERS,
  [PDD_VAS_ORDER_SEARCH]: PDD_VAS_ORDER_SEARCH_LIMITERS,
  [PDD_AD_API_ADVERTISER_OPEN_ACCOUNT]: PDD_AD_API_ADVERTISER_OPEN_ACCOUNT_LIMITERS,
  [PDD_AD_API_ADVERTISER_QUERY_ACCOUNT_BALANCE]: PDD_AD_API_ADVERTISER_QUERY_ACCOUNT_BALANCE_LIMITERS,
  [PDD_AD_API_ADVERTISER_QUERY_ACCOUNT_INFO]: PDD_AD_API_ADVERTISER_QUERY_ACCOUNT_INFO_LIMITERS,
  [PDD_AD_API_ADVERTISER_QUERY_DETAIL]: PDD_AD_API_ADVERTISER_QUERY_DETAIL_LIMITERS,
  [PDD_AD_API_GOODS_QUERY_GALLERY_IMAGES]: PDD_AD_API_GOODS_QUERY_GALLERY_IMAGES_LIMITERS,
  [PDD_AD_API_GOODS_QUERY_LONG_IMAGES]: PDD_AD_API_GOODS_QUERY_LONG_IMAGES_LIMITERS,
  [PDD_AD_API_GOODS_QUERY_PAGE]: PDD_AD_API_GOODS_QUERY_PAGE_LIMITERS,
  [PDD_AD_API_KEYWORD_CREATE]: PDD_AD_API_KEYWORD_CREATE_LIMITERS,
  [PDD_AD_API_KEYWORD_DELETE]: PDD_AD_API_KEYWORD_DELETE_LIMITERS,
  [PDD_AD_API_KEYWORD_QUERY_LIST]: PDD_AD_API_KEYWORD_QUERY_LIST_LIMITERS,
  [PDD_AD_API_KEYWORD_RECOMMEND_GET]: PDD_AD_API_KEYWORD_RECOMMEND_GET_LIMITERS,
  [PDD_AD_API_KEYWORD_RELEVANCE_GET]: PDD_AD_API_KEYWORD_RELEVANCE_GET_LIMITERS,
  [PDD_AD_API_KEYWORD_UPDATE]: PDD_AD_API_KEYWORD_UPDATE_LIMITERS,
  [PDD_AD_API_PLAN_CREATE]: PDD_AD_API_PLAN_CREATE_LIMITERS,
  [PDD_AD_API_PLAN_DELETE]: PDD_AD_API_PLAN_DELETE_LIMITERS,
  [PDD_AD_API_PLAN_QUERY_CAN_CREATE_AD_PLAN]: PDD_AD_API_PLAN_QUERY_CAN_CREATE_AD_PLAN_LIMITERS,
  [PDD_AD_API_PLAN_QUERY_CAN_UPDATE_MAX_COST]: PDD_AD_API_PLAN_QUERY_CAN_UPDATE_MAX_COST_LIMITERS,
  [PDD_AD_API_PLAN_QUERY_LIST]: PDD_AD_API_PLAN_QUERY_LIST_LIMITERS,
  [PDD_AD_API_PLAN_UPDATE_DATA_OPERATE_STATUS]: PDD_AD_API_PLAN_UPDATE_DATA_OPERATE_STATUS_LIMITERS,
  [PDD_AD_API_PLAN_UPDATE_MAX_COST]: PDD_AD_API_PLAN_UPDATE_MAX_COST_LIMITERS,
  [PDD_AD_API_PLAN_UPDATE_PLAN_DISCOUNT]: PDD_AD_API_PLAN_UPDATE_PLAN_DISCOUNT_LIMITERS,
  [PDD_AD_API_PLAN_UPDATE_PLAN_NAME]: PDD_AD_API_PLAN_UPDATE_PLAN_NAME_LIMITERS,
  [PDD_AD_API_REPORT_DAILY_REPORT_QUERY]: PDD_AD_API_REPORT_DAILY_REPORT_QUERY_LIMITERS,
  [PDD_AD_API_REPORT_ENTITY_REPORT_QUERY]: PDD_AD_API_REPORT_ENTITY_REPORT_QUERY_LIMITERS,
  [PDD_AD_API_REPORT_HOURLY_REPORT_QUERY]: PDD_AD_API_REPORT_HOURLY_REPORT_QUERY_LIMITERS,
  [PDD_AD_API_UNIT_BID_DELETE]: PDD_AD_API_UNIT_BID_DELETE_LIMITERS,
  [PDD_AD_API_UNIT_BID_QUERY_BASE_LOCATION_PROFILE]: PDD_AD_API_UNIT_BID_QUERY_BASE_LOCATION_PROFILE_LIMITERS,
  [PDD_AD_API_UNIT_BID_QUERY_BASE_TARGET_PROFILE]: PDD_AD_API_UNIT_BID_QUERY_BASE_TARGET_PROFILE_LIMITERS,
  [PDD_AD_API_UNIT_BID_QUERY_LIST]: PDD_AD_API_UNIT_BID_QUERY_LIST_LIMITERS,
  [PDD_AD_API_UNIT_BID_QUERY_TARGETING_TAG_LIST]: PDD_AD_API_UNIT_BID_QUERY_TARGETING_TAG_LIST_LIMITERS,
  [PDD_AD_API_UNIT_BID_SYNC]: PDD_AD_API_UNIT_BID_SYNC_LIMITERS,
  [PDD_AD_API_UNIT_BID_UPDATE]: PDD_AD_API_UNIT_BID_UPDATE_LIMITERS,
  [PDD_AD_API_UNIT_CREATE]: PDD_AD_API_UNIT_CREATE_LIMITERS,
  [PDD_AD_API_UNIT_CREATIVE_CHECK_TITLE]: PDD_AD_API_UNIT_CREATIVE_CHECK_TITLE_LIMITERS,
  [PDD_AD_API_UNIT_CREATIVE_CREATE]: PDD_AD_API_UNIT_CREATIVE_CREATE_LIMITERS,
  [PDD_AD_API_UNIT_CREATIVE_DELETE]: PDD_AD_API_UNIT_CREATIVE_DELETE_LIMITERS,
  [PDD_AD_API_UNIT_CREATIVE_DISTRIBUTE_FLOW_RATE]: PDD_AD_API_UNIT_CREATIVE_DISTRIBUTE_FLOW_RATE_LIMITERS,
  [PDD_AD_API_UNIT_CREATIVE_QUERY_FLOW_RATE]: PDD_AD_API_UNIT_CREATIVE_QUERY_FLOW_RATE_LIMITERS,
  [PDD_AD_API_UNIT_CREATIVE_QUERY_LIST]: PDD_AD_API_UNIT_CREATIVE_QUERY_LIST_LIMITERS,
  [PDD_AD_API_UNIT_CREATIVE_UPDATE_CONTENT]: PDD_AD_API_UNIT_CREATIVE_UPDATE_CONTENT_LIMITERS,
  [PDD_AD_API_UNIT_CREATIVE_UPDATE_DATA_OPERATE_STATUS]: PDD_AD_API_UNIT_CREATIVE_UPDATE_DATA_OPERATE_STATUS_LIMITERS,
  [PDD_AD_API_UNIT_CREATIVE_UPDATE_SMART_CREATIVE]: PDD_AD_API_UNIT_CREATIVE_UPDATE_SMART_CREATIVE_LIMITERS,
  [PDD_AD_API_UNIT_DELETE]: PDD_AD_API_UNIT_DELETE_LIMITERS,
  [PDD_AD_API_UNIT_QUERY_LIST]: PDD_AD_API_UNIT_QUERY_LIST_LIMITERS,
  [PDD_AD_API_UNIT_UPDATE_DATA_OPERATE_STATUS]: PDD_AD_API_UNIT_UPDATE_DATA_OPERATE_STATUS_LIMITERS,
  [PDD_AD_API_UNIT_UPDATE_OPTIMIZATION_MESSAGE]: PDD_AD_API_UNIT_UPDATE_OPTIMIZATION_MESSAGE_LIMITERS,
  [PDD_AD_API_UNIT_UPDATE_UNIT_BID]: PDD_AD_API_UNIT_UPDATE_UNIT_BID_LIMITERS,
  [PDD_AD_API_UNIT_UPDATE_UNIT_NAME]: PDD_AD_API_UNIT_UPDATE_UNIT_NAME_LIMITERS,
  [PDD_FDS_ORDER_GET]: PDD_FDS_ORDER_GET_LIMITERS,
  [PDD_FDS_ORDER_LIST_GET]: PDD_FDS_ORDER_LIST_GET_LIMITERS,
  [PDD_FDS_ROLE_GET]: PDD_FDS_ROLE_GET_LIMITERS,
  [PDD_FDS_WAYBILL_CANCEL]: PDD_FDS_WAYBILL_CANCEL_LIMITERS,
  [PDD_FDS_WAYBILL_GET]: PDD_FDS_WAYBILL_GET_LIMITERS,
  [PDD_FDS_WAYBILL_RETURN]: PDD_FDS_WAYBILL_RETURN_LIMITERS,
  [PDD_QRPAY_PAYEE_REGISTER]: PDD_QRPAY_PAYEE_REGISTER_LIMITERS,
  [PDD_MALL_INFO_BONDED_WAREHOUSE_GET]: PDD_MALL_INFO_BONDED_WAREHOUSE_GET_LIMITERS,
  [PDD_DDY_PDP_USER_ADD]: PDD_DDY_PDP_USER_ADD_LIMITERS,
  [PDD_DDY_PDP_USERS_GET]: PDD_DDY_PDP_USERS_GET_LIMITERS,
};
export {
  PDD_LOGISTICS_ADDRESS_GET,
  PDD_LOGISTICS_ADDRESS_GET_RESPONSE_KEY,
  PddLogisticsAddressGetRequestInterface,
  PddLogisticsAddressGetResponseInterface,
  PddLogisticsAddressGetLogisticsAddressGetResponseResponseInterface,
  PDD_LOGISTICS_AVAILABLE_COMPANY_RECOMMEND,
  PddLogisticsAvailableCompanyRecommendRequestInterface,
  PddLogisticsAvailableCompanyRecommendResponseInterface,
  PDD_LOGISTICS_COMPANIES_GET,
  PDD_LOGISTICS_COMPANIES_GET_RESPONSE_KEY,
  PddLogisticsCompaniesGetRequestInterface,
  PddLogisticsCompaniesGetResponseInterface,
  PddLogisticsCompaniesGetLogisticsCompaniesGetResponseResponseInterface,
  PDD_LOGISTICS_ISV_TRACE_NOTIFY_SUB,
  PddLogisticsIsvTraceNotifySubRequestInterface,
  PddLogisticsIsvTraceNotifySubResponseInterface,
  PDD_LOGISTICS_ONLINE_SEND,
  PDD_LOGISTICS_ONLINE_SEND_RESPONSE_KEY,
  PddLogisticsOnlineSendRequestInterface,
  PddLogisticsOnlineSendResponseInterface,
  PddLogisticsOnlineSendLogisticsOnlineSendResponseResponseInterface,
  PDD_LOGISTICS_ORDERTRACE_GET,
  PddLogisticsOrdertraceGetRequestInterface,
  PddLogisticsOrdertraceGetResponseInterface,
  PDD_ERP_ORDER_SYNC,
  PddErpOrderSyncRequestInterface,
  PddErpOrderSyncResponseInterface,
  PDD_ORDER_BASIC_LIST_GET,
  PDD_ORDER_BASIC_LIST_GET_RESPONSE_KEY,
  PddOrderBasicListGetRequestInterface,
  PddOrderBasicListGetResponseInterface,
  PddOrderBasicListGetOrderBasicListGetResponseResponseInterface,
  PDD_ORDER_INFORMATION_GET,
  PDD_ORDER_INFORMATION_GET_RESPONSE_KEY,
  PddOrderInformationGetRequestInterface,
  PddOrderInformationGetResponseInterface,
  PddOrderInformationGetOrderInfoGetResponseResponseInterface,
  PDD_ORDER_LIST_GET,
  PDD_ORDER_LIST_GET_RESPONSE_KEY,
  PddOrderListGetRequestInterface,
  PddOrderListGetResponseInterface,
  PddOrderListGetOrderListGetResponseResponseInterface,
  PDD_ORDER_NOTE_UPDATE,
  PddOrderNoteUpdateRequestInterface,
  PddOrderNoteUpdateResponseInterface,
  PDD_ORDER_NUMBER_LIST_INCREMENT_GET,
  PDD_ORDER_NUMBER_LIST_INCREMENT_GET_RESPONSE_KEY,
  PddOrderNumberListIncrementGetRequestInterface,
  PddOrderNumberListIncrementGetResponseInterface,
  PddOrderNumberListIncrementGetOrderSnIncrementGetResponseResponseInterface,
  PDD_ORDER_PROMISE_INFO_GET,
  PDD_ORDER_PROMISE_INFO_GET_RESPONSE_KEY,
  PddOrderPromiseInfoGetRequestInterface,
  PddOrderPromiseInfoGetResponseInterface,
  PddOrderPromiseInfoGetPromiseInfoGetResponseResponseInterface,
  PDD_ORDER_STATUS_GET,
  PDD_ORDER_STATUS_GET_RESPONSE_KEY,
  PddOrderStatusGetRequestInterface,
  PddOrderStatusGetResponseInterface,
  PddOrderStatusGetOrderStatusGetResponseResponseInterface,
  PDD_ORDER_UPDATE_ADDRESS,
  PddOrderUpdateAddressRequestInterface,
  PddOrderUpdateAddressResponseInterface,
  PDD_ORDER_UPLOAD_EXTRA_LOGISTICS,
  PDD_ORDER_UPLOAD_EXTRA_LOGISTICS_RESPONSE_KEY,
  PddOrderUploadExtraLogisticsRequestInterface,
  PddOrderUploadExtraLogisticsResponseInterface,
  PddOrderUploadExtraLogisticsUploadExtraLogisticsResponseResponseInterface,
  PDD_ORDER_UPLOAD_RELATION_LOGISTICS,
  PDD_ORDER_UPLOAD_RELATION_LOGISTICS_RESPONSE_KEY,
  PddOrderUploadRelationLogisticsRequestInterface,
  PddOrderUploadRelationLogisticsResponseInterface,
  PddOrderUploadRelationLogisticsUploadExtraLogisticsResponseResponseInterface,
  PDD_ORDER_VIRTUAL_INFORMATION_GET,
  PDD_ORDER_VIRTUAL_INFORMATION_GET_RESPONSE_KEY,
  PddOrderVirtualInformationGetRequestInterface,
  PddOrderVirtualInformationGetResponseInterface,
  PddOrderVirtualInformationGetOrderVirtualInformationResponseResponseInterface,
  PDD_NEXTONE_LOGISTICS_WAREHOUSE_UPDATE,
  PddNextoneLogisticsWarehouseUpdateRequestInterface,
  PddNextoneLogisticsWarehouseUpdateResponseInterface,
  PDD_RDC_PDDGENIUS_SENDGOODS_CANCEL,
  PDD_RDC_PDDGENIUS_SENDGOODS_CANCEL_RESPONSE_KEY,
  PddRdcPddgeniusSendgoodsCancelRequestInterface,
  PddRdcPddgeniusSendgoodsCancelResponseInterface,
  PddRdcPddgeniusSendgoodsCancelRdcPddgeniusSendgoodsCancelResponseResponseInterface,
  PDD_REFUND_ADDRESS_LIST_GET,
  PDD_REFUND_ADDRESS_LIST_GET_RESPONSE_KEY,
  PddRefundAddressListGetRequestInterface,
  PddRefundAddressListGetResponseInterface,
  PddRefundAddressListGetRefundAddressListGetResponseResponseInterface,
  PDD_REFUND_AGREE,
  PddRefundAgreeRequestInterface,
  PddRefundAgreeResponseInterface,
  PDD_REFUND_EXCHANGE_SHIPPING,
  PddRefundExchangeShippingRequestInterface,
  PddRefundExchangeShippingResponseInterface,
  PDD_REFUND_INFORMATION_GET,
  PddRefundInformationGetRequestInterface,
  PddRefundInformationGetResponseInterface,
  PDD_REFUND_LIST_INCREMENT_GET,
  PDD_REFUND_LIST_INCREMENT_GET_RESPONSE_KEY,
  PddRefundListIncrementGetRequestInterface,
  PddRefundListIncrementGetResponseInterface,
  PddRefundListIncrementGetRefundIncrementGetResponseResponseInterface,
  PDD_REFUND_RETURNGOODS_AGREE,
  PddRefundReturngoodsAgreeRequestInterface,
  PddRefundReturngoodsAgreeResponseInterface,
  PDD_REFUND_STATUS_CHECK,
  PDD_REFUND_STATUS_CHECK_RESPONSE_KEY,
  PddRefundStatusCheckRequestInterface,
  PddRefundStatusCheckResponseInterface,
  PddRefundStatusCheckRefundStatusCheckResponseResponseInterface,
  PDD_VIRTUAL_GAME_SERVER_QUERY,
  PDD_VIRTUAL_GAME_SERVER_QUERY_RESPONSE_KEY,
  PddVirtualGameServerQueryRequestInterface,
  PddVirtualGameServerQueryResponseInterface,
  PddVirtualGameServerQueryGameServerQueryResponseResponseInterface,
  PDD_VIRTUAL_MOBILE_CHARGE_NOTIFY,
  PDD_VIRTUAL_MOBILE_CHARGE_NOTIFY_RESPONSE_KEY,
  PddVirtualMobileChargeNotifyRequestInterface,
  PddVirtualMobileChargeNotifyResponseInterface,
  PddVirtualMobileChargeNotifyMobileChargeNotifyResponseResponseInterface,
  PDD_DELETE_DRAFT_COMMIT,
  PddDeleteDraftCommitRequestInterface,
  PddDeleteDraftCommitResponseInterface,
  PDD_DELETE_GOODS_COMMIT,
  PddDeleteGoodsCommitRequestInterface,
  PddDeleteGoodsCommitResponseInterface,
  PDD_GOODS_ADD,
  PDD_GOODS_ADD_RESPONSE_KEY,
  PddGoodsAddRequestInterface,
  PddGoodsAddResponseInterface,
  PddGoodsAddGoodsAddResponseResponseInterface,
  PDD_GOODS_ADVICE_PRICE_GET,
  PDD_GOODS_ADVICE_PRICE_GET_RESPONSE_KEY,
  PddGoodsAdvicePriceGetRequestInterface,
  PddGoodsAdvicePriceGetResponseInterface,
  PddGoodsAdvicePriceGetGoodsAdvicePriceGetResponseResponseInterface,
  PDD_GOODS_AUTHORIZATION_CATS,
  PDD_GOODS_AUTHORIZATION_CATS_RESPONSE_KEY,
  PddGoodsAuthorizationCatsRequestInterface,
  PddGoodsAuthorizationCatsResponseInterface,
  PddGoodsAuthorizationCatsGoodsAuthCatsGetResponseResponseInterface,
  PDD_GOODS_CAT_RULE_GET,
  PDD_GOODS_CAT_RULE_GET_RESPONSE_KEY,
  PddGoodsCatRuleGetRequestInterface,
  PddGoodsCatRuleGetResponseInterface,
  PddGoodsCatRuleGetCatRuleGetResponseResponseInterface,
  PDD_GOODS_CAT_TEMPLATE_GET,
  PDD_GOODS_CAT_TEMPLATE_GET_RESPONSE_KEY,
  PddGoodsCatTemplateGetRequestInterface,
  PddGoodsCatTemplateGetResponseInterface,
  PddGoodsCatTemplateGetOpenApiResponseResponseInterface,
  PDD_GOODS_CATS_GET,
  PDD_GOODS_CATS_GET_RESPONSE_KEY,
  PddGoodsCatsGetRequestInterface,
  PddGoodsCatsGetResponseInterface,
  PddGoodsCatsGetGoodsCatsGetResponseResponseInterface,
  PDD_GOODS_CHILD_SKU_EDIT,
  PDD_GOODS_CHILD_SKU_EDIT_RESPONSE_KEY,
  PddGoodsChildSkuEditRequestInterface,
  PddGoodsChildSkuEditResponseInterface,
  PddGoodsChildSkuEditChildSkuEditResponseResponseInterface,
  PDD_GOODS_COMMIT_DETAIL_GET,
  PDD_GOODS_COMMIT_DETAIL_GET_RESPONSE_KEY,
  PddGoodsCommitDetailGetRequestInterface,
  PddGoodsCommitDetailGetResponseInterface,
  PddGoodsCommitDetailGetGoodsCommitDetailResponseResponseInterface,
  PDD_GOODS_COMMIT_LIST_GET,
  PDD_GOODS_COMMIT_LIST_GET_RESPONSE_KEY,
  PddGoodsCommitListGetRequestInterface,
  PddGoodsCommitListGetResponseInterface,
  PddGoodsCommitListGetGoodsCommitListGetResponseResponseInterface,
  PDD_GOODS_COMMIT_STATUS_GET,
  PDD_GOODS_COMMIT_STATUS_GET_RESPONSE_KEY,
  PddGoodsCommitStatusGetRequestInterface,
  PddGoodsCommitStatusGetResponseInterface,
  PddGoodsCommitStatusGetGoodsCommitStatusGetResponseResponseInterface,
  PDD_GOODS_COUNTRY_GET,
  PDD_GOODS_COUNTRY_GET_RESPONSE_KEY,
  PddGoodsCountryGetRequestInterface,
  PddGoodsCountryGetResponseInterface,
  PddGoodsCountryGetGoodsCountryGetResponseResponseInterface,
  PDD_GOODS_CPS_MALL_UNIT_CHANGE,
  PDD_GOODS_CPS_MALL_UNIT_CHANGE_RESPONSE_KEY,
  PddGoodsCpsMallUnitChangeRequestInterface,
  PddGoodsCpsMallUnitChangeResponseInterface,
  PddGoodsCpsMallUnitChangeGoodsCpsMallUnitChangeResponseResponseInterface,
  PDD_GOODS_CPS_MALL_UNIT_CREATE,
  PddGoodsCpsMallUnitCreateRequestInterface,
  PddGoodsCpsMallUnitCreateResponseInterface,
  PDD_GOODS_CPS_MALL_UNIT_PAUSE,
  PDD_GOODS_CPS_MALL_UNIT_PAUSE_RESPONSE_KEY,
  PddGoodsCpsMallUnitPauseRequestInterface,
  PddGoodsCpsMallUnitPauseResponseInterface,
  PddGoodsCpsMallUnitPauseGoodsCpsMallUnitPauseResponseResponseInterface,
  PDD_GOODS_CPS_MALL_UNIT_QUERY,
  PDD_GOODS_CPS_MALL_UNIT_QUERY_RESPONSE_KEY,
  PddGoodsCpsMallUnitQueryRequestInterface,
  PddGoodsCpsMallUnitQueryResponseInterface,
  PddGoodsCpsMallUnitQueryGoodsCpsMallUnitQueryResponseResponseInterface,
  PDD_GOODS_CPS_MALL_UNIT_RESUME,
  PDD_GOODS_CPS_MALL_UNIT_RESUME_RESPONSE_KEY,
  PddGoodsCpsMallUnitResumeRequestInterface,
  PddGoodsCpsMallUnitResumeResponseInterface,
  PddGoodsCpsMallUnitResumeGoodsCpsMallUnitResumeResponseResponseInterface,
  PDD_GOODS_CPS_UNIT_CHANGE,
  PddGoodsCpsUnitChangeRequestInterface,
  PddGoodsCpsUnitChangeResponseInterface,
  PDD_GOODS_CPS_UNIT_CREATE,
  PddGoodsCpsUnitCreateRequestInterface,
  PddGoodsCpsUnitCreateResponseInterface,
  PDD_GOODS_CPS_UNIT_DELETE,
  PDD_GOODS_CPS_UNIT_DELETE_RESPONSE_KEY,
  PddGoodsCpsUnitDeleteRequestInterface,
  PddGoodsCpsUnitDeleteResponseInterface,
  PddGoodsCpsUnitDeleteGoodsCpsUnitDeleteResponseResponseInterface,
  PDD_GOODS_CPS_UNIT_QUERY,
  PddGoodsCpsUnitQueryRequestInterface,
  PddGoodsCpsUnitQueryResponseInterface,
  PDD_GOODS_DETAIL_GET,
  PDD_GOODS_DETAIL_GET_RESPONSE_KEY,
  PddGoodsDetailGetRequestInterface,
  PddGoodsDetailGetResponseInterface,
  PddGoodsDetailGetGoodsDetailGetResponseResponseInterface,
  PDD_GOODS_EDIT_GOODS_COMMIT,
  PDD_GOODS_EDIT_GOODS_COMMIT_RESPONSE_KEY,
  PddGoodsEditGoodsCommitRequestInterface,
  PddGoodsEditGoodsCommitResponseInterface,
  PddGoodsEditGoodsCommitGoodsUpdateResponseResponseInterface,
  PDD_GOODS_FILE_INFO_GET,
  PDD_GOODS_FILE_INFO_GET_RESPONSE_KEY,
  PddGoodsFileInfoGetRequestInterface,
  PddGoodsFileInfoGetResponseInterface,
  PddGoodsFileInfoGetGoodsFileInfoResponseResponseInterface,
  PDD_GOODS_FILESPACE_IMAGE_UPLOAD,
  PDD_GOODS_FILESPACE_IMAGE_UPLOAD_RESPONSE_KEY,
  PddGoodsFilespaceImageUploadRequestInterface,
  PddGoodsFilespaceImageUploadResponseInterface,
  PddGoodsFilespaceImageUploadGoodsFilespaceImageUploadResponseResponseInterface,
  PDD_GOODS_IMAGE_UPLOAD,
  PDD_GOODS_IMAGE_UPLOAD_RESPONSE_KEY,
  PddGoodsImageUploadRequestInterface,
  PddGoodsImageUploadResponseInterface,
  PddGoodsImageUploadGoodsImageUploadResponseResponseInterface,
  PDD_GOODS_IMG_UPLOAD,
  PDD_GOODS_IMG_UPLOAD_RESPONSE_KEY,
  PddGoodsImgUploadRequestInterface,
  PddGoodsImgUploadResponseInterface,
  PddGoodsImgUploadGoodsImgUploadResponseResponseInterface,
  PDD_GOODS_INFORMATION_GET,
  PDD_GOODS_INFORMATION_GET_RESPONSE_KEY,
  PddGoodsInformationGetRequestInterface,
  PddGoodsInformationGetResponseInterface,
  PddGoodsInformationGetGoodsInfoGetResponseResponseInterface,
  PDD_GOODS_INFORMATION_UPDATE,
  PDD_GOODS_INFORMATION_UPDATE_RESPONSE_KEY,
  PddGoodsInformationUpdateRequestInterface,
  PddGoodsInformationUpdateResponseInterface,
  PddGoodsInformationUpdateGoodsUpdateResponseResponseInterface,
  PDD_GOODS_LATEST_COMMIT_STATUS_GET,
  PDD_GOODS_LATEST_COMMIT_STATUS_GET_RESPONSE_KEY,
  PddGoodsLatestCommitStatusGetRequestInterface,
  PddGoodsLatestCommitStatusGetResponseInterface,
  PddGoodsLatestCommitStatusGetGoodsLatestCommitStatusGetResponseResponseInterface,
  PDD_GOODS_LIST_GET,
  PDD_GOODS_LIST_GET_RESPONSE_KEY,
  PddGoodsListGetRequestInterface,
  PddGoodsListGetResponseInterface,
  PddGoodsListGetGoodsListGetResponseResponseInterface,
  PDD_GOODS_LOGISTICS_SER_TEMPLATE_CREATE,
  PDD_GOODS_LOGISTICS_SER_TEMPLATE_CREATE_RESPONSE_KEY,
  PddGoodsLogisticsSerTemplateCreateRequestInterface,
  PddGoodsLogisticsSerTemplateCreateResponseInterface,
  PddGoodsLogisticsSerTemplateCreateGoodsLogisticsSerTemplateCreateResponseResponseInterface,
  PDD_GOODS_LOGISTICS_SER_TEMPLATE_DELETE,
  PDD_GOODS_LOGISTICS_SER_TEMPLATE_DELETE_RESPONSE_KEY,
  PddGoodsLogisticsSerTemplateDeleteRequestInterface,
  PddGoodsLogisticsSerTemplateDeleteResponseInterface,
  PddGoodsLogisticsSerTemplateDeleteGoodsLogisticsSerTemplateDeleteResponseResponseInterface,
  PDD_GOODS_LOGISTICS_SER_TEMPLATE_DETAIL,
  PDD_GOODS_LOGISTICS_SER_TEMPLATE_DETAIL_RESPONSE_KEY,
  PddGoodsLogisticsSerTemplateDetailRequestInterface,
  PddGoodsLogisticsSerTemplateDetailResponseInterface,
  PddGoodsLogisticsSerTemplateDetailGoodsLogisticsSerTemplateDetailResponseResponseInterface,
  PDD_GOODS_LOGISTICS_SER_TEMPLATE_LIST,
  PDD_GOODS_LOGISTICS_SER_TEMPLATE_LIST_RESPONSE_KEY,
  PddGoodsLogisticsSerTemplateListRequestInterface,
  PddGoodsLogisticsSerTemplateListResponseInterface,
  PddGoodsLogisticsSerTemplateListGoodsLogisticsSerTemplateListResponseResponseInterface,
  PDD_GOODS_LOGISTICS_SER_TEMPLATE_UPDATE,
  PDD_GOODS_LOGISTICS_SER_TEMPLATE_UPDATE_RESPONSE_KEY,
  PddGoodsLogisticsSerTemplateUpdateRequestInterface,
  PddGoodsLogisticsSerTemplateUpdateResponseInterface,
  PddGoodsLogisticsSerTemplateUpdateGoodsLogisticsSerTemplateUpdateResponseResponseInterface,
  PDD_GOODS_LOGISTICS_TEMPLATE_CREATE,
  PDD_GOODS_LOGISTICS_TEMPLATE_CREATE_RESPONSE_KEY,
  PddGoodsLogisticsTemplateCreateRequestInterface,
  PddGoodsLogisticsTemplateCreateResponseInterface,
  PddGoodsLogisticsTemplateCreateGoodsLogisticsTemplateCreateResponseResponseInterface,
  PDD_GOODS_LOGISTICS_TEMPLATE_GET,
  PDD_GOODS_LOGISTICS_TEMPLATE_GET_RESPONSE_KEY,
  PddGoodsLogisticsTemplateGetRequestInterface,
  PddGoodsLogisticsTemplateGetResponseInterface,
  PddGoodsLogisticsTemplateGetGoodsLogisticsTemplateGetResponseResponseInterface,
  PDD_GOODS_MATERIAL_CREATE,
  PddGoodsMaterialCreateRequestInterface,
  PddGoodsMaterialCreateResponseInterface,
  PDD_GOODS_MATERIAL_DELETE,
  PddGoodsMaterialDeleteRequestInterface,
  PddGoodsMaterialDeleteResponseInterface,
  PDD_GOODS_MATERIAL_QUERY,
  PddGoodsMaterialQueryRequestInterface,
  PddGoodsMaterialQueryResponseInterface,
  PDD_GOODS_OPT_GET,
  PDD_GOODS_OPT_GET_RESPONSE_KEY,
  PddGoodsOptGetRequestInterface,
  PddGoodsOptGetResponseInterface,
  PddGoodsOptGetGoodsOptGetResponseResponseInterface,
  PDD_GOODS_OUT_PROPERTY_MAPPING_GET,
  PDD_GOODS_OUT_PROPERTY_MAPPING_GET_RESPONSE_KEY,
  PddGoodsOutPropertyMappingGetRequestInterface,
  PddGoodsOutPropertyMappingGetResponseInterface,
  PddGoodsOutPropertyMappingGetOutPropertyMappingGetResponseResponseInterface,
  PDD_GOODS_OUTER_CAT_MAPPING_GET,
  PDD_GOODS_OUTER_CAT_MAPPING_GET_RESPONSE_KEY,
  PddGoodsOuterCatMappingGetRequestInterface,
  PddGoodsOuterCatMappingGetResponseInterface,
  PddGoodsOuterCatMappingGetOuterCatMappingGetResponseResponseInterface,
  PDD_GOODS_PRICE_CHECK,
  PDD_GOODS_PRICE_CHECK_RESPONSE_KEY,
  PddGoodsPriceCheckRequestInterface,
  PddGoodsPriceCheckResponseInterface,
  PddGoodsPriceCheckGoodsidPriceCheckResponseResponseInterface,
  PDD_GOODS_QUANTITY_UPDATE,
  PDD_GOODS_QUANTITY_UPDATE_RESPONSE_KEY,
  PddGoodsQuantityUpdateRequestInterface,
  PddGoodsQuantityUpdateResponseInterface,
  PddGoodsQuantityUpdateGoodsQuantityUpdateResponseResponseInterface,
  PDD_GOODS_SALE_STATUS_SET,
  PDD_GOODS_SALE_STATUS_SET_RESPONSE_KEY,
  PddGoodsSaleStatusSetRequestInterface,
  PddGoodsSaleStatusSetResponseInterface,
  PddGoodsSaleStatusSetGoodsSaleStatusSetResponseResponseInterface,
  PDD_GOODS_SIZESPEC_CLASS_GET,
  PddGoodsSizespecClassGetRequestInterface,
  PddGoodsSizespecClassGetResponseInterface,
  PDD_GOODS_SIZESPEC_META_GET,
  PddGoodsSizespecMetaGetRequestInterface,
  PddGoodsSizespecMetaGetResponseInterface,
  PDD_GOODS_SIZESPEC_TEMPLATE_ADD,
  PddGoodsSizespecTemplateAddRequestInterface,
  PddGoodsSizespecTemplateAddResponseInterface,
  PDD_GOODS_SIZESPEC_TEMPLATE_DELETE,
  PddGoodsSizespecTemplateDeleteRequestInterface,
  PddGoodsSizespecTemplateDeleteResponseInterface,
  PDD_GOODS_SIZESPEC_TEMPLATE_GET,
  PddGoodsSizespecTemplateGetRequestInterface,
  PddGoodsSizespecTemplateGetResponseInterface,
  PDD_GOODS_SIZESPEC_TEMPLATE_UPDATE,
  PddGoodsSizespecTemplateUpdateRequestInterface,
  PddGoodsSizespecTemplateUpdateResponseInterface,
  PDD_GOODS_SIZESPEC_TEMPLATES_GET,
  PddGoodsSizespecTemplatesGetRequestInterface,
  PddGoodsSizespecTemplatesGetResponseInterface,
  PDD_GOODS_SKU_PRICE_UPDATE,
  PDD_GOODS_SKU_PRICE_UPDATE_RESPONSE_KEY,
  PddGoodsSkuPriceUpdateRequestInterface,
  PddGoodsSkuPriceUpdateResponseInterface,
  PddGoodsSkuPriceUpdateGoodsUpdateSkuPriceResponseResponseInterface,
  PDD_GOODS_SKUS_GET,
  PDD_GOODS_SKUS_GET_RESPONSE_KEY,
  PddGoodsSkusGetRequestInterface,
  PddGoodsSkusGetResponseInterface,
  PddGoodsSkusGetGoodsSkuGetResponseResponseInterface,
  PDD_GOODS_SPEC_GET,
  PDD_GOODS_SPEC_GET_RESPONSE_KEY,
  PddGoodsSpecGetRequestInterface,
  PddGoodsSpecGetResponseInterface,
  PddGoodsSpecGetGoodsSpecGetResponseResponseInterface,
  PDD_GOODS_SPEC_ID_GET,
  PDD_GOODS_SPEC_ID_GET_RESPONSE_KEY,
  PddGoodsSpecIdGetRequestInterface,
  PddGoodsSpecIdGetResponseInterface,
  PddGoodsSpecIdGetGoodsSpecIdGetResponseResponseInterface,
  PDD_GOODS_SPU_GET,
  PDD_GOODS_SPU_GET_RESPONSE_KEY,
  PddGoodsSpuGetRequestInterface,
  PddGoodsSpuGetResponseInterface,
  PddGoodsSpuGetSpuGetResponseResponseInterface,
  PDD_GOODS_SPU_SEARCH,
  PDD_GOODS_SPU_SEARCH_RESPONSE_KEY,
  PddGoodsSpuSearchRequestInterface,
  PddGoodsSpuSearchResponseInterface,
  PddGoodsSpuSearchSpuSearchResponseResponseInterface,
  PDD_GOODS_SUBMIT_GOODS_COMMIT,
  PDD_GOODS_SUBMIT_GOODS_COMMIT_RESPONSE_KEY,
  PddGoodsSubmitGoodsCommitRequestInterface,
  PddGoodsSubmitGoodsCommitResponseInterface,
  PddGoodsSubmitGoodsCommitGoodsUpdateResponseResponseInterface,
  PDD_GOODS_TEMPLATE_PROPERTY_VALUE_SEARCH,
  PDD_GOODS_TEMPLATE_PROPERTY_VALUE_SEARCH_RESPONSE_KEY,
  PddGoodsTemplatePropertyValueSearchRequestInterface,
  PddGoodsTemplatePropertyValueSearchResponseInterface,
  PddGoodsTemplatePropertyValueSearchGoodsTemplatePropValSearchResponseResponseInterface,
  PDD_GOOODS_SKU_MEASUREMENT_LIST,
  PDD_GOOODS_SKU_MEASUREMENT_LIST_RESPONSE_KEY,
  PddGooodsSkuMeasurementListRequestInterface,
  PddGooodsSkuMeasurementListResponseInterface,
  PddGooodsSkuMeasurementListGooodsSkuMeasurementListResponseResponseInterface,
  PDD_ONE_EXPRESS_COST_TEMPLATE,
  PDD_ONE_EXPRESS_COST_TEMPLATE_RESPONSE_KEY,
  PddOneExpressCostTemplateRequestInterface,
  PddOneExpressCostTemplateResponseInterface,
  PddOneExpressCostTemplateOneExpressCostTemplateResponseResponseInterface,
  PDD_DDK_GOODS_PID_GENERATE,
  PDD_DDK_GOODS_PID_GENERATE_RESPONSE_KEY,
  PddDdkGoodsPidGenerateRequestInterface,
  PddDdkGoodsPidGenerateResponseInterface,
  PddDdkGoodsPidGeneratePIdGenerateResponseResponseInterface,
  PDD_DDK_CASHGIFT_STATUS_UPDATE,
  PDD_DDK_CASHGIFT_STATUS_UPDATE_RESPONSE_KEY,
  PddDdkCashgiftStatusUpdateRequestInterface,
  PddDdkCashgiftStatusUpdateResponseInterface,
  PddDdkCashgiftStatusUpdateUpdateCashgiftResponseResponseInterface,
  PDD_DDK_GOODS_PID_QUERY,
  PDD_DDK_GOODS_PID_QUERY_RESPONSE_KEY,
  PddDdkGoodsPidQueryRequestInterface,
  PddDdkGoodsPidQueryResponseInterface,
  PddDdkGoodsPidQueryPIdQueryResponseResponseInterface,
  PDD_DDK_PID_MEDIAID_BIND,
  PDD_DDK_PID_MEDIAID_BIND_RESPONSE_KEY,
  PddDdkPidMediaidBindRequestInterface,
  PddDdkPidMediaidBindResponseInterface,
  PddDdkPidMediaidBindPIdBindResponseResponseInterface,
  PDD_DDK_GOODS_ZS_UNIT_URL_GEN,
  PDD_DDK_GOODS_ZS_UNIT_URL_GEN_RESPONSE_KEY,
  PddDdkGoodsZsUnitUrlGenRequestInterface,
  PddDdkGoodsZsUnitUrlGenResponseInterface,
  PddDdkGoodsZsUnitUrlGenGoodsZsUnitGenerateResponseResponseInterface,
  PDD_DDK_MEMBER_AUTHORITY_QUERY,
  PDD_DDK_MEMBER_AUTHORITY_QUERY_RESPONSE_KEY,
  PddDdkMemberAuthorityQueryRequestInterface,
  PddDdkMemberAuthorityQueryResponseInterface,
  PddDdkMemberAuthorityQueryAuthorityQueryResponseResponseInterface,
  PDD_DDK_CASHGIFT_DATA_QUERY,
  PDD_DDK_CASHGIFT_DATA_QUERY_RESPONSE_KEY,
  PddDdkCashgiftDataQueryRequestInterface,
  PddDdkCashgiftDataQueryResponseInterface,
  PddDdkCashgiftDataQueryCashgiftDataResponseResponseInterface,
  PDD_DDK_STATISTICS_DATA_QUERY,
  PDD_DDK_STATISTICS_DATA_QUERY_RESPONSE_KEY,
  PddDdkStatisticsDataQueryRequestInterface,
  PddDdkStatisticsDataQueryResponseInterface,
  PddDdkStatisticsDataQueryStatisticsDataResponseResponseInterface,
  PDD_DDK_CMS_PROM_URL_GENERATE,
  PDD_DDK_CMS_PROM_URL_GENERATE_RESPONSE_KEY,
  PddDdkCmsPromUrlGenerateRequestInterface,
  PddDdkCmsPromUrlGenerateResponseInterface,
  PddDdkCmsPromUrlGenerateCmsPromotionUrlGenerateResponseResponseInterface,
  PDD_DDK_GOODS_PROMOTION_URL_GENERATE,
  PDD_DDK_GOODS_PROMOTION_URL_GENERATE_RESPONSE_KEY,
  PddDdkGoodsPromotionUrlGenerateRequestInterface,
  PddDdkGoodsPromotionUrlGenerateResponseInterface,
  PddDdkGoodsPromotionUrlGenerateGoodsPromotionUrlGenerateResponseResponseInterface,
  PDD_DDK_ORDER_LIST_RANGE_GET,
  PDD_DDK_ORDER_LIST_RANGE_GET_RESPONSE_KEY,
  PddDdkOrderListRangeGetRequestInterface,
  PddDdkOrderListRangeGetResponseInterface,
  PddDdkOrderListRangeGetOrderListGetResponseResponseInterface,
  PDD_DDK_GOODS_SEARCH,
  PDD_DDK_GOODS_SEARCH_RESPONSE_KEY,
  PddDdkGoodsSearchRequestInterface,
  PddDdkGoodsSearchResponseInterface,
  PddDdkGoodsSearchGoodsSearchResponseResponseInterface,
  PDD_DDK_GOODS_DETAIL,
  PDD_DDK_GOODS_DETAIL_RESPONSE_KEY,
  PddDdkGoodsDetailRequestInterface,
  PddDdkGoodsDetailResponseInterface,
  PddDdkGoodsDetailGoodsDetailResponseResponseInterface,
  PDD_DDK_RESOURCE_URL_GEN,
  PDD_DDK_RESOURCE_URL_GEN_RESPONSE_KEY,
  PddDdkResourceUrlGenRequestInterface,
  PddDdkResourceUrlGenResponseInterface,
  PddDdkResourceUrlGenResourceUrlResponseResponseInterface,
  PDD_DDK_CASHGIFT_CREATE,
  PDD_DDK_CASHGIFT_CREATE_RESPONSE_KEY,
  PddDdkCashgiftCreateRequestInterface,
  PddDdkCashgiftCreateResponseInterface,
  PddDdkCashgiftCreateCreateCashgiftResponseResponseInterface,
  PDD_DDK_ORDER_DETAIL_GET,
  PDD_DDK_ORDER_DETAIL_GET_RESPONSE_KEY,
  PddDdkOrderDetailGetRequestInterface,
  PddDdkOrderDetailGetResponseInterface,
  PddDdkOrderDetailGetOrderDetailResponseResponseInterface,
  PDD_DDK_ORDER_LIST_INCREMENT_GET,
  PDD_DDK_ORDER_LIST_INCREMENT_GET_RESPONSE_KEY,
  PddDdkOrderListIncrementGetRequestInterface,
  PddDdkOrderListIncrementGetResponseInterface,
  PddDdkOrderListIncrementGetOrderListGetResponseResponseInterface,
  PDD_DDK_GOODS_RECOMMEND_GET,
  PDD_DDK_GOODS_RECOMMEND_GET_RESPONSE_KEY,
  PddDdkGoodsRecommendGetRequestInterface,
  PddDdkGoodsRecommendGetResponseInterface,
  PddDdkGoodsRecommendGetGoodsBasicDetailResponseResponseInterface,
  PDD_DDK_RP_PROM_URL_GENERATE,
  PDD_DDK_RP_PROM_URL_GENERATE_RESPONSE_KEY,
  PddDdkRpPromUrlGenerateRequestInterface,
  PddDdkRpPromUrlGenerateResponseInterface,
  PddDdkRpPromUrlGenerateRpPromotionUrlGenerateResponseResponseInterface,
  PDD_DDK_ALL_ORDER_LIST_INCREMENT_GET,
  PDD_DDK_ALL_ORDER_LIST_INCREMENT_GET_RESPONSE_KEY,
  PddDdkAllOrderListIncrementGetRequestInterface,
  PddDdkAllOrderListIncrementGetResponseInterface,
  PddDdkAllOrderListIncrementGetOrderListGetResponseResponseInterface,
  PDD_DDK_OAUTH_CASHGIFT_CREATE,
  PDD_DDK_OAUTH_CASHGIFT_CREATE_RESPONSE_KEY,
  PddDdkOauthCashgiftCreateRequestInterface,
  PddDdkOauthCashgiftCreateResponseInterface,
  PddDdkOauthCashgiftCreateCreateCashgiftResponseResponseInterface,
  PDD_DDK_OAUTH_CASHGIFT_STATUS_UPDATE,
  PDD_DDK_OAUTH_CASHGIFT_STATUS_UPDATE_RESPONSE_KEY,
  PddDdkOauthCashgiftStatusUpdateRequestInterface,
  PddDdkOauthCashgiftStatusUpdateResponseInterface,
  PddDdkOauthCashgiftStatusUpdateUpdateCashgiftResponseResponseInterface,
  PDD_DDK_OAUTH_CMS_PROM_URL_GENERATE,
  PDD_DDK_OAUTH_CMS_PROM_URL_GENERATE_RESPONSE_KEY,
  PddDdkOauthCmsPromUrlGenerateRequestInterface,
  PddDdkOauthCmsPromUrlGenerateResponseInterface,
  PddDdkOauthCmsPromUrlGenerateCmsPromotionUrlGenerateResponseResponseInterface,
  PDD_DDK_OAUTH_GOODS_DETAIL,
  PDD_DDK_OAUTH_GOODS_DETAIL_RESPONSE_KEY,
  PddDdkOauthGoodsDetailRequestInterface,
  PddDdkOauthGoodsDetailResponseInterface,
  PddDdkOauthGoodsDetailGoodsDetailResponseResponseInterface,
  PDD_DDK_OAUTH_GOODS_PID_GENERATE,
  PDD_DDK_OAUTH_GOODS_PID_GENERATE_RESPONSE_KEY,
  PddDdkOauthGoodsPidGenerateRequestInterface,
  PddDdkOauthGoodsPidGenerateResponseInterface,
  PddDdkOauthGoodsPidGeneratePIdGenerateResponseResponseInterface,
  PDD_DDK_OAUTH_GOODS_PID_QUERY,
  PDD_DDK_OAUTH_GOODS_PID_QUERY_RESPONSE_KEY,
  PddDdkOauthGoodsPidQueryRequestInterface,
  PddDdkOauthGoodsPidQueryResponseInterface,
  PddDdkOauthGoodsPidQueryPIdQueryResponseResponseInterface,
  PDD_DDK_OAUTH_GOODS_PROM_URL_GENERATE,
  PDD_DDK_OAUTH_GOODS_PROM_URL_GENERATE_RESPONSE_KEY,
  PddDdkOauthGoodsPromUrlGenerateRequestInterface,
  PddDdkOauthGoodsPromUrlGenerateResponseInterface,
  PddDdkOauthGoodsPromUrlGenerateGoodsPromotionUrlGenerateResponseResponseInterface,
  PDD_DDK_OAUTH_GOODS_RECOMMEND_GET,
  PDD_DDK_OAUTH_GOODS_RECOMMEND_GET_RESPONSE_KEY,
  PddDdkOauthGoodsRecommendGetRequestInterface,
  PddDdkOauthGoodsRecommendGetResponseInterface,
  PddDdkOauthGoodsRecommendGetGoodsBasicDetailResponseResponseInterface,
  PDD_DDK_OAUTH_GOODS_SEARCH,
  PDD_DDK_OAUTH_GOODS_SEARCH_RESPONSE_KEY,
  PddDdkOauthGoodsSearchRequestInterface,
  PddDdkOauthGoodsSearchResponseInterface,
  PddDdkOauthGoodsSearchGoodsSearchResponseResponseInterface,
  PDD_DDK_OAUTH_GOODS_ZS_UNIT_URL_GEN,
  PDD_DDK_OAUTH_GOODS_ZS_UNIT_URL_GEN_RESPONSE_KEY,
  PddDdkOauthGoodsZsUnitUrlGenRequestInterface,
  PddDdkOauthGoodsZsUnitUrlGenResponseInterface,
  PddDdkOauthGoodsZsUnitUrlGenGoodsZsUnitGenerateResponseResponseInterface,
  PDD_DDK_OAUTH_MEMBER_AUTHORITY_QUERY,
  PDD_DDK_OAUTH_MEMBER_AUTHORITY_QUERY_RESPONSE_KEY,
  PddDdkOauthMemberAuthorityQueryRequestInterface,
  PddDdkOauthMemberAuthorityQueryResponseInterface,
  PddDdkOauthMemberAuthorityQueryAuthorityQueryResponseResponseInterface,
  PDD_DDK_OAUTH_ORDER_DETAIL_GET,
  PDD_DDK_OAUTH_ORDER_DETAIL_GET_RESPONSE_KEY,
  PddDdkOauthOrderDetailGetRequestInterface,
  PddDdkOauthOrderDetailGetResponseInterface,
  PddDdkOauthOrderDetailGetOrderDetailResponseResponseInterface,
  PDD_DDK_OAUTH_PID_MEDIAID_BIND,
  PDD_DDK_OAUTH_PID_MEDIAID_BIND_RESPONSE_KEY,
  PddDdkOauthPidMediaidBindRequestInterface,
  PddDdkOauthPidMediaidBindResponseInterface,
  PddDdkOauthPidMediaidBindPIdBindResponseResponseInterface,
  PDD_DDK_OAUTH_RESOURCE_URL_GEN,
  PDD_DDK_OAUTH_RESOURCE_URL_GEN_RESPONSE_KEY,
  PddDdkOauthResourceUrlGenRequestInterface,
  PddDdkOauthResourceUrlGenResponseInterface,
  PddDdkOauthResourceUrlGenResourceUrlResponseResponseInterface,
  PDD_DDK_OAUTH_RP_PROM_URL_GENERATE,
  PDD_DDK_OAUTH_RP_PROM_URL_GENERATE_RESPONSE_KEY,
  PddDdkOauthRpPromUrlGenerateRequestInterface,
  PddDdkOauthRpPromUrlGenerateResponseInterface,
  PddDdkOauthRpPromUrlGenerateRpPromotionUrlGenerateResponseResponseInterface,
  PDD_DDK_OAUTH_WEAPP_QRCODE_URL_GEN,
  PDD_DDK_OAUTH_WEAPP_QRCODE_URL_GEN_RESPONSE_KEY,
  PddDdkOauthWeappQrcodeUrlGenRequestInterface,
  PddDdkOauthWeappQrcodeUrlGenResponseInterface,
  PddDdkOauthWeappQrcodeUrlGenWeappQrcodeGenerateResponseResponseInterface,
  PDD_LOGISTICS_CS_HISTORY_MESSAGE_GET,
  PDD_LOGISTICS_CS_HISTORY_MESSAGE_GET_RESPONSE_KEY,
  PddLogisticsCsHistoryMessageGetRequestInterface,
  PddLogisticsCsHistoryMessageGetResponseInterface,
  PddLogisticsCsHistoryMessageGetLogisticsCsHistoryMessageGetResponseResponseInterface,
  PDD_LOGISTICS_CS_MESSAGE_SEND,
  PDD_LOGISTICS_CS_MESSAGE_SEND_RESPONSE_KEY,
  PddLogisticsCsMessageSendRequestInterface,
  PddLogisticsCsMessageSendResponseInterface,
  PddLogisticsCsMessageSendLogisticsCsMessageSendResponseResponseInterface,
  PDD_LOGISTICS_CS_SESSION_CLOSE,
  PDD_LOGISTICS_CS_SESSION_CLOSE_RESPONSE_KEY,
  PddLogisticsCsSessionCloseRequestInterface,
  PddLogisticsCsSessionCloseResponseInterface,
  PddLogisticsCsSessionCloseLogisticsCsSessionCloseResponseResponseInterface,
  PDD_LOGISTICS_CS_SESSION_START,
  PDD_LOGISTICS_CS_SESSION_START_RESPONSE_KEY,
  PddLogisticsCsSessionStartRequestInterface,
  PddLogisticsCsSessionStartResponseInterface,
  PddLogisticsCsSessionStartLogisticsCsSessionStartResponseResponseInterface,
  PDD_LOGISTICS_TICKET_GET,
  PDD_LOGISTICS_TICKET_GET_RESPONSE_KEY,
  PddLogisticsTicketGetRequestInterface,
  PddLogisticsTicketGetResponseInterface,
  PddLogisticsTicketGetLogisticsTicketGetResponseResponseInterface,
  PDD_LOGISTICS_TICKET_IMAGE_UPLOAD,
  PDD_LOGISTICS_TICKET_IMAGE_UPLOAD_RESPONSE_KEY,
  PddLogisticsTicketImageUploadRequestInterface,
  PddLogisticsTicketImageUploadResponseInterface,
  PddLogisticsTicketImageUploadLogisticsTicketImageUploadResponseResponseInterface,
  PDD_LOGISTICS_TICKET_NOTIFY,
  PDD_LOGISTICS_TICKET_NOTIFY_RESPONSE_KEY,
  PddLogisticsTicketNotifyRequestInterface,
  PddLogisticsTicketNotifyResponseInterface,
  PddLogisticsTicketNotifyLogisticsTicketNotifyResponseResponseInterface,
  PDD_LOGISTICS_TICKET_PROBLEM_TYPE_GET,
  PDD_LOGISTICS_TICKET_PROBLEM_TYPE_GET_RESPONSE_KEY,
  PddLogisticsTicketProblemTypeGetRequestInterface,
  PddLogisticsTicketProblemTypeGetResponseInterface,
  PddLogisticsTicketProblemTypeGetLogisticsProblemTypeGetResponseResponseInterface,
  PDD_SERVICE_MAIL_BIZACTION_NOTIFY,
  PddServiceMailBizactionNotifyRequestInterface,
  PddServiceMailBizactionNotifyResponseInterface,
  PDD_LOGISTICS_CO_TRACK_SUB,
  PddLogisticsCoTrackSubRequestInterface,
  PddLogisticsCoTrackSubResponseInterface,
  PDD_SERVICE_MAIL_ORDER_FC_AUTH,
  PddServiceMailOrderFcAuthRequestInterface,
  PddServiceMailOrderFcAuthResponseInterface,
  PDD_SERVICE_MAIL_SERVICE_TIME_QUERY,
  PddServiceMailServiceTimeQueryRequestInterface,
  PddServiceMailServiceTimeQueryResponseInterface,
  PDD_PROMOTION_COUPON_CLOSE,
  PDD_PROMOTION_COUPON_CLOSE_RESPONSE_KEY,
  PddPromotionCouponCloseRequestInterface,
  PddPromotionCouponCloseResponseInterface,
  PddPromotionCouponClosePromotionCouponBatchCloseResponseResponseInterface,
  PDD_PROMOTION_COUPON_QUANTITY_ADD,
  PDD_PROMOTION_COUPON_QUANTITY_ADD_RESPONSE_KEY,
  PddPromotionCouponQuantityAddRequestInterface,
  PddPromotionCouponQuantityAddResponseInterface,
  PddPromotionCouponQuantityAddCouponQuantityAddResponseResponseInterface,
  PDD_PROMOTION_GOODS_COUPON_CREATE,
  PDD_PROMOTION_GOODS_COUPON_CREATE_RESPONSE_KEY,
  PddPromotionGoodsCouponCreateRequestInterface,
  PddPromotionGoodsCouponCreateResponseInterface,
  PddPromotionGoodsCouponCreateGoodsCouponBatchCreateResponseResponseInterface,
  PDD_PROMOTION_GOODS_COUPON_LIST_GET,
  PDD_PROMOTION_GOODS_COUPON_LIST_GET_RESPONSE_KEY,
  PddPromotionGoodsCouponListGetRequestInterface,
  PddPromotionGoodsCouponListGetResponseInterface,
  PddPromotionGoodsCouponListGetGoodsCouponBatchListResponseResponseInterface,
  PDD_PROMOTION_HOME_COUPON_CREATE,
  PDD_PROMOTION_HOME_COUPON_CREATE_RESPONSE_KEY,
  PddPromotionHomeCouponCreateRequestInterface,
  PddPromotionHomeCouponCreateResponseInterface,
  PddPromotionHomeCouponCreateHomeCouponBatchCreateResponseResponseInterface,
  PDD_PROMOTION_LIMITED_ACTIVITY_CANCEL,
  PddPromotionLimitedActivityCancelRequestInterface,
  PddPromotionLimitedActivityCancelResponseInterface,
  PDD_PROMOTION_LIMITED_ACTIVITY_CREATE,
  PddPromotionLimitedActivityCreateRequestInterface,
  PddPromotionLimitedActivityCreateResponseInterface,
  PDD_PROMOTION_LIMITED_DISCOUNT_LIST_GET,
  PddPromotionLimitedDiscountListGetRequestInterface,
  PddPromotionLimitedDiscountListGetResponseInterface,
  PDD_PROMOTION_LIMITED_QUALIFIED_GOODS_GET,
  PddPromotionLimitedQualifiedGoodsGetRequestInterface,
  PddPromotionLimitedQualifiedGoodsGetResponseInterface,
  PDD_PROMOTION_LIMITED_QUALIFIED_SKU_GET,
  PddPromotionLimitedQualifiedSkuGetRequestInterface,
  PddPromotionLimitedQualifiedSkuGetResponseInterface,
  PDD_PROMOTION_MERCHANT_COUPON_LIST_GET,
  PDD_PROMOTION_MERCHANT_COUPON_LIST_GET_RESPONSE_KEY,
  PddPromotionMerchantCouponListGetRequestInterface,
  PddPromotionMerchantCouponListGetResponseInterface,
  PddPromotionMerchantCouponListGetMerchantCouponBatchListResponseResponseInterface,
  PDD_VOUCHER_APPOINTMENT_INFO_SEND,
  PDD_VOUCHER_APPOINTMENT_INFO_SEND_RESPONSE_KEY,
  PddVoucherAppointmentInfoSendRequestInterface,
  PddVoucherAppointmentInfoSendResponseInterface,
  PddVoucherAppointmentInfoSendVoucherAppointmentInfoSendResponseResponseInterface,
  PDD_VOUCHER_OTA_CARD_PREPARE_VERIFICATION,
  PddVoucherOtaCardPrepareVerificationRequestInterface,
  PddVoucherOtaCardPrepareVerificationResponseInterface,
  PDD_VOUCHER_OTA_CARD_VERIFICATION,
  PDD_VOUCHER_OTA_CARD_VERIFICATION_RESPONSE_KEY,
  PddVoucherOtaCardVerificationRequestInterface,
  PddVoucherOtaCardVerificationResponseInterface,
  PddVoucherOtaCardVerificationVoucherOtaCardVerificationResponseResponseInterface,
  PDD_VOUCHER_PHYSICAL_GOODS_SEND,
  PDD_VOUCHER_PHYSICAL_GOODS_SEND_RESPONSE_KEY,
  PddVoucherPhysicalGoodsSendRequestInterface,
  PddVoucherPhysicalGoodsSendResponseInterface,
  PddVoucherPhysicalGoodsSendVoucherPhysicalVoucherSendResponseResponseInterface,
  PDD_VOUCHER_REALTIME_ORDERNO_GET,
  PddVoucherRealtimeOrdernoGetRequestInterface,
  PddVoucherRealtimeOrdernoGetResponseInterface,
  PDD_VOUCHER_REALTIME_VERIFY_SYNC,
  PddVoucherRealtimeVerifySyncRequestInterface,
  PddVoucherRealtimeVerifySyncResponseInterface,
  PDD_VOUCHER_VIRTUAL_CARD_BATCH_ADD,
  PddVoucherVirtualCardBatchAddRequestInterface,
  PddVoucherVirtualCardBatchAddResponseInterface,
  PDD_VOUCHER_VIRTUAL_CARD_VERIFICATION,
  PDD_VOUCHER_VIRTUAL_CARD_VERIFICATION_RESPONSE_KEY,
  PddVoucherVirtualCardVerificationRequestInterface,
  PddVoucherVirtualCardVerificationResponseInterface,
  PddVoucherVirtualCardVerificationVoucherVoucherInfoVerifyResponseResponseInterface,
  PDD_VOUCHER_VOUCHER_COMPLAIN,
  PDD_VOUCHER_VOUCHER_COMPLAIN_RESPONSE_KEY,
  PddVoucherVoucherComplainRequestInterface,
  PddVoucherVoucherComplainResponseInterface,
  PddVoucherVoucherComplainVoucherVoucherComplainResponseResponseInterface,
  PDD_VOUCHER_VOUCHER_INFO_SEND,
  PDD_VOUCHER_VOUCHER_INFO_SEND_RESPONSE_KEY,
  PddVoucherVoucherInfoSendRequestInterface,
  PddVoucherVoucherInfoSendResponseInterface,
  PddVoucherVoucherInfoSendVoucherVoucherInfoSendResponseResponseInterface,
  PDD_EINVOICE_INFO_QUERY,
  PDD_EINVOICE_INFO_QUERY_RESPONSE_KEY,
  PddEinvoiceInfoQueryRequestInterface,
  PddEinvoiceInfoQueryResponseInterface,
  PddEinvoiceInfoQueryEinvoiceInfoQueryResponseResponseInterface,
  PDD_INVOICE_APPLICATION_QUERY,
  PDD_INVOICE_APPLICATION_QUERY_RESPONSE_KEY,
  PddInvoiceApplicationQueryRequestInterface,
  PddInvoiceApplicationQueryResponseInterface,
  PddInvoiceApplicationQueryInvoiceApplicationQueryResponseResponseInterface,
  PDD_INVOICE_DETAIL_INVALID,
  PDD_INVOICE_DETAIL_INVALID_RESPONSE_KEY,
  PddInvoiceDetailInvalidRequestInterface,
  PddInvoiceDetailInvalidResponseInterface,
  PddInvoiceDetailInvalidInvoiceDetailInvalidResponseResponseInterface,
  PDD_INVOICE_DETAIL_UPLOAD,
  PDD_INVOICE_DETAIL_UPLOAD_RESPONSE_KEY,
  PddInvoiceDetailUploadRequestInterface,
  PddInvoiceDetailUploadResponseInterface,
  PddInvoiceDetailUploadInvoiceDetailUploadResponseResponseInterface,
  PDD_MALL_CPS_PROTOCOL_STATUS_QUERY,
  PDD_MALL_CPS_PROTOCOL_STATUS_QUERY_RESPONSE_KEY,
  PddMallCpsProtocolStatusQueryRequestInterface,
  PddMallCpsProtocolStatusQueryResponseInterface,
  PddMallCpsProtocolStatusQueryMallCpsProtocolStatusQueryResponseResponseInterface,
  PDD_MALL_INFO_GET,
  PDD_MALL_INFO_GET_RESPONSE_KEY,
  PddMallInfoGetRequestInterface,
  PddMallInfoGetResponseInterface,
  PddMallInfoGetMallInfoGetResponseResponseInterface,
  PDD_TRACE_SOURCE_UPLOAD_CODE_INFO,
  PddTraceSourceUploadCodeInfoRequestInterface,
  PddTraceSourceUploadCodeInfoResponseInterface,
  PDD_TRACE_SOURCE_UPLOAD_PLAN_INFO,
  PddTraceSourceUploadPlanInfoRequestInterface,
  PddTraceSourceUploadPlanInfoResponseInterface,
  PDD_TRACE_SOURCE_QUERY_GOODS_INFO,
  PddTraceSourceQueryGoodsInfoRequestInterface,
  PddTraceSourceQueryGoodsInfoResponseInterface,
  PDD_OPEN_DECRYPT_BATCH,
  PDD_OPEN_DECRYPT_BATCH_RESPONSE_KEY,
  PddOpenDecryptBatchRequestInterface,
  PddOpenDecryptBatchResponseInterface,
  PddOpenDecryptBatchOpenDecryptBatchResponseResponseInterface,
  PDD_OPEN_DECRYPT_MASK_BATCH,
  PDD_OPEN_DECRYPT_MASK_BATCH_RESPONSE_KEY,
  PddOpenDecryptMaskBatchRequestInterface,
  PddOpenDecryptMaskBatchResponseInterface,
  PddOpenDecryptMaskBatchOpenDecryptMaskBatchResponseResponseInterface,
  PDD_OPEN_KMS_ENCRYPT_BATCH,
  PDD_OPEN_KMS_ENCRYPT_BATCH_RESPONSE_KEY,
  PddOpenKmsEncryptBatchRequestInterface,
  PddOpenKmsEncryptBatchResponseInterface,
  PddOpenKmsEncryptBatchOpenKmsEncryptBatchResponseResponseInterface,
  PDD_OPEN_KMS_SEARCH_BATCH,
  PDD_OPEN_KMS_SEARCH_BATCH_RESPONSE_KEY,
  PddOpenKmsSearchBatchRequestInterface,
  PddOpenKmsSearchBatchResponseInterface,
  PddOpenKmsSearchBatchOpenKmsSearchBatchResponseResponseInterface,
  PDD_OPEN_VIRTUAL_NUMBER_CHECK,
  PDD_OPEN_VIRTUAL_NUMBER_CHECK_RESPONSE_KEY,
  PddOpenVirtualNumberCheckRequestInterface,
  PddOpenVirtualNumberCheckResponseInterface,
  PddOpenVirtualNumberCheckOpenVirtualNumberCheckResponseResponseInterface,
  PDD_POP_AUTH_TOKEN_CREATE,
  PDD_POP_AUTH_TOKEN_CREATE_RESPONSE_KEY,
  PddPopAuthTokenCreateRequestInterface,
  PddPopAuthTokenCreateResponseInterface,
  PddPopAuthTokenCreatePopAuthTokenCreateResponseResponseInterface,
  PDD_POP_AUTH_TOKEN_REFRESH,
  PDD_POP_AUTH_TOKEN_REFRESH_RESPONSE_KEY,
  PddPopAuthTokenRefreshRequestInterface,
  PddPopAuthTokenRefreshResponseInterface,
  PddPopAuthTokenRefreshPopAuthTokenRefreshResponseResponseInterface,
  PDD_TIME_GET,
  PDD_TIME_GET_RESPONSE_KEY,
  PddTimeGetRequestInterface,
  PddTimeGetResponseInterface,
  PddTimeGetTimeGetResponseResponseInterface,
  PDD_EXPRESS_ADD_DEPOT,
  PddExpressAddDepotRequestInterface,
  PddExpressAddDepotResponseInterface,
  PDD_EXPRESS_CHANGE_DEPOT_INFO,
  PddExpressChangeDepotInfoRequestInterface,
  PddExpressChangeDepotInfoResponseInterface,
  PDD_EXPRESS_DEPOT_INFO_GET,
  PDD_EXPRESS_DEPOT_INFO_GET_RESPONSE_KEY,
  PddExpressDepotInfoGetRequestInterface,
  PddExpressDepotInfoGetResponseInterface,
  PddExpressDepotInfoGetOpenApiResponseResponseInterface,
  PDD_EXPRESS_DEPOT_LIST_GET,
  PDD_EXPRESS_DEPOT_LIST_GET_RESPONSE_KEY,
  PddExpressDepotListGetRequestInterface,
  PddExpressDepotListGetResponseInterface,
  PddExpressDepotListGetOpenApiResponseResponseInterface,
  PDD_EXPRESS_MALL_DEPOT_SIMPLE_GET,
  PDD_EXPRESS_MALL_DEPOT_SIMPLE_GET_RESPONSE_KEY,
  PddExpressMallDepotSimpleGetRequestInterface,
  PddExpressMallDepotSimpleGetResponseInterface,
  PddExpressMallDepotSimpleGetOpenApiResponseResponseInterface,
  PDD_EXPRESS_SEARCH_DEPOT,
  PDD_EXPRESS_SEARCH_DEPOT_RESPONSE_KEY,
  PddExpressSearchDepotRequestInterface,
  PddExpressSearchDepotResponseInterface,
  PddExpressSearchDepotOpenApiResponseResponseInterface,
  PDD_STOCK_DEPOT_PRIORITY_LIST,
  PDD_STOCK_DEPOT_PRIORITY_LIST_RESPONSE_KEY,
  PddStockDepotPriorityListRequestInterface,
  PddStockDepotPriorityListResponseInterface,
  PddStockDepotPriorityListOpenApiResponseResponseInterface,
  PDD_STOCK_DEPOT_PRIORITY_UPDATE,
  PddStockDepotPriorityUpdateRequestInterface,
  PddStockDepotPriorityUpdateResponseInterface,
  PDD_STOCK_GOODS_ID_TO_SKU_QUERY,
  PDD_STOCK_GOODS_ID_TO_SKU_QUERY_RESPONSE_KEY,
  PddStockGoodsIdToSkuQueryRequestInterface,
  PddStockGoodsIdToSkuQueryResponseInterface,
  PddStockGoodsIdToSkuQueryOpenApiResponseResponseInterface,
  PDD_STOCK_WARE_CREATE,
  PddStockWareCreateRequestInterface,
  PddStockWareCreateResponseInterface,
  PDD_STOCK_WARE_DELETE,
  PddStockWareDeleteRequestInterface,
  PddStockWareDeleteResponseInterface,
  PDD_STOCK_WARE_DETAIL_QUERY,
  PDD_STOCK_WARE_DETAIL_QUERY_RESPONSE_KEY,
  PddStockWareDetailQueryRequestInterface,
  PddStockWareDetailQueryResponseInterface,
  PddStockWareDetailQueryOpenApiResponseResponseInterface,
  PDD_STOCK_WARE_INFO_LIST,
  PDD_STOCK_WARE_INFO_LIST_RESPONSE_KEY,
  PddStockWareInfoListRequestInterface,
  PddStockWareInfoListResponseInterface,
  PddStockWareInfoListStockWareInfoListResponseResponseInterface,
  PDD_STOCK_WARE_LIST,
  PDD_STOCK_WARE_LIST_RESPONSE_KEY,
  PddStockWareListRequestInterface,
  PddStockWareListResponseInterface,
  PddStockWareListOpenApiResponseResponseInterface,
  PDD_STOCK_WARE_MOVE,
  PddStockWareMoveRequestInterface,
  PddStockWareMoveResponseInterface,
  PDD_STOCK_WARE_SKU_UPDATE,
  PddStockWareSkuUpdateRequestInterface,
  PddStockWareSkuUpdateResponseInterface,
  PDD_STOCK_WARE_UPDATE,
  PddStockWareUpdateRequestInterface,
  PddStockWareUpdateResponseInterface,
  PDD_STOCK_WARE_WAREHOUSE_QUERY,
  PddStockWareWarehouseQueryRequestInterface,
  PddStockWareWarehouseQueryResponseInterface,
  PDD_PMC_ACCRUE_QUERY,
  PDD_PMC_ACCRUE_QUERY_RESPONSE_KEY,
  PddPmcAccrueQueryRequestInterface,
  PddPmcAccrueQueryResponseInterface,
  PddPmcAccrueQueryPmcUserGetResponseResponseInterface,
  PDD_PMC_USER_CANCEL,
  PDD_PMC_USER_CANCEL_RESPONSE_KEY,
  PddPmcUserCancelRequestInterface,
  PddPmcUserCancelResponseInterface,
  PddPmcUserCancelTmcUserCancelResponseResponseInterface,
  PDD_PMC_USER_GET,
  PDD_PMC_USER_GET_RESPONSE_KEY,
  PddPmcUserGetRequestInterface,
  PddPmcUserGetResponseInterface,
  PddPmcUserGetPmcUserGetResponseResponseInterface,
  PDD_PMC_USER_PERMIT,
  PDD_PMC_USER_PERMIT_RESPONSE_KEY,
  PddPmcUserPermitRequestInterface,
  PddPmcUserPermitResponseInterface,
  PddPmcUserPermitPmcUserPermitResponseResponseInterface,
  PDD_CLOUDPRINT_CMDPRINT_RENDER,
  PDD_CLOUDPRINT_CMDPRINT_RENDER_RESPONSE_KEY,
  PddCloudprintCmdprintRenderRequestInterface,
  PddCloudprintCmdprintRenderResponseInterface,
  PddCloudprintCmdprintRenderCloudprintCmdprintRenderResponseResponseInterface,
  PDD_CLOUDPRINT_CUSTOMARES_GET,
  PDD_CLOUDPRINT_CUSTOMARES_GET_RESPONSE_KEY,
  PddCloudprintCustomaresGetRequestInterface,
  PddCloudprintCustomaresGetResponseInterface,
  PddCloudprintCustomaresGetPddCloudprintCustomaresGetResponseResponseInterface,
  PDD_CLOUDPRINT_PORTABLEPRINTER_GET,
  PDD_CLOUDPRINT_PORTABLEPRINTER_GET_RESPONSE_KEY,
  PddCloudprintPortableprinterGetRequestInterface,
  PddCloudprintPortableprinterGetResponseInterface,
  PddCloudprintPortableprinterGetPddCloudprintPortableprinterGetResponseResponseInterface,
  PDD_CLOUDPRINT_STDTEMPLATES_GET,
  PDD_CLOUDPRINT_STDTEMPLATES_GET_RESPONSE_KEY,
  PddCloudprintStdtemplatesGetRequestInterface,
  PddCloudprintStdtemplatesGetResponseInterface,
  PddCloudprintStdtemplatesGetPddCloudprintStdtemplatesGetResponseResponseInterface,
  PDD_WAYBILL_CANCEL,
  PDD_WAYBILL_CANCEL_RESPONSE_KEY,
  PddWaybillCancelRequestInterface,
  PddWaybillCancelResponseInterface,
  PddWaybillCancelPddWaybillCancelResponseResponseInterface,
  PDD_WAYBILL_GET,
  PDD_WAYBILL_GET_RESPONSE_KEY,
  PddWaybillGetRequestInterface,
  PddWaybillGetResponseInterface,
  PddWaybillGetPddWaybillGetResponseResponseInterface,
  PDD_WAYBILL_QUERY_BY_WAYBILLCODE,
  PDD_WAYBILL_QUERY_BY_WAYBILLCODE_RESPONSE_KEY,
  PddWaybillQueryByWaybillcodeRequestInterface,
  PddWaybillQueryByWaybillcodeResponseInterface,
  PddWaybillQueryByWaybillcodePddWaybillQueryByWaybillcodeResponseResponseInterface,
  PDD_WAYBILL_SEARCH,
  PDD_WAYBILL_SEARCH_RESPONSE_KEY,
  PddWaybillSearchRequestInterface,
  PddWaybillSearchResponseInterface,
  PddWaybillSearchPddWaybillSearchResponseResponseInterface,
  PDD_WAYBILL_UPDATE,
  PDD_WAYBILL_UPDATE_RESPONSE_KEY,
  PddWaybillUpdateRequestInterface,
  PddWaybillUpdateResponseInterface,
  PddWaybillUpdatePddWaybillUpdateResponseResponseInterface,
  PDD_FINANCE_BALANCE_DAILY_BILL_URL_GET,
  PDD_FINANCE_BALANCE_DAILY_BILL_URL_GET_RESPONSE_KEY,
  PddFinanceBalanceDailyBillUrlGetRequestInterface,
  PddFinanceBalanceDailyBillUrlGetResponseInterface,
  PddFinanceBalanceDailyBillUrlGetFinanceBalanceDailyBillUrlGetResponseResponseInterface,
  PDD_SERVICEMARKET_CONTRACT_SEARCH,
  PDD_SERVICEMARKET_CONTRACT_SEARCH_RESPONSE_KEY,
  PddServicemarketContractSearchRequestInterface,
  PddServicemarketContractSearchResponseInterface,
  PddServicemarketContractSearchServicemarketContractSearchResponseResponseInterface,
  PDD_SERVICEMARKET_SETTLEMENTBILL_GET,
  PDD_SERVICEMARKET_SETTLEMENTBILL_GET_RESPONSE_KEY,
  PddServicemarketSettlementbillGetRequestInterface,
  PddServicemarketSettlementbillGetResponseInterface,
  PddServicemarketSettlementbillGetSettlementBillSearchResponseResponseInterface,
  PDD_SERVICEMARKET_TRADELIST_GET,
  PDD_SERVICEMARKET_TRADELIST_GET_RESPONSE_KEY,
  PddServicemarketTradelistGetRequestInterface,
  PddServicemarketTradelistGetResponseInterface,
  PddServicemarketTradelistGetMallBalanceFlowSearchResponseResponseInterface,
  PDD_VAS_ORDER_SEARCH,
  PDD_VAS_ORDER_SEARCH_RESPONSE_KEY,
  PddVasOrderSearchRequestInterface,
  PddVasOrderSearchResponseInterface,
  PddVasOrderSearchVasOrderSearchResponseResponseInterface,
  PDD_OPEN_MSG_SERVICE_QUERY_MSG_RECORD,
  PddOpenMsgServiceQueryMsgRecordRequestInterface,
  PddOpenMsgServiceQueryMsgRecordResponseInterface,
  PDD_OPEN_MSG_SERVICE_SEND_BATCH_MSG,
  PddOpenMsgServiceSendBatchMsgRequestInterface,
  PddOpenMsgServiceSendBatchMsgResponseInterface,
  PDD_OPEN_MSG_SERVICE_SEND_EXPRESS_MSG,
  PddOpenMsgServiceSendExpressMsgRequestInterface,
  PddOpenMsgServiceSendExpressMsgResponseInterface,
  PDD_OPEN_MSG_SERVICE_SEND_MSG,
  PddOpenMsgServiceSendMsgRequestInterface,
  PddOpenMsgServiceSendMsgResponseInterface,
  PDD_SMS_DETAILBILL_PUSH,
  PddSmsDetailbillPushRequestInterface,
  PddSmsDetailbillPushResponseInterface,
  PDD_SMS_VENDOR_COMPLAINT_CREATE,
  PddSmsVendorComplaintCreateRequestInterface,
  PddSmsVendorComplaintCreateResponseInterface,
  PDD_AD_API_ADVERTISER_OPEN_ACCOUNT,
  PddAdApiAdvertiserOpenAccountRequestInterface,
  PddAdApiAdvertiserOpenAccountResponseInterface,
  PDD_AD_API_ADVERTISER_QUERY_ACCOUNT_BALANCE,
  PddAdApiAdvertiserQueryAccountBalanceRequestInterface,
  PddAdApiAdvertiserQueryAccountBalanceResponseInterface,
  PDD_AD_API_ADVERTISER_QUERY_ACCOUNT_INFO,
  PddAdApiAdvertiserQueryAccountInfoRequestInterface,
  PddAdApiAdvertiserQueryAccountInfoResponseInterface,
  PDD_AD_API_ADVERTISER_QUERY_DETAIL,
  PddAdApiAdvertiserQueryDetailRequestInterface,
  PddAdApiAdvertiserQueryDetailResponseInterface,
  PDD_AD_API_GOODS_QUERY_GALLERY_IMAGES,
  PddAdApiGoodsQueryGalleryImagesRequestInterface,
  PddAdApiGoodsQueryGalleryImagesResponseInterface,
  PDD_AD_API_GOODS_QUERY_LONG_IMAGES,
  PddAdApiGoodsQueryLongImagesRequestInterface,
  PddAdApiGoodsQueryLongImagesResponseInterface,
  PDD_AD_API_GOODS_QUERY_PAGE,
  PddAdApiGoodsQueryPageRequestInterface,
  PddAdApiGoodsQueryPageResponseInterface,
  PDD_AD_API_KEYWORD_CREATE,
  PddAdApiKeywordCreateRequestInterface,
  PddAdApiKeywordCreateResponseInterface,
  PDD_AD_API_KEYWORD_DELETE,
  PddAdApiKeywordDeleteRequestInterface,
  PddAdApiKeywordDeleteResponseInterface,
  PDD_AD_API_KEYWORD_QUERY_LIST,
  PddAdApiKeywordQueryListRequestInterface,
  PddAdApiKeywordQueryListResponseInterface,
  PDD_AD_API_KEYWORD_RECOMMEND_GET,
  PddAdApiKeywordRecommendGetRequestInterface,
  PddAdApiKeywordRecommendGetResponseInterface,
  PDD_AD_API_KEYWORD_RELEVANCE_GET,
  PddAdApiKeywordRelevanceGetRequestInterface,
  PddAdApiKeywordRelevanceGetResponseInterface,
  PDD_AD_API_KEYWORD_UPDATE,
  PddAdApiKeywordUpdateRequestInterface,
  PddAdApiKeywordUpdateResponseInterface,
  PDD_AD_API_PLAN_CREATE,
  PddAdApiPlanCreateRequestInterface,
  PddAdApiPlanCreateResponseInterface,
  PDD_AD_API_PLAN_DELETE,
  PddAdApiPlanDeleteRequestInterface,
  PddAdApiPlanDeleteResponseInterface,
  PDD_AD_API_PLAN_QUERY_CAN_CREATE_AD_PLAN,
  PddAdApiPlanQueryCanCreateAdPlanRequestInterface,
  PddAdApiPlanQueryCanCreateAdPlanResponseInterface,
  PDD_AD_API_PLAN_QUERY_CAN_UPDATE_MAX_COST,
  PddAdApiPlanQueryCanUpdateMaxCostRequestInterface,
  PddAdApiPlanQueryCanUpdateMaxCostResponseInterface,
  PDD_AD_API_PLAN_QUERY_LIST,
  PddAdApiPlanQueryListRequestInterface,
  PddAdApiPlanQueryListResponseInterface,
  PDD_AD_API_PLAN_UPDATE_DATA_OPERATE_STATUS,
  PddAdApiPlanUpdateDataOperateStatusRequestInterface,
  PddAdApiPlanUpdateDataOperateStatusResponseInterface,
  PDD_AD_API_PLAN_UPDATE_MAX_COST,
  PddAdApiPlanUpdateMaxCostRequestInterface,
  PddAdApiPlanUpdateMaxCostResponseInterface,
  PDD_AD_API_PLAN_UPDATE_PLAN_DISCOUNT,
  PddAdApiPlanUpdatePlanDiscountRequestInterface,
  PddAdApiPlanUpdatePlanDiscountResponseInterface,
  PDD_AD_API_PLAN_UPDATE_PLAN_NAME,
  PddAdApiPlanUpdatePlanNameRequestInterface,
  PddAdApiPlanUpdatePlanNameResponseInterface,
  PDD_AD_API_PLAN_UPDATE_PLAN_TO_OCPC,
  PddAdApiPlanUpdatePlanToOcpcRequestInterface,
  PddAdApiPlanUpdatePlanToOcpcResponseInterface,
  PDD_AD_API_REPORT_DAILY_REPORT_QUERY,
  PddAdApiReportDailyReportQueryRequestInterface,
  PddAdApiReportDailyReportQueryResponseInterface,
  PDD_AD_API_REPORT_ENTITY_REPORT_QUERY,
  PddAdApiReportEntityReportQueryRequestInterface,
  PddAdApiReportEntityReportQueryResponseInterface,
  PDD_AD_API_REPORT_HOURLY_REPORT_QUERY,
  PddAdApiReportHourlyReportQueryRequestInterface,
  PddAdApiReportHourlyReportQueryResponseInterface,
  PDD_AD_API_UNIT_BID_DELETE,
  PddAdApiUnitBidDeleteRequestInterface,
  PddAdApiUnitBidDeleteResponseInterface,
  PDD_AD_API_UNIT_BID_QUERY_BASE_LOCATION_PROFILE,
  PddAdApiUnitBidQueryBaseLocationProfileRequestInterface,
  PddAdApiUnitBidQueryBaseLocationProfileResponseInterface,
  PDD_AD_API_UNIT_BID_QUERY_BASE_TARGET_PROFILE,
  PddAdApiUnitBidQueryBaseTargetProfileRequestInterface,
  PddAdApiUnitBidQueryBaseTargetProfileResponseInterface,
  PDD_AD_API_UNIT_BID_QUERY_LIST,
  PddAdApiUnitBidQueryListRequestInterface,
  PddAdApiUnitBidQueryListResponseInterface,
  PDD_AD_API_UNIT_BID_QUERY_TARGETING_TAG_LIST,
  PddAdApiUnitBidQueryTargetingTagListRequestInterface,
  PddAdApiUnitBidQueryTargetingTagListResponseInterface,
  PDD_AD_API_UNIT_BID_SYNC,
  PddAdApiUnitBidSyncRequestInterface,
  PddAdApiUnitBidSyncResponseInterface,
  PDD_AD_API_UNIT_BID_UPDATE,
  PddAdApiUnitBidUpdateRequestInterface,
  PddAdApiUnitBidUpdateResponseInterface,
  PDD_AD_API_UNIT_CREATE,
  PddAdApiUnitCreateRequestInterface,
  PddAdApiUnitCreateResponseInterface,
  PDD_AD_API_UNIT_CREATIVE_CHECK_TITLE,
  PddAdApiUnitCreativeCheckTitleRequestInterface,
  PddAdApiUnitCreativeCheckTitleResponseInterface,
  PDD_AD_API_UNIT_CREATIVE_CREATE,
  PddAdApiUnitCreativeCreateRequestInterface,
  PddAdApiUnitCreativeCreateResponseInterface,
  PDD_AD_API_UNIT_CREATIVE_DELETE,
  PddAdApiUnitCreativeDeleteRequestInterface,
  PddAdApiUnitCreativeDeleteResponseInterface,
  PDD_AD_API_UNIT_CREATIVE_DISTRIBUTE_FLOW_RATE,
  PddAdApiUnitCreativeDistributeFlowRateRequestInterface,
  PddAdApiUnitCreativeDistributeFlowRateResponseInterface,
  PDD_AD_API_UNIT_CREATIVE_QUERY_FLOW_RATE,
  PddAdApiUnitCreativeQueryFlowRateRequestInterface,
  PddAdApiUnitCreativeQueryFlowRateResponseInterface,
  PDD_AD_API_UNIT_CREATIVE_QUERY_LIST,
  PddAdApiUnitCreativeQueryListRequestInterface,
  PddAdApiUnitCreativeQueryListResponseInterface,
  PDD_AD_API_UNIT_CREATIVE_UPDATE_CONTENT,
  PddAdApiUnitCreativeUpdateContentRequestInterface,
  PddAdApiUnitCreativeUpdateContentResponseInterface,
  PDD_AD_API_UNIT_CREATIVE_UPDATE_DATA_OPERATE_STATUS,
  PddAdApiUnitCreativeUpdateDataOperateStatusRequestInterface,
  PddAdApiUnitCreativeUpdateDataOperateStatusResponseInterface,
  PDD_AD_API_UNIT_CREATIVE_UPDATE_SMART_CREATIVE,
  PddAdApiUnitCreativeUpdateSmartCreativeRequestInterface,
  PddAdApiUnitCreativeUpdateSmartCreativeResponseInterface,
  PDD_AD_API_UNIT_DELETE,
  PddAdApiUnitDeleteRequestInterface,
  PddAdApiUnitDeleteResponseInterface,
  PDD_AD_API_UNIT_QUERY_LIST,
  PddAdApiUnitQueryListRequestInterface,
  PddAdApiUnitQueryListResponseInterface,
  PDD_AD_API_UNIT_UPDATE_DATA_OPERATE_STATUS,
  PddAdApiUnitUpdateDataOperateStatusRequestInterface,
  PddAdApiUnitUpdateDataOperateStatusResponseInterface,
  PDD_AD_API_UNIT_UPDATE_OPTIMIZATION_MESSAGE,
  PddAdApiUnitUpdateOptimizationMessageRequestInterface,
  PddAdApiUnitUpdateOptimizationMessageResponseInterface,
  PDD_AD_API_UNIT_UPDATE_UNIT_BID,
  PddAdApiUnitUpdateUnitBidRequestInterface,
  PddAdApiUnitUpdateUnitBidResponseInterface,
  PDD_AD_API_UNIT_UPDATE_UNIT_NAME,
  PddAdApiUnitUpdateUnitNameRequestInterface,
  PddAdApiUnitUpdateUnitNameResponseInterface,
  PDD_FDS_ORDER_GET,
  PDD_FDS_ORDER_GET_RESPONSE_KEY,
  PddFdsOrderGetRequestInterface,
  PddFdsOrderGetResponseInterface,
  PddFdsOrderGetPddFdsOrderGetResponseResponseInterface,
  PDD_FDS_ORDER_LIST_GET,
  PDD_FDS_ORDER_LIST_GET_RESPONSE_KEY,
  PddFdsOrderListGetRequestInterface,
  PddFdsOrderListGetResponseInterface,
  PddFdsOrderListGetPddFdsOrderListGetResponseResponseInterface,
  PDD_FDS_ROLE_GET,
  PDD_FDS_ROLE_GET_RESPONSE_KEY,
  PddFdsRoleGetRequestInterface,
  PddFdsRoleGetResponseInterface,
  PddFdsRoleGetPddFdsRoleGetResponseResponseInterface,
  PDD_FDS_WAYBILL_CANCEL,
  PDD_FDS_WAYBILL_CANCEL_RESPONSE_KEY,
  PddFdsWaybillCancelRequestInterface,
  PddFdsWaybillCancelResponseInterface,
  PddFdsWaybillCancelPddFdsWaybillCancelResponseResponseInterface,
  PDD_FDS_WAYBILL_GET,
  PDD_FDS_WAYBILL_GET_RESPONSE_KEY,
  PddFdsWaybillGetRequestInterface,
  PddFdsWaybillGetResponseInterface,
  PddFdsWaybillGetPddFdsWaybillGetResponseResponseInterface,
  PDD_FDS_WAYBILL_RETURN,
  PDD_FDS_WAYBILL_RETURN_RESPONSE_KEY,
  PddFdsWaybillReturnRequestInterface,
  PddFdsWaybillReturnResponseInterface,
  PddFdsWaybillReturnPddFdsWaybillReturnResponseResponseInterface,
  PDD_FDS_WAYBILL_RETURN_SLAVE,
  PDD_FDS_WAYBILL_RETURN_SLAVE_RESPONSE_KEY,
  PddFdsWaybillReturnSlaveRequestInterface,
  PddFdsWaybillReturnSlaveResponseInterface,
  PddFdsWaybillReturnSlavePddFdsWaybillReturnSlaveResponseResponseInterface,
  PDD_MALL_INFO_GROUP_ADD_POST,
  PddMallInfoGroupAddPostRequestInterface,
  PddMallInfoGroupAddPostResponseInterface,
  PDD_MALL_INFO_GROUP_ADD_STORE_POST,
  PDD_MALL_INFO_GROUP_ADD_STORE_POST_RESPONSE_KEY,
  PddMallInfoGroupAddStorePostRequestInterface,
  PddMallInfoGroupAddStorePostResponseInterface,
  PddMallInfoGroupAddStorePostMallInfoGroupAddStorePostResponseResponseInterface,
  PDD_MALL_INFO_GROUP_DELETE_POST,
  PddMallInfoGroupDeletePostRequestInterface,
  PddMallInfoGroupDeletePostResponseInterface,
  PDD_MALL_INFO_GROUP_LIST_STORE_GET,
  PDD_MALL_INFO_GROUP_LIST_STORE_GET_RESPONSE_KEY,
  PddMallInfoGroupListStoreGetRequestInterface,
  PddMallInfoGroupListStoreGetResponseInterface,
  PddMallInfoGroupListStoreGetMallInfoGroupListStoreGetResponseResponseInterface,
  PDD_MALL_INFO_GROUP_QUERY_POST,
  PddMallInfoGroupQueryPostRequestInterface,
  PddMallInfoGroupQueryPostResponseInterface,
  PDD_MALL_INFO_GROUP_REMOVE_STORE_GET,
  PDD_MALL_INFO_GROUP_REMOVE_STORE_GET_RESPONSE_KEY,
  PddMallInfoGroupRemoveStoreGetRequestInterface,
  PddMallInfoGroupRemoveStoreGetResponseInterface,
  PddMallInfoGroupRemoveStoreGetMallInfoGroupRemoveStoreGetResponseResponseInterface,
  PDD_MALL_INFO_GROUP_UPDATE_POST,
  PddMallInfoGroupUpdatePostRequestInterface,
  PddMallInfoGroupUpdatePostResponseInterface,
  PDD_MALL_INFO_STORE_CREATE_POST,
  PDD_MALL_INFO_STORE_CREATE_POST_RESPONSE_KEY,
  PddMallInfoStoreCreatePostRequestInterface,
  PddMallInfoStoreCreatePostResponseInterface,
  PddMallInfoStoreCreatePostMallInfoStoreCreatePostResponseResponseInterface,
  PDD_MALL_INFO_STORE_CREATE_POST_NOPOI,
  PddMallInfoStoreCreatePostNopoiRequestInterface,
  PddMallInfoStoreCreatePostNopoiResponseInterface,
  PDD_MALL_INFO_STORE_DELETE_POST,
  PDD_MALL_INFO_STORE_DELETE_POST_RESPONSE_KEY,
  PddMallInfoStoreDeletePostRequestInterface,
  PddMallInfoStoreDeletePostResponseInterface,
  PddMallInfoStoreDeletePostMallInfoStoreDeletePostResponseResponseInterface,
  PDD_MALL_INFO_STORE_GET,
  PddMallInfoStoreGetRequestInterface,
  PddMallInfoStoreGetResponseInterface,
  PDD_MALL_INFO_STORE_UPDATE_POST,
  PDD_MALL_INFO_STORE_UPDATE_POST_RESPONSE_KEY,
  PddMallInfoStoreUpdatePostRequestInterface,
  PddMallInfoStoreUpdatePostResponseInterface,
  PddMallInfoStoreUpdatePostMallInfoStoreUpdatePostResponseResponseInterface,
  PDD_MALL_INFO_STORE_UPDATE_POST_NOPOI,
  PddMallInfoStoreUpdatePostNopoiRequestInterface,
  PddMallInfoStoreUpdatePostNopoiResponseInterface,
  PDD_QRPAY_PAYEE_REGISTER,
  PDD_QRPAY_PAYEE_REGISTER_RESPONSE_KEY,
  PddQrpayPayeeRegisterRequestInterface,
  PddQrpayPayeeRegisterResponseInterface,
  PddQrpayPayeeRegisterQrpayPayeeRegisterResponseResponseInterface,
  PDD_MALL_INFO_BONDED_WAREHOUSE_GET,
  PDD_MALL_INFO_BONDED_WAREHOUSE_GET_RESPONSE_KEY,
  PddMallInfoBondedWarehouseGetRequestInterface,
  PddMallInfoBondedWarehouseGetResponseInterface,
  PddMallInfoBondedWarehouseGetMallInfoBondedWarehouseGetResponseResponseInterface,
  PDD_OVERSEA_CLEARANCE_GET,
  PDD_OVERSEA_CLEARANCE_GET_RESPONSE_KEY,
  PddOverseaClearanceGetRequestInterface,
  PddOverseaClearanceGetResponseInterface,
  PddOverseaClearanceGetClearanceResponseResponseInterface,
  PDD_OVERSEA_DECLARATION_FAIL_NOTIFY,
  PDD_OVERSEA_DECLARATION_FAIL_NOTIFY_RESPONSE_KEY,
  PddOverseaDeclarationFailNotifyRequestInterface,
  PddOverseaDeclarationFailNotifyResponseInterface,
  PddOverseaDeclarationFailNotifyNotifyExceededResponseResponseInterface,
  PDD_TICKET_AREACODE_GET,
  PddTicketAreacodeGetRequestInterface,
  PddTicketAreacodeGetResponseInterface,
  PDD_TICKET_GOODS_QUERY,
  PDD_TICKET_GOODS_QUERY_RESPONSE_KEY,
  PddTicketGoodsQueryRequestInterface,
  PddTicketGoodsQueryResponseInterface,
  PddTicketGoodsQueryGoodsDetailGetResponseResponseInterface,
  PDD_TICKET_GOODS_UPLOAD,
  PDD_TICKET_GOODS_UPLOAD_RESPONSE_KEY,
  PddTicketGoodsUploadRequestInterface,
  PddTicketGoodsUploadResponseInterface,
  PddTicketGoodsUploadGoodsUploadResponseResponseInterface,
  PDD_TICKET_ORDER_CREATE_NOTIFYCATION,
  PddTicketOrderCreateNotifycationRequestInterface,
  PddTicketOrderCreateNotifycationResponseInterface,
  PDD_TICKET_ORDER_REFUND_NOTIFYCATION,
  PddTicketOrderRefundNotifycationRequestInterface,
  PddTicketOrderRefundNotifycationResponseInterface,
  PDD_TICKET_SCENIC_GET,
  PddTicketScenicGetRequestInterface,
  PddTicketScenicGetResponseInterface,
  PDD_TICKET_SKU_RULE_ADD,
  PddTicketSkuRuleAddRequestInterface,
  PddTicketSkuRuleAddResponseInterface,
  PDD_TICKET_SKU_RULE_EDIT,
  PddTicketSkuRuleEditRequestInterface,
  PddTicketSkuRuleEditResponseInterface,
  PDD_TICKET_SKU_RULE_GET,
  PddTicketSkuRuleGetRequestInterface,
  PddTicketSkuRuleGetResponseInterface,
  PDD_TICKET_VERIFICATION_NOTIFYCATION,
  PddTicketVerificationNotifycationRequestInterface,
  PddTicketVerificationNotifycationResponseInterface,
  PDD_CLOUD_ISV_PAGE_CODE,
  PddCloudIsvPageCodeRequestInterface,
  PddCloudIsvPageCodeResponseInterface,
  PDD_CLOUD_SECURITY_EVENT_TRACKING_BATCH_ORDER,
  PddCloudSecurityEventTrackingBatchOrderRequestInterface,
  PddCloudSecurityEventTrackingBatchOrderResponseInterface,
  PDD_CLOUD_SECURITY_EVENT_TRACKING_LOGIN,
  PddCloudSecurityEventTrackingLoginRequestInterface,
  PddCloudSecurityEventTrackingLoginResponseInterface,
  PDD_DDY_PDP_USER_ADD,
  PDD_DDY_PDP_USER_ADD_RESPONSE_KEY,
  PddDdyPdpUserAddRequestInterface,
  PddDdyPdpUserAddResponseInterface,
  PddDdyPdpUserAddDdyPdpUserAddResponseResponseInterface,
  PDD_DDY_PDP_USER_DELETE,
  PDD_DDY_PDP_USER_DELETE_RESPONSE_KEY,
  PddDdyPdpUserDeleteRequestInterface,
  PddDdyPdpUserDeleteResponseInterface,
  PddDdyPdpUserDeleteDdyPdpUsersDeleteResponseResponseInterface,
  PDD_DDY_PDP_USERS_GET,
  PDD_DDY_PDP_USERS_GET_RESPONSE_KEY,
  PddDdyPdpUsersGetRequestInterface,
  PddDdyPdpUsersGetResponseInterface,
  PddDdyPdpUsersGetDdyPdpUsersGetResponseResponseInterface,
  PDD_CLOUD_DTS_ORDER_LIST_INCREMENT_GET,
  PDD_CLOUD_DTS_ORDER_LIST_INCREMENT_GET_RESPONSE_KEY,
  PddCloudDtsOrderListIncrementGetRequestInterface,
  PddCloudDtsOrderListIncrementGetResponseInterface,
  PddCloudDtsOrderListIncrementGetOrderSnIncrementGetResponseResponseInterface,
  PDD_CLOUD_LOGISTICS_ONLINE_SEND,
  PDD_CLOUD_LOGISTICS_ONLINE_SEND_RESPONSE_KEY,
  PddCloudLogisticsOnlineSendRequestInterface,
  PddCloudLogisticsOnlineSendResponseInterface,
  PddCloudLogisticsOnlineSendLogisticsOnlineSendResponseResponseInterface,
  PDD_CLOUD_WAYBILL_GET,
  PDD_CLOUD_WAYBILL_GET_RESPONSE_KEY,
  PddCloudWaybillGetRequestInterface,
  PddCloudWaybillGetResponseInterface,
  PddCloudWaybillGetPddWaybillGetResponseResponseInterface,
  PDD_CLOUD_WAYBILL_UPDATE,
  PDD_CLOUD_WAYBILL_UPDATE_RESPONSE_KEY,
  PddCloudWaybillUpdateRequestInterface,
  PddCloudWaybillUpdateResponseInterface,
  PddCloudWaybillUpdatePddWaybillUpdateResponseResponseInterface,
  PDD_CLOUD_WEBSESSION_SEND,
  PDD_CLOUD_WEBSESSION_SEND_RESPONSE_KEY,
  PddCloudWebsessionSendRequestInterface,
  PddCloudWebsessionSendResponseInterface,
  PddCloudWebsessionSendSendResponseResponseInterface,
  PDD_CLOUD_WMS_ORDER_SEND,
  PDD_CLOUD_WMS_ORDER_SEND_RESPONSE_KEY,
  PddCloudWmsOrderSendRequestInterface,
  PddCloudWmsOrderSendResponseInterface,
  PddCloudWmsOrderSendSendResponseResponseInterface,
  PddResponseTypeAndRequestTypeMapping,
  PddNeedAccessTokenTypeCollections,
  PddApiLimiterMapping,
};
export interface PddCollectRequestInterface {
  [PDD_LOGISTICS_ADDRESS_GET]: PddLogisticsAddressGetRequestInterface;
  [PDD_LOGISTICS_AVAILABLE_COMPANY_RECOMMEND]: PddLogisticsAvailableCompanyRecommendRequestInterface;
  [PDD_LOGISTICS_COMPANIES_GET]: PddLogisticsCompaniesGetRequestInterface;
  [PDD_LOGISTICS_ISV_TRACE_NOTIFY_SUB]: PddLogisticsIsvTraceNotifySubRequestInterface;
  [PDD_LOGISTICS_ONLINE_SEND]: PddLogisticsOnlineSendRequestInterface;
  [PDD_LOGISTICS_ORDERTRACE_GET]: PddLogisticsOrdertraceGetRequestInterface;
  [PDD_ERP_ORDER_SYNC]: PddErpOrderSyncRequestInterface;
  [PDD_ORDER_BASIC_LIST_GET]: PddOrderBasicListGetRequestInterface;
  [PDD_ORDER_INFORMATION_GET]: PddOrderInformationGetRequestInterface;
  [PDD_ORDER_LIST_GET]: PddOrderListGetRequestInterface;
  [PDD_ORDER_NOTE_UPDATE]: PddOrderNoteUpdateRequestInterface;
  [PDD_ORDER_NUMBER_LIST_INCREMENT_GET]: PddOrderNumberListIncrementGetRequestInterface;
  [PDD_ORDER_PROMISE_INFO_GET]: PddOrderPromiseInfoGetRequestInterface;
  [PDD_ORDER_STATUS_GET]: PddOrderStatusGetRequestInterface;
  [PDD_ORDER_UPDATE_ADDRESS]: PddOrderUpdateAddressRequestInterface;
  [PDD_ORDER_UPLOAD_EXTRA_LOGISTICS]: PddOrderUploadExtraLogisticsRequestInterface;
  [PDD_ORDER_UPLOAD_RELATION_LOGISTICS]: PddOrderUploadRelationLogisticsRequestInterface;
  [PDD_ORDER_VIRTUAL_INFORMATION_GET]: PddOrderVirtualInformationGetRequestInterface;
  [PDD_NEXTONE_LOGISTICS_WAREHOUSE_UPDATE]: PddNextoneLogisticsWarehouseUpdateRequestInterface;
  [PDD_RDC_PDDGENIUS_SENDGOODS_CANCEL]: PddRdcPddgeniusSendgoodsCancelRequestInterface;
  [PDD_REFUND_ADDRESS_LIST_GET]: PddRefundAddressListGetRequestInterface;
  [PDD_REFUND_AGREE]: PddRefundAgreeRequestInterface;
  [PDD_REFUND_EXCHANGE_SHIPPING]: PddRefundExchangeShippingRequestInterface;
  [PDD_REFUND_INFORMATION_GET]: PddRefundInformationGetRequestInterface;
  [PDD_REFUND_LIST_INCREMENT_GET]: PddRefundListIncrementGetRequestInterface;
  [PDD_REFUND_RETURNGOODS_AGREE]: PddRefundReturngoodsAgreeRequestInterface;
  [PDD_REFUND_STATUS_CHECK]: PddRefundStatusCheckRequestInterface;
  [PDD_VIRTUAL_GAME_SERVER_QUERY]: PddVirtualGameServerQueryRequestInterface;
  [PDD_VIRTUAL_MOBILE_CHARGE_NOTIFY]: PddVirtualMobileChargeNotifyRequestInterface;
  [PDD_DELETE_DRAFT_COMMIT]: PddDeleteDraftCommitRequestInterface;
  [PDD_DELETE_GOODS_COMMIT]: PddDeleteGoodsCommitRequestInterface;
  [PDD_GOODS_ADD]: PddGoodsAddRequestInterface;
  [PDD_GOODS_ADVICE_PRICE_GET]: PddGoodsAdvicePriceGetRequestInterface;
  [PDD_GOODS_AUTHORIZATION_CATS]: PddGoodsAuthorizationCatsRequestInterface;
  [PDD_GOODS_CAT_RULE_GET]: PddGoodsCatRuleGetRequestInterface;
  [PDD_GOODS_CAT_TEMPLATE_GET]: PddGoodsCatTemplateGetRequestInterface;
  [PDD_GOODS_CATS_GET]: PddGoodsCatsGetRequestInterface;
  [PDD_GOODS_CHILD_SKU_EDIT]: PddGoodsChildSkuEditRequestInterface;
  [PDD_GOODS_COMMIT_DETAIL_GET]: PddGoodsCommitDetailGetRequestInterface;
  [PDD_GOODS_COMMIT_LIST_GET]: PddGoodsCommitListGetRequestInterface;
  [PDD_GOODS_COMMIT_STATUS_GET]: PddGoodsCommitStatusGetRequestInterface;
  [PDD_GOODS_COUNTRY_GET]: PddGoodsCountryGetRequestInterface;
  [PDD_GOODS_CPS_MALL_UNIT_CHANGE]: PddGoodsCpsMallUnitChangeRequestInterface;
  [PDD_GOODS_CPS_MALL_UNIT_CREATE]: PddGoodsCpsMallUnitCreateRequestInterface;
  [PDD_GOODS_CPS_MALL_UNIT_PAUSE]: PddGoodsCpsMallUnitPauseRequestInterface;
  [PDD_GOODS_CPS_MALL_UNIT_QUERY]: PddGoodsCpsMallUnitQueryRequestInterface;
  [PDD_GOODS_CPS_MALL_UNIT_RESUME]: PddGoodsCpsMallUnitResumeRequestInterface;
  [PDD_GOODS_CPS_UNIT_CHANGE]: PddGoodsCpsUnitChangeRequestInterface;
  [PDD_GOODS_CPS_UNIT_CREATE]: PddGoodsCpsUnitCreateRequestInterface;
  [PDD_GOODS_CPS_UNIT_DELETE]: PddGoodsCpsUnitDeleteRequestInterface;
  [PDD_GOODS_CPS_UNIT_QUERY]: PddGoodsCpsUnitQueryRequestInterface;
  [PDD_GOODS_DETAIL_GET]: PddGoodsDetailGetRequestInterface;
  [PDD_GOODS_EDIT_GOODS_COMMIT]: PddGoodsEditGoodsCommitRequestInterface;
  [PDD_GOODS_FILE_INFO_GET]: PddGoodsFileInfoGetRequestInterface;
  [PDD_GOODS_FILESPACE_IMAGE_UPLOAD]: PddGoodsFilespaceImageUploadRequestInterface;
  [PDD_GOODS_IMAGE_UPLOAD]: PddGoodsImageUploadRequestInterface;
  [PDD_GOODS_IMG_UPLOAD]: PddGoodsImgUploadRequestInterface;
  [PDD_GOODS_INFORMATION_GET]: PddGoodsInformationGetRequestInterface;
  [PDD_GOODS_INFORMATION_UPDATE]: PddGoodsInformationUpdateRequestInterface;
  [PDD_GOODS_LATEST_COMMIT_STATUS_GET]: PddGoodsLatestCommitStatusGetRequestInterface;
  [PDD_GOODS_LIST_GET]: PddGoodsListGetRequestInterface;
  [PDD_GOODS_LOGISTICS_SER_TEMPLATE_CREATE]: PddGoodsLogisticsSerTemplateCreateRequestInterface;
  [PDD_GOODS_LOGISTICS_SER_TEMPLATE_DELETE]: PddGoodsLogisticsSerTemplateDeleteRequestInterface;
  [PDD_GOODS_LOGISTICS_SER_TEMPLATE_DETAIL]: PddGoodsLogisticsSerTemplateDetailRequestInterface;
  [PDD_GOODS_LOGISTICS_SER_TEMPLATE_LIST]: PddGoodsLogisticsSerTemplateListRequestInterface;
  [PDD_GOODS_LOGISTICS_SER_TEMPLATE_UPDATE]: PddGoodsLogisticsSerTemplateUpdateRequestInterface;
  [PDD_GOODS_LOGISTICS_TEMPLATE_CREATE]: PddGoodsLogisticsTemplateCreateRequestInterface;
  [PDD_GOODS_LOGISTICS_TEMPLATE_GET]: PddGoodsLogisticsTemplateGetRequestInterface;
  [PDD_GOODS_MATERIAL_CREATE]: PddGoodsMaterialCreateRequestInterface;
  [PDD_GOODS_MATERIAL_DELETE]: PddGoodsMaterialDeleteRequestInterface;
  [PDD_GOODS_MATERIAL_QUERY]: PddGoodsMaterialQueryRequestInterface;
  [PDD_GOODS_OPT_GET]: PddGoodsOptGetRequestInterface;
  [PDD_GOODS_OUT_PROPERTY_MAPPING_GET]: PddGoodsOutPropertyMappingGetRequestInterface;
  [PDD_GOODS_OUTER_CAT_MAPPING_GET]: PddGoodsOuterCatMappingGetRequestInterface;
  [PDD_GOODS_PRICE_CHECK]: PddGoodsPriceCheckRequestInterface;
  [PDD_GOODS_QUANTITY_UPDATE]: PddGoodsQuantityUpdateRequestInterface;
  [PDD_GOODS_SALE_STATUS_SET]: PddGoodsSaleStatusSetRequestInterface;
  [PDD_GOODS_SIZESPEC_CLASS_GET]: PddGoodsSizespecClassGetRequestInterface;
  [PDD_GOODS_SIZESPEC_META_GET]: PddGoodsSizespecMetaGetRequestInterface;
  [PDD_GOODS_SIZESPEC_TEMPLATE_ADD]: PddGoodsSizespecTemplateAddRequestInterface;
  [PDD_GOODS_SIZESPEC_TEMPLATE_DELETE]: PddGoodsSizespecTemplateDeleteRequestInterface;
  [PDD_GOODS_SIZESPEC_TEMPLATE_GET]: PddGoodsSizespecTemplateGetRequestInterface;
  [PDD_GOODS_SIZESPEC_TEMPLATE_UPDATE]: PddGoodsSizespecTemplateUpdateRequestInterface;
  [PDD_GOODS_SIZESPEC_TEMPLATES_GET]: PddGoodsSizespecTemplatesGetRequestInterface;
  [PDD_GOODS_SKU_PRICE_UPDATE]: PddGoodsSkuPriceUpdateRequestInterface;
  [PDD_GOODS_SKUS_GET]: PddGoodsSkusGetRequestInterface;
  [PDD_GOODS_SPEC_GET]: PddGoodsSpecGetRequestInterface;
  [PDD_GOODS_SPEC_ID_GET]: PddGoodsSpecIdGetRequestInterface;
  [PDD_GOODS_SPU_GET]: PddGoodsSpuGetRequestInterface;
  [PDD_GOODS_SPU_SEARCH]: PddGoodsSpuSearchRequestInterface;
  [PDD_GOODS_SUBMIT_GOODS_COMMIT]: PddGoodsSubmitGoodsCommitRequestInterface;
  [PDD_GOODS_TEMPLATE_PROPERTY_VALUE_SEARCH]: PddGoodsTemplatePropertyValueSearchRequestInterface;
  [PDD_GOOODS_SKU_MEASUREMENT_LIST]: PddGooodsSkuMeasurementListRequestInterface;
  [PDD_ONE_EXPRESS_COST_TEMPLATE]: PddOneExpressCostTemplateRequestInterface;
  [PDD_DDK_GOODS_PID_GENERATE]: PddDdkGoodsPidGenerateRequestInterface;
  [PDD_DDK_CASHGIFT_STATUS_UPDATE]: PddDdkCashgiftStatusUpdateRequestInterface;
  [PDD_DDK_GOODS_PID_QUERY]: PddDdkGoodsPidQueryRequestInterface;
  [PDD_DDK_PID_MEDIAID_BIND]: PddDdkPidMediaidBindRequestInterface;
  [PDD_DDK_GOODS_ZS_UNIT_URL_GEN]: PddDdkGoodsZsUnitUrlGenRequestInterface;
  [PDD_DDK_MEMBER_AUTHORITY_QUERY]: PddDdkMemberAuthorityQueryRequestInterface;
  [PDD_DDK_CASHGIFT_DATA_QUERY]: PddDdkCashgiftDataQueryRequestInterface;
  [PDD_DDK_STATISTICS_DATA_QUERY]: PddDdkStatisticsDataQueryRequestInterface;
  [PDD_DDK_CMS_PROM_URL_GENERATE]: PddDdkCmsPromUrlGenerateRequestInterface;
  [PDD_DDK_GOODS_PROMOTION_URL_GENERATE]: PddDdkGoodsPromotionUrlGenerateRequestInterface;
  [PDD_DDK_ORDER_LIST_RANGE_GET]: PddDdkOrderListRangeGetRequestInterface;
  [PDD_DDK_GOODS_SEARCH]: PddDdkGoodsSearchRequestInterface;
  [PDD_DDK_GOODS_DETAIL]: PddDdkGoodsDetailRequestInterface;
  [PDD_DDK_RESOURCE_URL_GEN]: PddDdkResourceUrlGenRequestInterface;
  [PDD_DDK_CASHGIFT_CREATE]: PddDdkCashgiftCreateRequestInterface;
  [PDD_DDK_ORDER_DETAIL_GET]: PddDdkOrderDetailGetRequestInterface;
  [PDD_DDK_ORDER_LIST_INCREMENT_GET]: PddDdkOrderListIncrementGetRequestInterface;
  [PDD_DDK_GOODS_RECOMMEND_GET]: PddDdkGoodsRecommendGetRequestInterface;
  [PDD_DDK_RP_PROM_URL_GENERATE]: PddDdkRpPromUrlGenerateRequestInterface;
  [PDD_DDK_ALL_ORDER_LIST_INCREMENT_GET]: PddDdkAllOrderListIncrementGetRequestInterface;
  [PDD_DDK_OAUTH_CASHGIFT_CREATE]: PddDdkOauthCashgiftCreateRequestInterface;
  [PDD_DDK_OAUTH_CASHGIFT_STATUS_UPDATE]: PddDdkOauthCashgiftStatusUpdateRequestInterface;
  [PDD_DDK_OAUTH_CMS_PROM_URL_GENERATE]: PddDdkOauthCmsPromUrlGenerateRequestInterface;
  [PDD_DDK_OAUTH_GOODS_DETAIL]: PddDdkOauthGoodsDetailRequestInterface;
  [PDD_DDK_OAUTH_GOODS_PID_GENERATE]: PddDdkOauthGoodsPidGenerateRequestInterface;
  [PDD_DDK_OAUTH_GOODS_PID_QUERY]: PddDdkOauthGoodsPidQueryRequestInterface;
  [PDD_DDK_OAUTH_GOODS_PROM_URL_GENERATE]: PddDdkOauthGoodsPromUrlGenerateRequestInterface;
  [PDD_DDK_OAUTH_GOODS_RECOMMEND_GET]: PddDdkOauthGoodsRecommendGetRequestInterface;
  [PDD_DDK_OAUTH_GOODS_SEARCH]: PddDdkOauthGoodsSearchRequestInterface;
  [PDD_DDK_OAUTH_GOODS_ZS_UNIT_URL_GEN]: PddDdkOauthGoodsZsUnitUrlGenRequestInterface;
  [PDD_DDK_OAUTH_MEMBER_AUTHORITY_QUERY]: PddDdkOauthMemberAuthorityQueryRequestInterface;
  [PDD_DDK_OAUTH_ORDER_DETAIL_GET]: PddDdkOauthOrderDetailGetRequestInterface;
  [PDD_DDK_OAUTH_PID_MEDIAID_BIND]: PddDdkOauthPidMediaidBindRequestInterface;
  [PDD_DDK_OAUTH_RESOURCE_URL_GEN]: PddDdkOauthResourceUrlGenRequestInterface;
  [PDD_DDK_OAUTH_RP_PROM_URL_GENERATE]: PddDdkOauthRpPromUrlGenerateRequestInterface;
  [PDD_DDK_OAUTH_WEAPP_QRCODE_URL_GEN]: PddDdkOauthWeappQrcodeUrlGenRequestInterface;
  [PDD_LOGISTICS_CS_HISTORY_MESSAGE_GET]: PddLogisticsCsHistoryMessageGetRequestInterface;
  [PDD_LOGISTICS_CS_MESSAGE_SEND]: PddLogisticsCsMessageSendRequestInterface;
  [PDD_LOGISTICS_CS_SESSION_CLOSE]: PddLogisticsCsSessionCloseRequestInterface;
  [PDD_LOGISTICS_CS_SESSION_START]: PddLogisticsCsSessionStartRequestInterface;
  [PDD_LOGISTICS_TICKET_GET]: PddLogisticsTicketGetRequestInterface;
  [PDD_LOGISTICS_TICKET_IMAGE_UPLOAD]: PddLogisticsTicketImageUploadRequestInterface;
  [PDD_LOGISTICS_TICKET_NOTIFY]: PddLogisticsTicketNotifyRequestInterface;
  [PDD_LOGISTICS_TICKET_PROBLEM_TYPE_GET]: PddLogisticsTicketProblemTypeGetRequestInterface;
  [PDD_SERVICE_MAIL_BIZACTION_NOTIFY]: PddServiceMailBizactionNotifyRequestInterface;
  [PDD_LOGISTICS_CO_TRACK_SUB]: PddLogisticsCoTrackSubRequestInterface;
  [PDD_SERVICE_MAIL_ORDER_FC_AUTH]: PddServiceMailOrderFcAuthRequestInterface;
  [PDD_SERVICE_MAIL_SERVICE_TIME_QUERY]: PddServiceMailServiceTimeQueryRequestInterface;
  [PDD_PROMOTION_COUPON_CLOSE]: PddPromotionCouponCloseRequestInterface;
  [PDD_PROMOTION_COUPON_QUANTITY_ADD]: PddPromotionCouponQuantityAddRequestInterface;
  [PDD_PROMOTION_GOODS_COUPON_CREATE]: PddPromotionGoodsCouponCreateRequestInterface;
  [PDD_PROMOTION_GOODS_COUPON_LIST_GET]: PddPromotionGoodsCouponListGetRequestInterface;
  [PDD_PROMOTION_HOME_COUPON_CREATE]: PddPromotionHomeCouponCreateRequestInterface;
  [PDD_PROMOTION_LIMITED_ACTIVITY_CANCEL]: PddPromotionLimitedActivityCancelRequestInterface;
  [PDD_PROMOTION_LIMITED_ACTIVITY_CREATE]: PddPromotionLimitedActivityCreateRequestInterface;
  [PDD_PROMOTION_LIMITED_DISCOUNT_LIST_GET]: PddPromotionLimitedDiscountListGetRequestInterface;
  [PDD_PROMOTION_LIMITED_QUALIFIED_GOODS_GET]: PddPromotionLimitedQualifiedGoodsGetRequestInterface;
  [PDD_PROMOTION_LIMITED_QUALIFIED_SKU_GET]: PddPromotionLimitedQualifiedSkuGetRequestInterface;
  [PDD_PROMOTION_MERCHANT_COUPON_LIST_GET]: PddPromotionMerchantCouponListGetRequestInterface;
  [PDD_VOUCHER_APPOINTMENT_INFO_SEND]: PddVoucherAppointmentInfoSendRequestInterface;
  [PDD_VOUCHER_OTA_CARD_PREPARE_VERIFICATION]: PddVoucherOtaCardPrepareVerificationRequestInterface;
  [PDD_VOUCHER_OTA_CARD_VERIFICATION]: PddVoucherOtaCardVerificationRequestInterface;
  [PDD_VOUCHER_PHYSICAL_GOODS_SEND]: PddVoucherPhysicalGoodsSendRequestInterface;
  [PDD_VOUCHER_REALTIME_ORDERNO_GET]: PddVoucherRealtimeOrdernoGetRequestInterface;
  [PDD_VOUCHER_REALTIME_VERIFY_SYNC]: PddVoucherRealtimeVerifySyncRequestInterface;
  [PDD_VOUCHER_VIRTUAL_CARD_BATCH_ADD]: PddVoucherVirtualCardBatchAddRequestInterface;
  [PDD_VOUCHER_VIRTUAL_CARD_VERIFICATION]: PddVoucherVirtualCardVerificationRequestInterface;
  [PDD_VOUCHER_VOUCHER_COMPLAIN]: PddVoucherVoucherComplainRequestInterface;
  [PDD_VOUCHER_VOUCHER_INFO_SEND]: PddVoucherVoucherInfoSendRequestInterface;
  [PDD_EINVOICE_INFO_QUERY]: PddEinvoiceInfoQueryRequestInterface;
  [PDD_INVOICE_APPLICATION_QUERY]: PddInvoiceApplicationQueryRequestInterface;
  [PDD_INVOICE_DETAIL_INVALID]: PddInvoiceDetailInvalidRequestInterface;
  [PDD_INVOICE_DETAIL_UPLOAD]: PddInvoiceDetailUploadRequestInterface;
  [PDD_MALL_CPS_PROTOCOL_STATUS_QUERY]: PddMallCpsProtocolStatusQueryRequestInterface;
  [PDD_MALL_INFO_GET]: PddMallInfoGetRequestInterface;
  [PDD_TRACE_SOURCE_UPLOAD_CODE_INFO]: PddTraceSourceUploadCodeInfoRequestInterface;
  [PDD_TRACE_SOURCE_UPLOAD_PLAN_INFO]: PddTraceSourceUploadPlanInfoRequestInterface;
  [PDD_TRACE_SOURCE_QUERY_GOODS_INFO]: PddTraceSourceQueryGoodsInfoRequestInterface;
  [PDD_OPEN_DECRYPT_BATCH]: PddOpenDecryptBatchRequestInterface;
  [PDD_OPEN_DECRYPT_MASK_BATCH]: PddOpenDecryptMaskBatchRequestInterface;
  [PDD_OPEN_KMS_ENCRYPT_BATCH]: PddOpenKmsEncryptBatchRequestInterface;
  [PDD_OPEN_KMS_SEARCH_BATCH]: PddOpenKmsSearchBatchRequestInterface;
  [PDD_OPEN_VIRTUAL_NUMBER_CHECK]: PddOpenVirtualNumberCheckRequestInterface;
  [PDD_POP_AUTH_TOKEN_CREATE]: PddPopAuthTokenCreateRequestInterface;
  [PDD_POP_AUTH_TOKEN_REFRESH]: PddPopAuthTokenRefreshRequestInterface;
  [PDD_TIME_GET]: PddTimeGetRequestInterface;
  [PDD_EXPRESS_ADD_DEPOT]: PddExpressAddDepotRequestInterface;
  [PDD_EXPRESS_CHANGE_DEPOT_INFO]: PddExpressChangeDepotInfoRequestInterface;
  [PDD_EXPRESS_DEPOT_INFO_GET]: PddExpressDepotInfoGetRequestInterface;
  [PDD_EXPRESS_DEPOT_LIST_GET]: PddExpressDepotListGetRequestInterface;
  [PDD_EXPRESS_MALL_DEPOT_SIMPLE_GET]: PddExpressMallDepotSimpleGetRequestInterface;
  [PDD_EXPRESS_SEARCH_DEPOT]: PddExpressSearchDepotRequestInterface;
  [PDD_STOCK_DEPOT_PRIORITY_LIST]: PddStockDepotPriorityListRequestInterface;
  [PDD_STOCK_DEPOT_PRIORITY_UPDATE]: PddStockDepotPriorityUpdateRequestInterface;
  [PDD_STOCK_GOODS_ID_TO_SKU_QUERY]: PddStockGoodsIdToSkuQueryRequestInterface;
  [PDD_STOCK_WARE_CREATE]: PddStockWareCreateRequestInterface;
  [PDD_STOCK_WARE_DELETE]: PddStockWareDeleteRequestInterface;
  [PDD_STOCK_WARE_DETAIL_QUERY]: PddStockWareDetailQueryRequestInterface;
  [PDD_STOCK_WARE_INFO_LIST]: PddStockWareInfoListRequestInterface;
  [PDD_STOCK_WARE_LIST]: PddStockWareListRequestInterface;
  [PDD_STOCK_WARE_MOVE]: PddStockWareMoveRequestInterface;
  [PDD_STOCK_WARE_SKU_UPDATE]: PddStockWareSkuUpdateRequestInterface;
  [PDD_STOCK_WARE_UPDATE]: PddStockWareUpdateRequestInterface;
  [PDD_STOCK_WARE_WAREHOUSE_QUERY]: PddStockWareWarehouseQueryRequestInterface;
  [PDD_PMC_ACCRUE_QUERY]: PddPmcAccrueQueryRequestInterface;
  [PDD_PMC_USER_CANCEL]: PddPmcUserCancelRequestInterface;
  [PDD_PMC_USER_GET]: PddPmcUserGetRequestInterface;
  [PDD_PMC_USER_PERMIT]: PddPmcUserPermitRequestInterface;
  [PDD_CLOUDPRINT_CMDPRINT_RENDER]: PddCloudprintCmdprintRenderRequestInterface;
  [PDD_CLOUDPRINT_CUSTOMARES_GET]: PddCloudprintCustomaresGetRequestInterface;
  [PDD_CLOUDPRINT_PORTABLEPRINTER_GET]: PddCloudprintPortableprinterGetRequestInterface;
  [PDD_CLOUDPRINT_STDTEMPLATES_GET]: PddCloudprintStdtemplatesGetRequestInterface;
  [PDD_WAYBILL_CANCEL]: PddWaybillCancelRequestInterface;
  [PDD_WAYBILL_GET]: PddWaybillGetRequestInterface;
  [PDD_WAYBILL_QUERY_BY_WAYBILLCODE]: PddWaybillQueryByWaybillcodeRequestInterface;
  [PDD_WAYBILL_SEARCH]: PddWaybillSearchRequestInterface;
  [PDD_WAYBILL_UPDATE]: PddWaybillUpdateRequestInterface;
  [PDD_FINANCE_BALANCE_DAILY_BILL_URL_GET]: PddFinanceBalanceDailyBillUrlGetRequestInterface;
  [PDD_SERVICEMARKET_CONTRACT_SEARCH]: PddServicemarketContractSearchRequestInterface;
  [PDD_SERVICEMARKET_SETTLEMENTBILL_GET]: PddServicemarketSettlementbillGetRequestInterface;
  [PDD_SERVICEMARKET_TRADELIST_GET]: PddServicemarketTradelistGetRequestInterface;
  [PDD_VAS_ORDER_SEARCH]: PddVasOrderSearchRequestInterface;
  [PDD_OPEN_MSG_SERVICE_QUERY_MSG_RECORD]: PddOpenMsgServiceQueryMsgRecordRequestInterface;
  [PDD_OPEN_MSG_SERVICE_SEND_BATCH_MSG]: PddOpenMsgServiceSendBatchMsgRequestInterface;
  [PDD_OPEN_MSG_SERVICE_SEND_EXPRESS_MSG]: PddOpenMsgServiceSendExpressMsgRequestInterface;
  [PDD_OPEN_MSG_SERVICE_SEND_MSG]: PddOpenMsgServiceSendMsgRequestInterface;
  [PDD_SMS_DETAILBILL_PUSH]: PddSmsDetailbillPushRequestInterface;
  [PDD_SMS_VENDOR_COMPLAINT_CREATE]: PddSmsVendorComplaintCreateRequestInterface;
  [PDD_AD_API_ADVERTISER_OPEN_ACCOUNT]: PddAdApiAdvertiserOpenAccountRequestInterface;
  [PDD_AD_API_ADVERTISER_QUERY_ACCOUNT_BALANCE]: PddAdApiAdvertiserQueryAccountBalanceRequestInterface;
  [PDD_AD_API_ADVERTISER_QUERY_ACCOUNT_INFO]: PddAdApiAdvertiserQueryAccountInfoRequestInterface;
  [PDD_AD_API_ADVERTISER_QUERY_DETAIL]: PddAdApiAdvertiserQueryDetailRequestInterface;
  [PDD_AD_API_GOODS_QUERY_GALLERY_IMAGES]: PddAdApiGoodsQueryGalleryImagesRequestInterface;
  [PDD_AD_API_GOODS_QUERY_LONG_IMAGES]: PddAdApiGoodsQueryLongImagesRequestInterface;
  [PDD_AD_API_GOODS_QUERY_PAGE]: PddAdApiGoodsQueryPageRequestInterface;
  [PDD_AD_API_KEYWORD_CREATE]: PddAdApiKeywordCreateRequestInterface;
  [PDD_AD_API_KEYWORD_DELETE]: PddAdApiKeywordDeleteRequestInterface;
  [PDD_AD_API_KEYWORD_QUERY_LIST]: PddAdApiKeywordQueryListRequestInterface;
  [PDD_AD_API_KEYWORD_RECOMMEND_GET]: PddAdApiKeywordRecommendGetRequestInterface;
  [PDD_AD_API_KEYWORD_RELEVANCE_GET]: PddAdApiKeywordRelevanceGetRequestInterface;
  [PDD_AD_API_KEYWORD_UPDATE]: PddAdApiKeywordUpdateRequestInterface;
  [PDD_AD_API_PLAN_CREATE]: PddAdApiPlanCreateRequestInterface;
  [PDD_AD_API_PLAN_DELETE]: PddAdApiPlanDeleteRequestInterface;
  [PDD_AD_API_PLAN_QUERY_CAN_CREATE_AD_PLAN]: PddAdApiPlanQueryCanCreateAdPlanRequestInterface;
  [PDD_AD_API_PLAN_QUERY_CAN_UPDATE_MAX_COST]: PddAdApiPlanQueryCanUpdateMaxCostRequestInterface;
  [PDD_AD_API_PLAN_QUERY_LIST]: PddAdApiPlanQueryListRequestInterface;
  [PDD_AD_API_PLAN_UPDATE_DATA_OPERATE_STATUS]: PddAdApiPlanUpdateDataOperateStatusRequestInterface;
  [PDD_AD_API_PLAN_UPDATE_MAX_COST]: PddAdApiPlanUpdateMaxCostRequestInterface;
  [PDD_AD_API_PLAN_UPDATE_PLAN_DISCOUNT]: PddAdApiPlanUpdatePlanDiscountRequestInterface;
  [PDD_AD_API_PLAN_UPDATE_PLAN_NAME]: PddAdApiPlanUpdatePlanNameRequestInterface;
  [PDD_AD_API_PLAN_UPDATE_PLAN_TO_OCPC]: PddAdApiPlanUpdatePlanToOcpcRequestInterface;
  [PDD_AD_API_REPORT_DAILY_REPORT_QUERY]: PddAdApiReportDailyReportQueryRequestInterface;
  [PDD_AD_API_REPORT_ENTITY_REPORT_QUERY]: PddAdApiReportEntityReportQueryRequestInterface;
  [PDD_AD_API_REPORT_HOURLY_REPORT_QUERY]: PddAdApiReportHourlyReportQueryRequestInterface;
  [PDD_AD_API_UNIT_BID_DELETE]: PddAdApiUnitBidDeleteRequestInterface;
  [PDD_AD_API_UNIT_BID_QUERY_BASE_LOCATION_PROFILE]: PddAdApiUnitBidQueryBaseLocationProfileRequestInterface;
  [PDD_AD_API_UNIT_BID_QUERY_BASE_TARGET_PROFILE]: PddAdApiUnitBidQueryBaseTargetProfileRequestInterface;
  [PDD_AD_API_UNIT_BID_QUERY_LIST]: PddAdApiUnitBidQueryListRequestInterface;
  [PDD_AD_API_UNIT_BID_QUERY_TARGETING_TAG_LIST]: PddAdApiUnitBidQueryTargetingTagListRequestInterface;
  [PDD_AD_API_UNIT_BID_SYNC]: PddAdApiUnitBidSyncRequestInterface;
  [PDD_AD_API_UNIT_BID_UPDATE]: PddAdApiUnitBidUpdateRequestInterface;
  [PDD_AD_API_UNIT_CREATE]: PddAdApiUnitCreateRequestInterface;
  [PDD_AD_API_UNIT_CREATIVE_CHECK_TITLE]: PddAdApiUnitCreativeCheckTitleRequestInterface;
  [PDD_AD_API_UNIT_CREATIVE_CREATE]: PddAdApiUnitCreativeCreateRequestInterface;
  [PDD_AD_API_UNIT_CREATIVE_DELETE]: PddAdApiUnitCreativeDeleteRequestInterface;
  [PDD_AD_API_UNIT_CREATIVE_DISTRIBUTE_FLOW_RATE]: PddAdApiUnitCreativeDistributeFlowRateRequestInterface;
  [PDD_AD_API_UNIT_CREATIVE_QUERY_FLOW_RATE]: PddAdApiUnitCreativeQueryFlowRateRequestInterface;
  [PDD_AD_API_UNIT_CREATIVE_QUERY_LIST]: PddAdApiUnitCreativeQueryListRequestInterface;
  [PDD_AD_API_UNIT_CREATIVE_UPDATE_CONTENT]: PddAdApiUnitCreativeUpdateContentRequestInterface;
  [PDD_AD_API_UNIT_CREATIVE_UPDATE_DATA_OPERATE_STATUS]: PddAdApiUnitCreativeUpdateDataOperateStatusRequestInterface;
  [PDD_AD_API_UNIT_CREATIVE_UPDATE_SMART_CREATIVE]: PddAdApiUnitCreativeUpdateSmartCreativeRequestInterface;
  [PDD_AD_API_UNIT_DELETE]: PddAdApiUnitDeleteRequestInterface;
  [PDD_AD_API_UNIT_QUERY_LIST]: PddAdApiUnitQueryListRequestInterface;
  [PDD_AD_API_UNIT_UPDATE_DATA_OPERATE_STATUS]: PddAdApiUnitUpdateDataOperateStatusRequestInterface;
  [PDD_AD_API_UNIT_UPDATE_OPTIMIZATION_MESSAGE]: PddAdApiUnitUpdateOptimizationMessageRequestInterface;
  [PDD_AD_API_UNIT_UPDATE_UNIT_BID]: PddAdApiUnitUpdateUnitBidRequestInterface;
  [PDD_AD_API_UNIT_UPDATE_UNIT_NAME]: PddAdApiUnitUpdateUnitNameRequestInterface;
  [PDD_FDS_ORDER_GET]: PddFdsOrderGetRequestInterface;
  [PDD_FDS_ORDER_LIST_GET]: PddFdsOrderListGetRequestInterface;
  [PDD_FDS_ROLE_GET]: PddFdsRoleGetRequestInterface;
  [PDD_FDS_WAYBILL_CANCEL]: PddFdsWaybillCancelRequestInterface;
  [PDD_FDS_WAYBILL_GET]: PddFdsWaybillGetRequestInterface;
  [PDD_FDS_WAYBILL_RETURN]: PddFdsWaybillReturnRequestInterface;
  [PDD_FDS_WAYBILL_RETURN_SLAVE]: PddFdsWaybillReturnSlaveRequestInterface;
  [PDD_MALL_INFO_GROUP_ADD_POST]: PddMallInfoGroupAddPostRequestInterface;
  [PDD_MALL_INFO_GROUP_ADD_STORE_POST]: PddMallInfoGroupAddStorePostRequestInterface;
  [PDD_MALL_INFO_GROUP_DELETE_POST]: PddMallInfoGroupDeletePostRequestInterface;
  [PDD_MALL_INFO_GROUP_LIST_STORE_GET]: PddMallInfoGroupListStoreGetRequestInterface;
  [PDD_MALL_INFO_GROUP_QUERY_POST]: PddMallInfoGroupQueryPostRequestInterface;
  [PDD_MALL_INFO_GROUP_REMOVE_STORE_GET]: PddMallInfoGroupRemoveStoreGetRequestInterface;
  [PDD_MALL_INFO_GROUP_UPDATE_POST]: PddMallInfoGroupUpdatePostRequestInterface;
  [PDD_MALL_INFO_STORE_CREATE_POST]: PddMallInfoStoreCreatePostRequestInterface;
  [PDD_MALL_INFO_STORE_CREATE_POST_NOPOI]: PddMallInfoStoreCreatePostNopoiRequestInterface;
  [PDD_MALL_INFO_STORE_DELETE_POST]: PddMallInfoStoreDeletePostRequestInterface;
  [PDD_MALL_INFO_STORE_GET]: PddMallInfoStoreGetRequestInterface;
  [PDD_MALL_INFO_STORE_UPDATE_POST]: PddMallInfoStoreUpdatePostRequestInterface;
  [PDD_MALL_INFO_STORE_UPDATE_POST_NOPOI]: PddMallInfoStoreUpdatePostNopoiRequestInterface;
  [PDD_QRPAY_PAYEE_REGISTER]: PddQrpayPayeeRegisterRequestInterface;
  [PDD_MALL_INFO_BONDED_WAREHOUSE_GET]: PddMallInfoBondedWarehouseGetRequestInterface;
  [PDD_OVERSEA_CLEARANCE_GET]: PddOverseaClearanceGetRequestInterface;
  [PDD_OVERSEA_DECLARATION_FAIL_NOTIFY]: PddOverseaDeclarationFailNotifyRequestInterface;
  [PDD_TICKET_AREACODE_GET]: PddTicketAreacodeGetRequestInterface;
  [PDD_TICKET_GOODS_QUERY]: PddTicketGoodsQueryRequestInterface;
  [PDD_TICKET_GOODS_UPLOAD]: PddTicketGoodsUploadRequestInterface;
  [PDD_TICKET_ORDER_CREATE_NOTIFYCATION]: PddTicketOrderCreateNotifycationRequestInterface;
  [PDD_TICKET_ORDER_REFUND_NOTIFYCATION]: PddTicketOrderRefundNotifycationRequestInterface;
  [PDD_TICKET_SCENIC_GET]: PddTicketScenicGetRequestInterface;
  [PDD_TICKET_SKU_RULE_ADD]: PddTicketSkuRuleAddRequestInterface;
  [PDD_TICKET_SKU_RULE_EDIT]: PddTicketSkuRuleEditRequestInterface;
  [PDD_TICKET_SKU_RULE_GET]: PddTicketSkuRuleGetRequestInterface;
  [PDD_TICKET_VERIFICATION_NOTIFYCATION]: PddTicketVerificationNotifycationRequestInterface;
  [PDD_CLOUD_ISV_PAGE_CODE]: PddCloudIsvPageCodeRequestInterface;
  [PDD_CLOUD_SECURITY_EVENT_TRACKING_BATCH_ORDER]: PddCloudSecurityEventTrackingBatchOrderRequestInterface;
  [PDD_CLOUD_SECURITY_EVENT_TRACKING_LOGIN]: PddCloudSecurityEventTrackingLoginRequestInterface;
  [PDD_DDY_PDP_USER_ADD]: PddDdyPdpUserAddRequestInterface;
  [PDD_DDY_PDP_USER_DELETE]: PddDdyPdpUserDeleteRequestInterface;
  [PDD_DDY_PDP_USERS_GET]: PddDdyPdpUsersGetRequestInterface;
  [PDD_CLOUD_DTS_ORDER_LIST_INCREMENT_GET]: PddCloudDtsOrderListIncrementGetRequestInterface;
  [PDD_CLOUD_LOGISTICS_ONLINE_SEND]: PddCloudLogisticsOnlineSendRequestInterface;
  [PDD_CLOUD_WAYBILL_GET]: PddCloudWaybillGetRequestInterface;
  [PDD_CLOUD_WAYBILL_UPDATE]: PddCloudWaybillUpdateRequestInterface;
  [PDD_CLOUD_WEBSESSION_SEND]: PddCloudWebsessionSendRequestInterface;
  [PDD_CLOUD_WMS_ORDER_SEND]: PddCloudWmsOrderSendRequestInterface;
}
export interface PddCollectRootResponseInterface {
  [PDD_LOGISTICS_ADDRESS_GET]: PddLogisticsAddressGetResponseInterface;
  [PDD_LOGISTICS_AVAILABLE_COMPANY_RECOMMEND]: PddLogisticsAvailableCompanyRecommendResponseInterface;
  [PDD_LOGISTICS_COMPANIES_GET]: PddLogisticsCompaniesGetResponseInterface;
  [PDD_LOGISTICS_ISV_TRACE_NOTIFY_SUB]: PddLogisticsIsvTraceNotifySubResponseInterface;
  [PDD_LOGISTICS_ONLINE_SEND]: PddLogisticsOnlineSendResponseInterface;
  [PDD_LOGISTICS_ORDERTRACE_GET]: PddLogisticsOrdertraceGetResponseInterface;
  [PDD_ERP_ORDER_SYNC]: PddErpOrderSyncResponseInterface;
  [PDD_ORDER_BASIC_LIST_GET]: PddOrderBasicListGetResponseInterface;
  [PDD_ORDER_INFORMATION_GET]: PddOrderInformationGetResponseInterface;
  [PDD_ORDER_LIST_GET]: PddOrderListGetResponseInterface;
  [PDD_ORDER_NOTE_UPDATE]: PddOrderNoteUpdateResponseInterface;
  [PDD_ORDER_NUMBER_LIST_INCREMENT_GET]: PddOrderNumberListIncrementGetResponseInterface;
  [PDD_ORDER_PROMISE_INFO_GET]: PddOrderPromiseInfoGetResponseInterface;
  [PDD_ORDER_STATUS_GET]: PddOrderStatusGetResponseInterface;
  [PDD_ORDER_UPDATE_ADDRESS]: PddOrderUpdateAddressResponseInterface;
  [PDD_ORDER_UPLOAD_EXTRA_LOGISTICS]: PddOrderUploadExtraLogisticsResponseInterface;
  [PDD_ORDER_UPLOAD_RELATION_LOGISTICS]: PddOrderUploadRelationLogisticsResponseInterface;
  [PDD_ORDER_VIRTUAL_INFORMATION_GET]: PddOrderVirtualInformationGetResponseInterface;
  [PDD_NEXTONE_LOGISTICS_WAREHOUSE_UPDATE]: PddNextoneLogisticsWarehouseUpdateResponseInterface;
  [PDD_RDC_PDDGENIUS_SENDGOODS_CANCEL]: PddRdcPddgeniusSendgoodsCancelResponseInterface;
  [PDD_REFUND_ADDRESS_LIST_GET]: PddRefundAddressListGetResponseInterface;
  [PDD_REFUND_AGREE]: PddRefundAgreeResponseInterface;
  [PDD_REFUND_EXCHANGE_SHIPPING]: PddRefundExchangeShippingResponseInterface;
  [PDD_REFUND_INFORMATION_GET]: PddRefundInformationGetResponseInterface;
  [PDD_REFUND_LIST_INCREMENT_GET]: PddRefundListIncrementGetResponseInterface;
  [PDD_REFUND_RETURNGOODS_AGREE]: PddRefundReturngoodsAgreeResponseInterface;
  [PDD_REFUND_STATUS_CHECK]: PddRefundStatusCheckResponseInterface;
  [PDD_VIRTUAL_GAME_SERVER_QUERY]: PddVirtualGameServerQueryResponseInterface;
  [PDD_VIRTUAL_MOBILE_CHARGE_NOTIFY]: PddVirtualMobileChargeNotifyResponseInterface;
  [PDD_DELETE_DRAFT_COMMIT]: PddDeleteDraftCommitResponseInterface;
  [PDD_DELETE_GOODS_COMMIT]: PddDeleteGoodsCommitResponseInterface;
  [PDD_GOODS_ADD]: PddGoodsAddResponseInterface;
  [PDD_GOODS_ADVICE_PRICE_GET]: PddGoodsAdvicePriceGetResponseInterface;
  [PDD_GOODS_AUTHORIZATION_CATS]: PddGoodsAuthorizationCatsResponseInterface;
  [PDD_GOODS_CAT_RULE_GET]: PddGoodsCatRuleGetResponseInterface;
  [PDD_GOODS_CAT_TEMPLATE_GET]: PddGoodsCatTemplateGetResponseInterface;
  [PDD_GOODS_CATS_GET]: PddGoodsCatsGetResponseInterface;
  [PDD_GOODS_CHILD_SKU_EDIT]: PddGoodsChildSkuEditResponseInterface;
  [PDD_GOODS_COMMIT_DETAIL_GET]: PddGoodsCommitDetailGetResponseInterface;
  [PDD_GOODS_COMMIT_LIST_GET]: PddGoodsCommitListGetResponseInterface;
  [PDD_GOODS_COMMIT_STATUS_GET]: PddGoodsCommitStatusGetResponseInterface;
  [PDD_GOODS_COUNTRY_GET]: PddGoodsCountryGetResponseInterface;
  [PDD_GOODS_CPS_MALL_UNIT_CHANGE]: PddGoodsCpsMallUnitChangeResponseInterface;
  [PDD_GOODS_CPS_MALL_UNIT_CREATE]: PddGoodsCpsMallUnitCreateResponseInterface;
  [PDD_GOODS_CPS_MALL_UNIT_PAUSE]: PddGoodsCpsMallUnitPauseResponseInterface;
  [PDD_GOODS_CPS_MALL_UNIT_QUERY]: PddGoodsCpsMallUnitQueryResponseInterface;
  [PDD_GOODS_CPS_MALL_UNIT_RESUME]: PddGoodsCpsMallUnitResumeResponseInterface;
  [PDD_GOODS_CPS_UNIT_CHANGE]: PddGoodsCpsUnitChangeResponseInterface;
  [PDD_GOODS_CPS_UNIT_CREATE]: PddGoodsCpsUnitCreateResponseInterface;
  [PDD_GOODS_CPS_UNIT_DELETE]: PddGoodsCpsUnitDeleteResponseInterface;
  [PDD_GOODS_CPS_UNIT_QUERY]: PddGoodsCpsUnitQueryResponseInterface;
  [PDD_GOODS_DETAIL_GET]: PddGoodsDetailGetResponseInterface;
  [PDD_GOODS_EDIT_GOODS_COMMIT]: PddGoodsEditGoodsCommitResponseInterface;
  [PDD_GOODS_FILE_INFO_GET]: PddGoodsFileInfoGetResponseInterface;
  [PDD_GOODS_FILESPACE_IMAGE_UPLOAD]: PddGoodsFilespaceImageUploadResponseInterface;
  [PDD_GOODS_IMAGE_UPLOAD]: PddGoodsImageUploadResponseInterface;
  [PDD_GOODS_IMG_UPLOAD]: PddGoodsImgUploadResponseInterface;
  [PDD_GOODS_INFORMATION_GET]: PddGoodsInformationGetResponseInterface;
  [PDD_GOODS_INFORMATION_UPDATE]: PddGoodsInformationUpdateResponseInterface;
  [PDD_GOODS_LATEST_COMMIT_STATUS_GET]: PddGoodsLatestCommitStatusGetResponseInterface;
  [PDD_GOODS_LIST_GET]: PddGoodsListGetResponseInterface;
  [PDD_GOODS_LOGISTICS_SER_TEMPLATE_CREATE]: PddGoodsLogisticsSerTemplateCreateResponseInterface;
  [PDD_GOODS_LOGISTICS_SER_TEMPLATE_DELETE]: PddGoodsLogisticsSerTemplateDeleteResponseInterface;
  [PDD_GOODS_LOGISTICS_SER_TEMPLATE_DETAIL]: PddGoodsLogisticsSerTemplateDetailResponseInterface;
  [PDD_GOODS_LOGISTICS_SER_TEMPLATE_LIST]: PddGoodsLogisticsSerTemplateListResponseInterface;
  [PDD_GOODS_LOGISTICS_SER_TEMPLATE_UPDATE]: PddGoodsLogisticsSerTemplateUpdateResponseInterface;
  [PDD_GOODS_LOGISTICS_TEMPLATE_CREATE]: PddGoodsLogisticsTemplateCreateResponseInterface;
  [PDD_GOODS_LOGISTICS_TEMPLATE_GET]: PddGoodsLogisticsTemplateGetResponseInterface;
  [PDD_GOODS_MATERIAL_CREATE]: PddGoodsMaterialCreateResponseInterface;
  [PDD_GOODS_MATERIAL_DELETE]: PddGoodsMaterialDeleteResponseInterface;
  [PDD_GOODS_MATERIAL_QUERY]: PddGoodsMaterialQueryResponseInterface;
  [PDD_GOODS_OPT_GET]: PddGoodsOptGetResponseInterface;
  [PDD_GOODS_OUT_PROPERTY_MAPPING_GET]: PddGoodsOutPropertyMappingGetResponseInterface;
  [PDD_GOODS_OUTER_CAT_MAPPING_GET]: PddGoodsOuterCatMappingGetResponseInterface;
  [PDD_GOODS_PRICE_CHECK]: PddGoodsPriceCheckResponseInterface;
  [PDD_GOODS_QUANTITY_UPDATE]: PddGoodsQuantityUpdateResponseInterface;
  [PDD_GOODS_SALE_STATUS_SET]: PddGoodsSaleStatusSetResponseInterface;
  [PDD_GOODS_SIZESPEC_CLASS_GET]: PddGoodsSizespecClassGetResponseInterface;
  [PDD_GOODS_SIZESPEC_META_GET]: PddGoodsSizespecMetaGetResponseInterface;
  [PDD_GOODS_SIZESPEC_TEMPLATE_ADD]: PddGoodsSizespecTemplateAddResponseInterface;
  [PDD_GOODS_SIZESPEC_TEMPLATE_DELETE]: PddGoodsSizespecTemplateDeleteResponseInterface;
  [PDD_GOODS_SIZESPEC_TEMPLATE_GET]: PddGoodsSizespecTemplateGetResponseInterface;
  [PDD_GOODS_SIZESPEC_TEMPLATE_UPDATE]: PddGoodsSizespecTemplateUpdateResponseInterface;
  [PDD_GOODS_SIZESPEC_TEMPLATES_GET]: PddGoodsSizespecTemplatesGetResponseInterface;
  [PDD_GOODS_SKU_PRICE_UPDATE]: PddGoodsSkuPriceUpdateResponseInterface;
  [PDD_GOODS_SKUS_GET]: PddGoodsSkusGetResponseInterface;
  [PDD_GOODS_SPEC_GET]: PddGoodsSpecGetResponseInterface;
  [PDD_GOODS_SPEC_ID_GET]: PddGoodsSpecIdGetResponseInterface;
  [PDD_GOODS_SPU_GET]: PddGoodsSpuGetResponseInterface;
  [PDD_GOODS_SPU_SEARCH]: PddGoodsSpuSearchResponseInterface;
  [PDD_GOODS_SUBMIT_GOODS_COMMIT]: PddGoodsSubmitGoodsCommitResponseInterface;
  [PDD_GOODS_TEMPLATE_PROPERTY_VALUE_SEARCH]: PddGoodsTemplatePropertyValueSearchResponseInterface;
  [PDD_GOOODS_SKU_MEASUREMENT_LIST]: PddGooodsSkuMeasurementListResponseInterface;
  [PDD_ONE_EXPRESS_COST_TEMPLATE]: PddOneExpressCostTemplateResponseInterface;
  [PDD_DDK_GOODS_PID_GENERATE]: PddDdkGoodsPidGenerateResponseInterface;
  [PDD_DDK_CASHGIFT_STATUS_UPDATE]: PddDdkCashgiftStatusUpdateResponseInterface;
  [PDD_DDK_GOODS_PID_QUERY]: PddDdkGoodsPidQueryResponseInterface;
  [PDD_DDK_PID_MEDIAID_BIND]: PddDdkPidMediaidBindResponseInterface;
  [PDD_DDK_GOODS_ZS_UNIT_URL_GEN]: PddDdkGoodsZsUnitUrlGenResponseInterface;
  [PDD_DDK_MEMBER_AUTHORITY_QUERY]: PddDdkMemberAuthorityQueryResponseInterface;
  [PDD_DDK_CASHGIFT_DATA_QUERY]: PddDdkCashgiftDataQueryResponseInterface;
  [PDD_DDK_STATISTICS_DATA_QUERY]: PddDdkStatisticsDataQueryResponseInterface;
  [PDD_DDK_CMS_PROM_URL_GENERATE]: PddDdkCmsPromUrlGenerateResponseInterface;
  [PDD_DDK_GOODS_PROMOTION_URL_GENERATE]: PddDdkGoodsPromotionUrlGenerateResponseInterface;
  [PDD_DDK_ORDER_LIST_RANGE_GET]: PddDdkOrderListRangeGetResponseInterface;
  [PDD_DDK_GOODS_SEARCH]: PddDdkGoodsSearchResponseInterface;
  [PDD_DDK_GOODS_DETAIL]: PddDdkGoodsDetailResponseInterface;
  [PDD_DDK_RESOURCE_URL_GEN]: PddDdkResourceUrlGenResponseInterface;
  [PDD_DDK_CASHGIFT_CREATE]: PddDdkCashgiftCreateResponseInterface;
  [PDD_DDK_ORDER_DETAIL_GET]: PddDdkOrderDetailGetResponseInterface;
  [PDD_DDK_ORDER_LIST_INCREMENT_GET]: PddDdkOrderListIncrementGetResponseInterface;
  [PDD_DDK_GOODS_RECOMMEND_GET]: PddDdkGoodsRecommendGetResponseInterface;
  [PDD_DDK_RP_PROM_URL_GENERATE]: PddDdkRpPromUrlGenerateResponseInterface;
  [PDD_DDK_ALL_ORDER_LIST_INCREMENT_GET]: PddDdkAllOrderListIncrementGetResponseInterface;
  [PDD_DDK_OAUTH_CASHGIFT_CREATE]: PddDdkOauthCashgiftCreateResponseInterface;
  [PDD_DDK_OAUTH_CASHGIFT_STATUS_UPDATE]: PddDdkOauthCashgiftStatusUpdateResponseInterface;
  [PDD_DDK_OAUTH_CMS_PROM_URL_GENERATE]: PddDdkOauthCmsPromUrlGenerateResponseInterface;
  [PDD_DDK_OAUTH_GOODS_DETAIL]: PddDdkOauthGoodsDetailResponseInterface;
  [PDD_DDK_OAUTH_GOODS_PID_GENERATE]: PddDdkOauthGoodsPidGenerateResponseInterface;
  [PDD_DDK_OAUTH_GOODS_PID_QUERY]: PddDdkOauthGoodsPidQueryResponseInterface;
  [PDD_DDK_OAUTH_GOODS_PROM_URL_GENERATE]: PddDdkOauthGoodsPromUrlGenerateResponseInterface;
  [PDD_DDK_OAUTH_GOODS_RECOMMEND_GET]: PddDdkOauthGoodsRecommendGetResponseInterface;
  [PDD_DDK_OAUTH_GOODS_SEARCH]: PddDdkOauthGoodsSearchResponseInterface;
  [PDD_DDK_OAUTH_GOODS_ZS_UNIT_URL_GEN]: PddDdkOauthGoodsZsUnitUrlGenResponseInterface;
  [PDD_DDK_OAUTH_MEMBER_AUTHORITY_QUERY]: PddDdkOauthMemberAuthorityQueryResponseInterface;
  [PDD_DDK_OAUTH_ORDER_DETAIL_GET]: PddDdkOauthOrderDetailGetResponseInterface;
  [PDD_DDK_OAUTH_PID_MEDIAID_BIND]: PddDdkOauthPidMediaidBindResponseInterface;
  [PDD_DDK_OAUTH_RESOURCE_URL_GEN]: PddDdkOauthResourceUrlGenResponseInterface;
  [PDD_DDK_OAUTH_RP_PROM_URL_GENERATE]: PddDdkOauthRpPromUrlGenerateResponseInterface;
  [PDD_DDK_OAUTH_WEAPP_QRCODE_URL_GEN]: PddDdkOauthWeappQrcodeUrlGenResponseInterface;
  [PDD_LOGISTICS_CS_HISTORY_MESSAGE_GET]: PddLogisticsCsHistoryMessageGetResponseInterface;
  [PDD_LOGISTICS_CS_MESSAGE_SEND]: PddLogisticsCsMessageSendResponseInterface;
  [PDD_LOGISTICS_CS_SESSION_CLOSE]: PddLogisticsCsSessionCloseResponseInterface;
  [PDD_LOGISTICS_CS_SESSION_START]: PddLogisticsCsSessionStartResponseInterface;
  [PDD_LOGISTICS_TICKET_GET]: PddLogisticsTicketGetResponseInterface;
  [PDD_LOGISTICS_TICKET_IMAGE_UPLOAD]: PddLogisticsTicketImageUploadResponseInterface;
  [PDD_LOGISTICS_TICKET_NOTIFY]: PddLogisticsTicketNotifyResponseInterface;
  [PDD_LOGISTICS_TICKET_PROBLEM_TYPE_GET]: PddLogisticsTicketProblemTypeGetResponseInterface;
  [PDD_SERVICE_MAIL_BIZACTION_NOTIFY]: PddServiceMailBizactionNotifyResponseInterface;
  [PDD_LOGISTICS_CO_TRACK_SUB]: PddLogisticsCoTrackSubResponseInterface;
  [PDD_SERVICE_MAIL_ORDER_FC_AUTH]: PddServiceMailOrderFcAuthResponseInterface;
  [PDD_SERVICE_MAIL_SERVICE_TIME_QUERY]: PddServiceMailServiceTimeQueryResponseInterface;
  [PDD_PROMOTION_COUPON_CLOSE]: PddPromotionCouponCloseResponseInterface;
  [PDD_PROMOTION_COUPON_QUANTITY_ADD]: PddPromotionCouponQuantityAddResponseInterface;
  [PDD_PROMOTION_GOODS_COUPON_CREATE]: PddPromotionGoodsCouponCreateResponseInterface;
  [PDD_PROMOTION_GOODS_COUPON_LIST_GET]: PddPromotionGoodsCouponListGetResponseInterface;
  [PDD_PROMOTION_HOME_COUPON_CREATE]: PddPromotionHomeCouponCreateResponseInterface;
  [PDD_PROMOTION_LIMITED_ACTIVITY_CANCEL]: PddPromotionLimitedActivityCancelResponseInterface;
  [PDD_PROMOTION_LIMITED_ACTIVITY_CREATE]: PddPromotionLimitedActivityCreateResponseInterface;
  [PDD_PROMOTION_LIMITED_DISCOUNT_LIST_GET]: PddPromotionLimitedDiscountListGetResponseInterface;
  [PDD_PROMOTION_LIMITED_QUALIFIED_GOODS_GET]: PddPromotionLimitedQualifiedGoodsGetResponseInterface;
  [PDD_PROMOTION_LIMITED_QUALIFIED_SKU_GET]: PddPromotionLimitedQualifiedSkuGetResponseInterface;
  [PDD_PROMOTION_MERCHANT_COUPON_LIST_GET]: PddPromotionMerchantCouponListGetResponseInterface;
  [PDD_VOUCHER_APPOINTMENT_INFO_SEND]: PddVoucherAppointmentInfoSendResponseInterface;
  [PDD_VOUCHER_OTA_CARD_PREPARE_VERIFICATION]: PddVoucherOtaCardPrepareVerificationResponseInterface;
  [PDD_VOUCHER_OTA_CARD_VERIFICATION]: PddVoucherOtaCardVerificationResponseInterface;
  [PDD_VOUCHER_PHYSICAL_GOODS_SEND]: PddVoucherPhysicalGoodsSendResponseInterface;
  [PDD_VOUCHER_REALTIME_ORDERNO_GET]: PddVoucherRealtimeOrdernoGetResponseInterface;
  [PDD_VOUCHER_REALTIME_VERIFY_SYNC]: PddVoucherRealtimeVerifySyncResponseInterface;
  [PDD_VOUCHER_VIRTUAL_CARD_BATCH_ADD]: PddVoucherVirtualCardBatchAddResponseInterface;
  [PDD_VOUCHER_VIRTUAL_CARD_VERIFICATION]: PddVoucherVirtualCardVerificationResponseInterface;
  [PDD_VOUCHER_VOUCHER_COMPLAIN]: PddVoucherVoucherComplainResponseInterface;
  [PDD_VOUCHER_VOUCHER_INFO_SEND]: PddVoucherVoucherInfoSendResponseInterface;
  [PDD_EINVOICE_INFO_QUERY]: PddEinvoiceInfoQueryResponseInterface;
  [PDD_INVOICE_APPLICATION_QUERY]: PddInvoiceApplicationQueryResponseInterface;
  [PDD_INVOICE_DETAIL_INVALID]: PddInvoiceDetailInvalidResponseInterface;
  [PDD_INVOICE_DETAIL_UPLOAD]: PddInvoiceDetailUploadResponseInterface;
  [PDD_MALL_CPS_PROTOCOL_STATUS_QUERY]: PddMallCpsProtocolStatusQueryResponseInterface;
  [PDD_MALL_INFO_GET]: PddMallInfoGetResponseInterface;
  [PDD_TRACE_SOURCE_UPLOAD_CODE_INFO]: PddTraceSourceUploadCodeInfoResponseInterface;
  [PDD_TRACE_SOURCE_UPLOAD_PLAN_INFO]: PddTraceSourceUploadPlanInfoResponseInterface;
  [PDD_TRACE_SOURCE_QUERY_GOODS_INFO]: PddTraceSourceQueryGoodsInfoResponseInterface;
  [PDD_OPEN_DECRYPT_BATCH]: PddOpenDecryptBatchResponseInterface;
  [PDD_OPEN_DECRYPT_MASK_BATCH]: PddOpenDecryptMaskBatchResponseInterface;
  [PDD_OPEN_KMS_ENCRYPT_BATCH]: PddOpenKmsEncryptBatchResponseInterface;
  [PDD_OPEN_KMS_SEARCH_BATCH]: PddOpenKmsSearchBatchResponseInterface;
  [PDD_OPEN_VIRTUAL_NUMBER_CHECK]: PddOpenVirtualNumberCheckResponseInterface;
  [PDD_POP_AUTH_TOKEN_CREATE]: PddPopAuthTokenCreateResponseInterface;
  [PDD_POP_AUTH_TOKEN_REFRESH]: PddPopAuthTokenRefreshResponseInterface;
  [PDD_TIME_GET]: PddTimeGetResponseInterface;
  [PDD_EXPRESS_ADD_DEPOT]: PddExpressAddDepotResponseInterface;
  [PDD_EXPRESS_CHANGE_DEPOT_INFO]: PddExpressChangeDepotInfoResponseInterface;
  [PDD_EXPRESS_DEPOT_INFO_GET]: PddExpressDepotInfoGetResponseInterface;
  [PDD_EXPRESS_DEPOT_LIST_GET]: PddExpressDepotListGetResponseInterface;
  [PDD_EXPRESS_MALL_DEPOT_SIMPLE_GET]: PddExpressMallDepotSimpleGetResponseInterface;
  [PDD_EXPRESS_SEARCH_DEPOT]: PddExpressSearchDepotResponseInterface;
  [PDD_STOCK_DEPOT_PRIORITY_LIST]: PddStockDepotPriorityListResponseInterface;
  [PDD_STOCK_DEPOT_PRIORITY_UPDATE]: PddStockDepotPriorityUpdateResponseInterface;
  [PDD_STOCK_GOODS_ID_TO_SKU_QUERY]: PddStockGoodsIdToSkuQueryResponseInterface;
  [PDD_STOCK_WARE_CREATE]: PddStockWareCreateResponseInterface;
  [PDD_STOCK_WARE_DELETE]: PddStockWareDeleteResponseInterface;
  [PDD_STOCK_WARE_DETAIL_QUERY]: PddStockWareDetailQueryResponseInterface;
  [PDD_STOCK_WARE_INFO_LIST]: PddStockWareInfoListResponseInterface;
  [PDD_STOCK_WARE_LIST]: PddStockWareListResponseInterface;
  [PDD_STOCK_WARE_MOVE]: PddStockWareMoveResponseInterface;
  [PDD_STOCK_WARE_SKU_UPDATE]: PddStockWareSkuUpdateResponseInterface;
  [PDD_STOCK_WARE_UPDATE]: PddStockWareUpdateResponseInterface;
  [PDD_STOCK_WARE_WAREHOUSE_QUERY]: PddStockWareWarehouseQueryResponseInterface;
  [PDD_PMC_ACCRUE_QUERY]: PddPmcAccrueQueryResponseInterface;
  [PDD_PMC_USER_CANCEL]: PddPmcUserCancelResponseInterface;
  [PDD_PMC_USER_GET]: PddPmcUserGetResponseInterface;
  [PDD_PMC_USER_PERMIT]: PddPmcUserPermitResponseInterface;
  [PDD_CLOUDPRINT_CMDPRINT_RENDER]: PddCloudprintCmdprintRenderResponseInterface;
  [PDD_CLOUDPRINT_CUSTOMARES_GET]: PddCloudprintCustomaresGetResponseInterface;
  [PDD_CLOUDPRINT_PORTABLEPRINTER_GET]: PddCloudprintPortableprinterGetResponseInterface;
  [PDD_CLOUDPRINT_STDTEMPLATES_GET]: PddCloudprintStdtemplatesGetResponseInterface;
  [PDD_WAYBILL_CANCEL]: PddWaybillCancelResponseInterface;
  [PDD_WAYBILL_GET]: PddWaybillGetResponseInterface;
  [PDD_WAYBILL_QUERY_BY_WAYBILLCODE]: PddWaybillQueryByWaybillcodeResponseInterface;
  [PDD_WAYBILL_SEARCH]: PddWaybillSearchResponseInterface;
  [PDD_WAYBILL_UPDATE]: PddWaybillUpdateResponseInterface;
  [PDD_FINANCE_BALANCE_DAILY_BILL_URL_GET]: PddFinanceBalanceDailyBillUrlGetResponseInterface;
  [PDD_SERVICEMARKET_CONTRACT_SEARCH]: PddServicemarketContractSearchResponseInterface;
  [PDD_SERVICEMARKET_SETTLEMENTBILL_GET]: PddServicemarketSettlementbillGetResponseInterface;
  [PDD_SERVICEMARKET_TRADELIST_GET]: PddServicemarketTradelistGetResponseInterface;
  [PDD_VAS_ORDER_SEARCH]: PddVasOrderSearchResponseInterface;
  [PDD_OPEN_MSG_SERVICE_QUERY_MSG_RECORD]: PddOpenMsgServiceQueryMsgRecordResponseInterface;
  [PDD_OPEN_MSG_SERVICE_SEND_BATCH_MSG]: PddOpenMsgServiceSendBatchMsgResponseInterface;
  [PDD_OPEN_MSG_SERVICE_SEND_EXPRESS_MSG]: PddOpenMsgServiceSendExpressMsgResponseInterface;
  [PDD_OPEN_MSG_SERVICE_SEND_MSG]: PddOpenMsgServiceSendMsgResponseInterface;
  [PDD_SMS_DETAILBILL_PUSH]: PddSmsDetailbillPushResponseInterface;
  [PDD_SMS_VENDOR_COMPLAINT_CREATE]: PddSmsVendorComplaintCreateResponseInterface;
  [PDD_AD_API_ADVERTISER_OPEN_ACCOUNT]: PddAdApiAdvertiserOpenAccountResponseInterface;
  [PDD_AD_API_ADVERTISER_QUERY_ACCOUNT_BALANCE]: PddAdApiAdvertiserQueryAccountBalanceResponseInterface;
  [PDD_AD_API_ADVERTISER_QUERY_ACCOUNT_INFO]: PddAdApiAdvertiserQueryAccountInfoResponseInterface;
  [PDD_AD_API_ADVERTISER_QUERY_DETAIL]: PddAdApiAdvertiserQueryDetailResponseInterface;
  [PDD_AD_API_GOODS_QUERY_GALLERY_IMAGES]: PddAdApiGoodsQueryGalleryImagesResponseInterface;
  [PDD_AD_API_GOODS_QUERY_LONG_IMAGES]: PddAdApiGoodsQueryLongImagesResponseInterface;
  [PDD_AD_API_GOODS_QUERY_PAGE]: PddAdApiGoodsQueryPageResponseInterface;
  [PDD_AD_API_KEYWORD_CREATE]: PddAdApiKeywordCreateResponseInterface;
  [PDD_AD_API_KEYWORD_DELETE]: PddAdApiKeywordDeleteResponseInterface;
  [PDD_AD_API_KEYWORD_QUERY_LIST]: PddAdApiKeywordQueryListResponseInterface;
  [PDD_AD_API_KEYWORD_RECOMMEND_GET]: PddAdApiKeywordRecommendGetResponseInterface;
  [PDD_AD_API_KEYWORD_RELEVANCE_GET]: PddAdApiKeywordRelevanceGetResponseInterface;
  [PDD_AD_API_KEYWORD_UPDATE]: PddAdApiKeywordUpdateResponseInterface;
  [PDD_AD_API_PLAN_CREATE]: PddAdApiPlanCreateResponseInterface;
  [PDD_AD_API_PLAN_DELETE]: PddAdApiPlanDeleteResponseInterface;
  [PDD_AD_API_PLAN_QUERY_CAN_CREATE_AD_PLAN]: PddAdApiPlanQueryCanCreateAdPlanResponseInterface;
  [PDD_AD_API_PLAN_QUERY_CAN_UPDATE_MAX_COST]: PddAdApiPlanQueryCanUpdateMaxCostResponseInterface;
  [PDD_AD_API_PLAN_QUERY_LIST]: PddAdApiPlanQueryListResponseInterface;
  [PDD_AD_API_PLAN_UPDATE_DATA_OPERATE_STATUS]: PddAdApiPlanUpdateDataOperateStatusResponseInterface;
  [PDD_AD_API_PLAN_UPDATE_MAX_COST]: PddAdApiPlanUpdateMaxCostResponseInterface;
  [PDD_AD_API_PLAN_UPDATE_PLAN_DISCOUNT]: PddAdApiPlanUpdatePlanDiscountResponseInterface;
  [PDD_AD_API_PLAN_UPDATE_PLAN_NAME]: PddAdApiPlanUpdatePlanNameResponseInterface;
  [PDD_AD_API_PLAN_UPDATE_PLAN_TO_OCPC]: PddAdApiPlanUpdatePlanToOcpcResponseInterface;
  [PDD_AD_API_REPORT_DAILY_REPORT_QUERY]: PddAdApiReportDailyReportQueryResponseInterface;
  [PDD_AD_API_REPORT_ENTITY_REPORT_QUERY]: PddAdApiReportEntityReportQueryResponseInterface;
  [PDD_AD_API_REPORT_HOURLY_REPORT_QUERY]: PddAdApiReportHourlyReportQueryResponseInterface;
  [PDD_AD_API_UNIT_BID_DELETE]: PddAdApiUnitBidDeleteResponseInterface;
  [PDD_AD_API_UNIT_BID_QUERY_BASE_LOCATION_PROFILE]: PddAdApiUnitBidQueryBaseLocationProfileResponseInterface;
  [PDD_AD_API_UNIT_BID_QUERY_BASE_TARGET_PROFILE]: PddAdApiUnitBidQueryBaseTargetProfileResponseInterface;
  [PDD_AD_API_UNIT_BID_QUERY_LIST]: PddAdApiUnitBidQueryListResponseInterface;
  [PDD_AD_API_UNIT_BID_QUERY_TARGETING_TAG_LIST]: PddAdApiUnitBidQueryTargetingTagListResponseInterface;
  [PDD_AD_API_UNIT_BID_SYNC]: PddAdApiUnitBidSyncResponseInterface;
  [PDD_AD_API_UNIT_BID_UPDATE]: PddAdApiUnitBidUpdateResponseInterface;
  [PDD_AD_API_UNIT_CREATE]: PddAdApiUnitCreateResponseInterface;
  [PDD_AD_API_UNIT_CREATIVE_CHECK_TITLE]: PddAdApiUnitCreativeCheckTitleResponseInterface;
  [PDD_AD_API_UNIT_CREATIVE_CREATE]: PddAdApiUnitCreativeCreateResponseInterface;
  [PDD_AD_API_UNIT_CREATIVE_DELETE]: PddAdApiUnitCreativeDeleteResponseInterface;
  [PDD_AD_API_UNIT_CREATIVE_DISTRIBUTE_FLOW_RATE]: PddAdApiUnitCreativeDistributeFlowRateResponseInterface;
  [PDD_AD_API_UNIT_CREATIVE_QUERY_FLOW_RATE]: PddAdApiUnitCreativeQueryFlowRateResponseInterface;
  [PDD_AD_API_UNIT_CREATIVE_QUERY_LIST]: PddAdApiUnitCreativeQueryListResponseInterface;
  [PDD_AD_API_UNIT_CREATIVE_UPDATE_CONTENT]: PddAdApiUnitCreativeUpdateContentResponseInterface;
  [PDD_AD_API_UNIT_CREATIVE_UPDATE_DATA_OPERATE_STATUS]: PddAdApiUnitCreativeUpdateDataOperateStatusResponseInterface;
  [PDD_AD_API_UNIT_CREATIVE_UPDATE_SMART_CREATIVE]: PddAdApiUnitCreativeUpdateSmartCreativeResponseInterface;
  [PDD_AD_API_UNIT_DELETE]: PddAdApiUnitDeleteResponseInterface;
  [PDD_AD_API_UNIT_QUERY_LIST]: PddAdApiUnitQueryListResponseInterface;
  [PDD_AD_API_UNIT_UPDATE_DATA_OPERATE_STATUS]: PddAdApiUnitUpdateDataOperateStatusResponseInterface;
  [PDD_AD_API_UNIT_UPDATE_OPTIMIZATION_MESSAGE]: PddAdApiUnitUpdateOptimizationMessageResponseInterface;
  [PDD_AD_API_UNIT_UPDATE_UNIT_BID]: PddAdApiUnitUpdateUnitBidResponseInterface;
  [PDD_AD_API_UNIT_UPDATE_UNIT_NAME]: PddAdApiUnitUpdateUnitNameResponseInterface;
  [PDD_FDS_ORDER_GET]: PddFdsOrderGetResponseInterface;
  [PDD_FDS_ORDER_LIST_GET]: PddFdsOrderListGetResponseInterface;
  [PDD_FDS_ROLE_GET]: PddFdsRoleGetResponseInterface;
  [PDD_FDS_WAYBILL_CANCEL]: PddFdsWaybillCancelResponseInterface;
  [PDD_FDS_WAYBILL_GET]: PddFdsWaybillGetResponseInterface;
  [PDD_FDS_WAYBILL_RETURN]: PddFdsWaybillReturnResponseInterface;
  [PDD_FDS_WAYBILL_RETURN_SLAVE]: PddFdsWaybillReturnSlaveResponseInterface;
  [PDD_MALL_INFO_GROUP_ADD_POST]: PddMallInfoGroupAddPostResponseInterface;
  [PDD_MALL_INFO_GROUP_ADD_STORE_POST]: PddMallInfoGroupAddStorePostResponseInterface;
  [PDD_MALL_INFO_GROUP_DELETE_POST]: PddMallInfoGroupDeletePostResponseInterface;
  [PDD_MALL_INFO_GROUP_LIST_STORE_GET]: PddMallInfoGroupListStoreGetResponseInterface;
  [PDD_MALL_INFO_GROUP_QUERY_POST]: PddMallInfoGroupQueryPostResponseInterface;
  [PDD_MALL_INFO_GROUP_REMOVE_STORE_GET]: PddMallInfoGroupRemoveStoreGetResponseInterface;
  [PDD_MALL_INFO_GROUP_UPDATE_POST]: PddMallInfoGroupUpdatePostResponseInterface;
  [PDD_MALL_INFO_STORE_CREATE_POST]: PddMallInfoStoreCreatePostResponseInterface;
  [PDD_MALL_INFO_STORE_CREATE_POST_NOPOI]: PddMallInfoStoreCreatePostNopoiResponseInterface;
  [PDD_MALL_INFO_STORE_DELETE_POST]: PddMallInfoStoreDeletePostResponseInterface;
  [PDD_MALL_INFO_STORE_GET]: PddMallInfoStoreGetResponseInterface;
  [PDD_MALL_INFO_STORE_UPDATE_POST]: PddMallInfoStoreUpdatePostResponseInterface;
  [PDD_MALL_INFO_STORE_UPDATE_POST_NOPOI]: PddMallInfoStoreUpdatePostNopoiResponseInterface;
  [PDD_QRPAY_PAYEE_REGISTER]: PddQrpayPayeeRegisterResponseInterface;
  [PDD_MALL_INFO_BONDED_WAREHOUSE_GET]: PddMallInfoBondedWarehouseGetResponseInterface;
  [PDD_OVERSEA_CLEARANCE_GET]: PddOverseaClearanceGetResponseInterface;
  [PDD_OVERSEA_DECLARATION_FAIL_NOTIFY]: PddOverseaDeclarationFailNotifyResponseInterface;
  [PDD_TICKET_AREACODE_GET]: PddTicketAreacodeGetResponseInterface;
  [PDD_TICKET_GOODS_QUERY]: PddTicketGoodsQueryResponseInterface;
  [PDD_TICKET_GOODS_UPLOAD]: PddTicketGoodsUploadResponseInterface;
  [PDD_TICKET_ORDER_CREATE_NOTIFYCATION]: PddTicketOrderCreateNotifycationResponseInterface;
  [PDD_TICKET_ORDER_REFUND_NOTIFYCATION]: PddTicketOrderRefundNotifycationResponseInterface;
  [PDD_TICKET_SCENIC_GET]: PddTicketScenicGetResponseInterface;
  [PDD_TICKET_SKU_RULE_ADD]: PddTicketSkuRuleAddResponseInterface;
  [PDD_TICKET_SKU_RULE_EDIT]: PddTicketSkuRuleEditResponseInterface;
  [PDD_TICKET_SKU_RULE_GET]: PddTicketSkuRuleGetResponseInterface;
  [PDD_TICKET_VERIFICATION_NOTIFYCATION]: PddTicketVerificationNotifycationResponseInterface;
  [PDD_CLOUD_ISV_PAGE_CODE]: PddCloudIsvPageCodeResponseInterface;
  [PDD_CLOUD_SECURITY_EVENT_TRACKING_BATCH_ORDER]: PddCloudSecurityEventTrackingBatchOrderResponseInterface;
  [PDD_CLOUD_SECURITY_EVENT_TRACKING_LOGIN]: PddCloudSecurityEventTrackingLoginResponseInterface;
  [PDD_DDY_PDP_USER_ADD]: PddDdyPdpUserAddResponseInterface;
  [PDD_DDY_PDP_USER_DELETE]: PddDdyPdpUserDeleteResponseInterface;
  [PDD_DDY_PDP_USERS_GET]: PddDdyPdpUsersGetResponseInterface;
  [PDD_CLOUD_DTS_ORDER_LIST_INCREMENT_GET]: PddCloudDtsOrderListIncrementGetResponseInterface;
  [PDD_CLOUD_LOGISTICS_ONLINE_SEND]: PddCloudLogisticsOnlineSendResponseInterface;
  [PDD_CLOUD_WAYBILL_GET]: PddCloudWaybillGetResponseInterface;
  [PDD_CLOUD_WAYBILL_UPDATE]: PddCloudWaybillUpdateResponseInterface;
  [PDD_CLOUD_WEBSESSION_SEND]: PddCloudWebsessionSendResponseInterface;
  [PDD_CLOUD_WMS_ORDER_SEND]: PddCloudWmsOrderSendResponseInterface;
}
export interface PddCollectShortResponseInterface {
  [PDD_LOGISTICS_ADDRESS_GET]: PddLogisticsAddressGetLogisticsAddressGetResponseResponseInterface;
  [PDD_LOGISTICS_AVAILABLE_COMPANY_RECOMMEND]: PddLogisticsAvailableCompanyRecommendResponseInterface;
  [PDD_LOGISTICS_COMPANIES_GET]: PddLogisticsCompaniesGetLogisticsCompaniesGetResponseResponseInterface;
  [PDD_LOGISTICS_ISV_TRACE_NOTIFY_SUB]: PddLogisticsIsvTraceNotifySubResponseInterface;
  [PDD_LOGISTICS_ONLINE_SEND]: PddLogisticsOnlineSendLogisticsOnlineSendResponseResponseInterface;
  [PDD_LOGISTICS_ORDERTRACE_GET]: PddLogisticsOrdertraceGetResponseInterface;
  [PDD_ERP_ORDER_SYNC]: PddErpOrderSyncResponseInterface;
  [PDD_ORDER_BASIC_LIST_GET]: PddOrderBasicListGetOrderBasicListGetResponseResponseInterface;
  [PDD_ORDER_INFORMATION_GET]: PddOrderInformationGetOrderInfoGetResponseResponseInterface;
  [PDD_ORDER_LIST_GET]: PddOrderListGetOrderListGetResponseResponseInterface;
  [PDD_ORDER_NOTE_UPDATE]: PddOrderNoteUpdateResponseInterface;
  [PDD_ORDER_NUMBER_LIST_INCREMENT_GET]: PddOrderNumberListIncrementGetOrderSnIncrementGetResponseResponseInterface;
  [PDD_ORDER_PROMISE_INFO_GET]: PddOrderPromiseInfoGetPromiseInfoGetResponseResponseInterface;
  [PDD_ORDER_STATUS_GET]: PddOrderStatusGetOrderStatusGetResponseResponseInterface;
  [PDD_ORDER_UPDATE_ADDRESS]: PddOrderUpdateAddressResponseInterface;
  [PDD_ORDER_UPLOAD_EXTRA_LOGISTICS]: PddOrderUploadExtraLogisticsUploadExtraLogisticsResponseResponseInterface;
  [PDD_ORDER_UPLOAD_RELATION_LOGISTICS]: PddOrderUploadRelationLogisticsUploadExtraLogisticsResponseResponseInterface;
  [PDD_ORDER_VIRTUAL_INFORMATION_GET]: PddOrderVirtualInformationGetOrderVirtualInformationResponseResponseInterface;
  [PDD_NEXTONE_LOGISTICS_WAREHOUSE_UPDATE]: PddNextoneLogisticsWarehouseUpdateResponseInterface;
  [PDD_RDC_PDDGENIUS_SENDGOODS_CANCEL]: PddRdcPddgeniusSendgoodsCancelRdcPddgeniusSendgoodsCancelResponseResponseInterface;
  [PDD_REFUND_ADDRESS_LIST_GET]: PddRefundAddressListGetRefundAddressListGetResponseResponseInterface;
  [PDD_REFUND_AGREE]: PddRefundAgreeResponseInterface;
  [PDD_REFUND_EXCHANGE_SHIPPING]: PddRefundExchangeShippingResponseInterface;
  [PDD_REFUND_INFORMATION_GET]: PddRefundInformationGetResponseInterface;
  [PDD_REFUND_LIST_INCREMENT_GET]: PddRefundListIncrementGetRefundIncrementGetResponseResponseInterface;
  [PDD_REFUND_RETURNGOODS_AGREE]: PddRefundReturngoodsAgreeResponseInterface;
  [PDD_REFUND_STATUS_CHECK]: PddRefundStatusCheckRefundStatusCheckResponseResponseInterface;
  [PDD_VIRTUAL_GAME_SERVER_QUERY]: PddVirtualGameServerQueryGameServerQueryResponseResponseInterface;
  [PDD_VIRTUAL_MOBILE_CHARGE_NOTIFY]: PddVirtualMobileChargeNotifyMobileChargeNotifyResponseResponseInterface;
  [PDD_DELETE_DRAFT_COMMIT]: PddDeleteDraftCommitResponseInterface;
  [PDD_DELETE_GOODS_COMMIT]: PddDeleteGoodsCommitResponseInterface;
  [PDD_GOODS_ADD]: PddGoodsAddGoodsAddResponseResponseInterface;
  [PDD_GOODS_ADVICE_PRICE_GET]: PddGoodsAdvicePriceGetGoodsAdvicePriceGetResponseResponseInterface;
  [PDD_GOODS_AUTHORIZATION_CATS]: PddGoodsAuthorizationCatsGoodsAuthCatsGetResponseResponseInterface;
  [PDD_GOODS_CAT_RULE_GET]: PddGoodsCatRuleGetCatRuleGetResponseResponseInterface;
  [PDD_GOODS_CAT_TEMPLATE_GET]: PddGoodsCatTemplateGetOpenApiResponseResponseInterface;
  [PDD_GOODS_CATS_GET]: PddGoodsCatsGetGoodsCatsGetResponseResponseInterface;
  [PDD_GOODS_CHILD_SKU_EDIT]: PddGoodsChildSkuEditChildSkuEditResponseResponseInterface;
  [PDD_GOODS_COMMIT_DETAIL_GET]: PddGoodsCommitDetailGetGoodsCommitDetailResponseResponseInterface;
  [PDD_GOODS_COMMIT_LIST_GET]: PddGoodsCommitListGetGoodsCommitListGetResponseResponseInterface;
  [PDD_GOODS_COMMIT_STATUS_GET]: PddGoodsCommitStatusGetGoodsCommitStatusGetResponseResponseInterface;
  [PDD_GOODS_COUNTRY_GET]: PddGoodsCountryGetGoodsCountryGetResponseResponseInterface;
  [PDD_GOODS_CPS_MALL_UNIT_CHANGE]: PddGoodsCpsMallUnitChangeGoodsCpsMallUnitChangeResponseResponseInterface;
  [PDD_GOODS_CPS_MALL_UNIT_CREATE]: PddGoodsCpsMallUnitCreateResponseInterface;
  [PDD_GOODS_CPS_MALL_UNIT_PAUSE]: PddGoodsCpsMallUnitPauseGoodsCpsMallUnitPauseResponseResponseInterface;
  [PDD_GOODS_CPS_MALL_UNIT_QUERY]: PddGoodsCpsMallUnitQueryGoodsCpsMallUnitQueryResponseResponseInterface;
  [PDD_GOODS_CPS_MALL_UNIT_RESUME]: PddGoodsCpsMallUnitResumeGoodsCpsMallUnitResumeResponseResponseInterface;
  [PDD_GOODS_CPS_UNIT_CHANGE]: PddGoodsCpsUnitChangeResponseInterface;
  [PDD_GOODS_CPS_UNIT_CREATE]: PddGoodsCpsUnitCreateResponseInterface;
  [PDD_GOODS_CPS_UNIT_DELETE]: PddGoodsCpsUnitDeleteGoodsCpsUnitDeleteResponseResponseInterface;
  [PDD_GOODS_CPS_UNIT_QUERY]: PddGoodsCpsUnitQueryResponseInterface;
  [PDD_GOODS_DETAIL_GET]: PddGoodsDetailGetGoodsDetailGetResponseResponseInterface;
  [PDD_GOODS_EDIT_GOODS_COMMIT]: PddGoodsEditGoodsCommitGoodsUpdateResponseResponseInterface;
  [PDD_GOODS_FILE_INFO_GET]: PddGoodsFileInfoGetGoodsFileInfoResponseResponseInterface;
  [PDD_GOODS_FILESPACE_IMAGE_UPLOAD]: PddGoodsFilespaceImageUploadGoodsFilespaceImageUploadResponseResponseInterface;
  [PDD_GOODS_IMAGE_UPLOAD]: PddGoodsImageUploadGoodsImageUploadResponseResponseInterface;
  [PDD_GOODS_IMG_UPLOAD]: PddGoodsImgUploadGoodsImgUploadResponseResponseInterface;
  [PDD_GOODS_INFORMATION_GET]: PddGoodsInformationGetGoodsInfoGetResponseResponseInterface;
  [PDD_GOODS_INFORMATION_UPDATE]: PddGoodsInformationUpdateGoodsUpdateResponseResponseInterface;
  [PDD_GOODS_LATEST_COMMIT_STATUS_GET]: PddGoodsLatestCommitStatusGetGoodsLatestCommitStatusGetResponseResponseInterface;
  [PDD_GOODS_LIST_GET]: PddGoodsListGetGoodsListGetResponseResponseInterface;
  [PDD_GOODS_LOGISTICS_SER_TEMPLATE_CREATE]: PddGoodsLogisticsSerTemplateCreateGoodsLogisticsSerTemplateCreateResponseResponseInterface;
  [PDD_GOODS_LOGISTICS_SER_TEMPLATE_DELETE]: PddGoodsLogisticsSerTemplateDeleteGoodsLogisticsSerTemplateDeleteResponseResponseInterface;
  [PDD_GOODS_LOGISTICS_SER_TEMPLATE_DETAIL]: PddGoodsLogisticsSerTemplateDetailGoodsLogisticsSerTemplateDetailResponseResponseInterface;
  [PDD_GOODS_LOGISTICS_SER_TEMPLATE_LIST]: PddGoodsLogisticsSerTemplateListGoodsLogisticsSerTemplateListResponseResponseInterface;
  [PDD_GOODS_LOGISTICS_SER_TEMPLATE_UPDATE]: PddGoodsLogisticsSerTemplateUpdateGoodsLogisticsSerTemplateUpdateResponseResponseInterface;
  [PDD_GOODS_LOGISTICS_TEMPLATE_CREATE]: PddGoodsLogisticsTemplateCreateGoodsLogisticsTemplateCreateResponseResponseInterface;
  [PDD_GOODS_LOGISTICS_TEMPLATE_GET]: PddGoodsLogisticsTemplateGetGoodsLogisticsTemplateGetResponseResponseInterface;
  [PDD_GOODS_MATERIAL_CREATE]: PddGoodsMaterialCreateResponseInterface;
  [PDD_GOODS_MATERIAL_DELETE]: PddGoodsMaterialDeleteResponseInterface;
  [PDD_GOODS_MATERIAL_QUERY]: PddGoodsMaterialQueryResponseInterface;
  [PDD_GOODS_OPT_GET]: PddGoodsOptGetGoodsOptGetResponseResponseInterface;
  [PDD_GOODS_OUT_PROPERTY_MAPPING_GET]: PddGoodsOutPropertyMappingGetOutPropertyMappingGetResponseResponseInterface;
  [PDD_GOODS_OUTER_CAT_MAPPING_GET]: PddGoodsOuterCatMappingGetOuterCatMappingGetResponseResponseInterface;
  [PDD_GOODS_PRICE_CHECK]: PddGoodsPriceCheckGoodsidPriceCheckResponseResponseInterface;
  [PDD_GOODS_QUANTITY_UPDATE]: PddGoodsQuantityUpdateGoodsQuantityUpdateResponseResponseInterface;
  [PDD_GOODS_SALE_STATUS_SET]: PddGoodsSaleStatusSetGoodsSaleStatusSetResponseResponseInterface;
  [PDD_GOODS_SIZESPEC_CLASS_GET]: PddGoodsSizespecClassGetResponseInterface;
  [PDD_GOODS_SIZESPEC_META_GET]: PddGoodsSizespecMetaGetResponseInterface;
  [PDD_GOODS_SIZESPEC_TEMPLATE_ADD]: PddGoodsSizespecTemplateAddResponseInterface;
  [PDD_GOODS_SIZESPEC_TEMPLATE_DELETE]: PddGoodsSizespecTemplateDeleteResponseInterface;
  [PDD_GOODS_SIZESPEC_TEMPLATE_GET]: PddGoodsSizespecTemplateGetResponseInterface;
  [PDD_GOODS_SIZESPEC_TEMPLATE_UPDATE]: PddGoodsSizespecTemplateUpdateResponseInterface;
  [PDD_GOODS_SIZESPEC_TEMPLATES_GET]: PddGoodsSizespecTemplatesGetResponseInterface;
  [PDD_GOODS_SKU_PRICE_UPDATE]: PddGoodsSkuPriceUpdateGoodsUpdateSkuPriceResponseResponseInterface;
  [PDD_GOODS_SKUS_GET]: PddGoodsSkusGetGoodsSkuGetResponseResponseInterface;
  [PDD_GOODS_SPEC_GET]: PddGoodsSpecGetGoodsSpecGetResponseResponseInterface;
  [PDD_GOODS_SPEC_ID_GET]: PddGoodsSpecIdGetGoodsSpecIdGetResponseResponseInterface;
  [PDD_GOODS_SPU_GET]: PddGoodsSpuGetSpuGetResponseResponseInterface;
  [PDD_GOODS_SPU_SEARCH]: PddGoodsSpuSearchSpuSearchResponseResponseInterface;
  [PDD_GOODS_SUBMIT_GOODS_COMMIT]: PddGoodsSubmitGoodsCommitGoodsUpdateResponseResponseInterface;
  [PDD_GOODS_TEMPLATE_PROPERTY_VALUE_SEARCH]: PddGoodsTemplatePropertyValueSearchGoodsTemplatePropValSearchResponseResponseInterface;
  [PDD_GOOODS_SKU_MEASUREMENT_LIST]: PddGooodsSkuMeasurementListGooodsSkuMeasurementListResponseResponseInterface;
  [PDD_ONE_EXPRESS_COST_TEMPLATE]: PddOneExpressCostTemplateOneExpressCostTemplateResponseResponseInterface;
  [PDD_DDK_GOODS_PID_GENERATE]: PddDdkGoodsPidGeneratePIdGenerateResponseResponseInterface;
  [PDD_DDK_CASHGIFT_STATUS_UPDATE]: PddDdkCashgiftStatusUpdateUpdateCashgiftResponseResponseInterface;
  [PDD_DDK_GOODS_PID_QUERY]: PddDdkGoodsPidQueryPIdQueryResponseResponseInterface;
  [PDD_DDK_PID_MEDIAID_BIND]: PddDdkPidMediaidBindPIdBindResponseResponseInterface;
  [PDD_DDK_GOODS_ZS_UNIT_URL_GEN]: PddDdkGoodsZsUnitUrlGenGoodsZsUnitGenerateResponseResponseInterface;
  [PDD_DDK_MEMBER_AUTHORITY_QUERY]: PddDdkMemberAuthorityQueryAuthorityQueryResponseResponseInterface;
  [PDD_DDK_CASHGIFT_DATA_QUERY]: PddDdkCashgiftDataQueryCashgiftDataResponseResponseInterface;
  [PDD_DDK_STATISTICS_DATA_QUERY]: PddDdkStatisticsDataQueryStatisticsDataResponseResponseInterface;
  [PDD_DDK_CMS_PROM_URL_GENERATE]: PddDdkCmsPromUrlGenerateCmsPromotionUrlGenerateResponseResponseInterface;
  [PDD_DDK_GOODS_PROMOTION_URL_GENERATE]: PddDdkGoodsPromotionUrlGenerateGoodsPromotionUrlGenerateResponseResponseInterface;
  [PDD_DDK_ORDER_LIST_RANGE_GET]: PddDdkOrderListRangeGetOrderListGetResponseResponseInterface;
  [PDD_DDK_GOODS_SEARCH]: PddDdkGoodsSearchGoodsSearchResponseResponseInterface;
  [PDD_DDK_GOODS_DETAIL]: PddDdkGoodsDetailGoodsDetailResponseResponseInterface;
  [PDD_DDK_RESOURCE_URL_GEN]: PddDdkResourceUrlGenResourceUrlResponseResponseInterface;
  [PDD_DDK_CASHGIFT_CREATE]: PddDdkCashgiftCreateCreateCashgiftResponseResponseInterface;
  [PDD_DDK_ORDER_DETAIL_GET]: PddDdkOrderDetailGetOrderDetailResponseResponseInterface;
  [PDD_DDK_ORDER_LIST_INCREMENT_GET]: PddDdkOrderListIncrementGetOrderListGetResponseResponseInterface;
  [PDD_DDK_GOODS_RECOMMEND_GET]: PddDdkGoodsRecommendGetGoodsBasicDetailResponseResponseInterface;
  [PDD_DDK_RP_PROM_URL_GENERATE]: PddDdkRpPromUrlGenerateRpPromotionUrlGenerateResponseResponseInterface;
  [PDD_DDK_ALL_ORDER_LIST_INCREMENT_GET]: PddDdkAllOrderListIncrementGetOrderListGetResponseResponseInterface;
  [PDD_DDK_OAUTH_CASHGIFT_CREATE]: PddDdkOauthCashgiftCreateCreateCashgiftResponseResponseInterface;
  [PDD_DDK_OAUTH_CASHGIFT_STATUS_UPDATE]: PddDdkOauthCashgiftStatusUpdateUpdateCashgiftResponseResponseInterface;
  [PDD_DDK_OAUTH_CMS_PROM_URL_GENERATE]: PddDdkOauthCmsPromUrlGenerateCmsPromotionUrlGenerateResponseResponseInterface;
  [PDD_DDK_OAUTH_GOODS_DETAIL]: PddDdkOauthGoodsDetailGoodsDetailResponseResponseInterface;
  [PDD_DDK_OAUTH_GOODS_PID_GENERATE]: PddDdkOauthGoodsPidGeneratePIdGenerateResponseResponseInterface;
  [PDD_DDK_OAUTH_GOODS_PID_QUERY]: PddDdkOauthGoodsPidQueryPIdQueryResponseResponseInterface;
  [PDD_DDK_OAUTH_GOODS_PROM_URL_GENERATE]: PddDdkOauthGoodsPromUrlGenerateGoodsPromotionUrlGenerateResponseResponseInterface;
  [PDD_DDK_OAUTH_GOODS_RECOMMEND_GET]: PddDdkOauthGoodsRecommendGetGoodsBasicDetailResponseResponseInterface;
  [PDD_DDK_OAUTH_GOODS_SEARCH]: PddDdkOauthGoodsSearchGoodsSearchResponseResponseInterface;
  [PDD_DDK_OAUTH_GOODS_ZS_UNIT_URL_GEN]: PddDdkOauthGoodsZsUnitUrlGenGoodsZsUnitGenerateResponseResponseInterface;
  [PDD_DDK_OAUTH_MEMBER_AUTHORITY_QUERY]: PddDdkOauthMemberAuthorityQueryAuthorityQueryResponseResponseInterface;
  [PDD_DDK_OAUTH_ORDER_DETAIL_GET]: PddDdkOauthOrderDetailGetOrderDetailResponseResponseInterface;
  [PDD_DDK_OAUTH_PID_MEDIAID_BIND]: PddDdkOauthPidMediaidBindPIdBindResponseResponseInterface;
  [PDD_DDK_OAUTH_RESOURCE_URL_GEN]: PddDdkOauthResourceUrlGenResourceUrlResponseResponseInterface;
  [PDD_DDK_OAUTH_RP_PROM_URL_GENERATE]: PddDdkOauthRpPromUrlGenerateRpPromotionUrlGenerateResponseResponseInterface;
  [PDD_DDK_OAUTH_WEAPP_QRCODE_URL_GEN]: PddDdkOauthWeappQrcodeUrlGenWeappQrcodeGenerateResponseResponseInterface;
  [PDD_LOGISTICS_CS_HISTORY_MESSAGE_GET]: PddLogisticsCsHistoryMessageGetLogisticsCsHistoryMessageGetResponseResponseInterface;
  [PDD_LOGISTICS_CS_MESSAGE_SEND]: PddLogisticsCsMessageSendLogisticsCsMessageSendResponseResponseInterface;
  [PDD_LOGISTICS_CS_SESSION_CLOSE]: PddLogisticsCsSessionCloseLogisticsCsSessionCloseResponseResponseInterface;
  [PDD_LOGISTICS_CS_SESSION_START]: PddLogisticsCsSessionStartLogisticsCsSessionStartResponseResponseInterface;
  [PDD_LOGISTICS_TICKET_GET]: PddLogisticsTicketGetLogisticsTicketGetResponseResponseInterface;
  [PDD_LOGISTICS_TICKET_IMAGE_UPLOAD]: PddLogisticsTicketImageUploadLogisticsTicketImageUploadResponseResponseInterface;
  [PDD_LOGISTICS_TICKET_NOTIFY]: PddLogisticsTicketNotifyLogisticsTicketNotifyResponseResponseInterface;
  [PDD_LOGISTICS_TICKET_PROBLEM_TYPE_GET]: PddLogisticsTicketProblemTypeGetLogisticsProblemTypeGetResponseResponseInterface;
  [PDD_SERVICE_MAIL_BIZACTION_NOTIFY]: PddServiceMailBizactionNotifyResponseInterface;
  [PDD_LOGISTICS_CO_TRACK_SUB]: PddLogisticsCoTrackSubResponseInterface;
  [PDD_SERVICE_MAIL_ORDER_FC_AUTH]: PddServiceMailOrderFcAuthResponseInterface;
  [PDD_SERVICE_MAIL_SERVICE_TIME_QUERY]: PddServiceMailServiceTimeQueryResponseInterface;
  [PDD_PROMOTION_COUPON_CLOSE]: PddPromotionCouponClosePromotionCouponBatchCloseResponseResponseInterface;
  [PDD_PROMOTION_COUPON_QUANTITY_ADD]: PddPromotionCouponQuantityAddCouponQuantityAddResponseResponseInterface;
  [PDD_PROMOTION_GOODS_COUPON_CREATE]: PddPromotionGoodsCouponCreateGoodsCouponBatchCreateResponseResponseInterface;
  [PDD_PROMOTION_GOODS_COUPON_LIST_GET]: PddPromotionGoodsCouponListGetGoodsCouponBatchListResponseResponseInterface;
  [PDD_PROMOTION_HOME_COUPON_CREATE]: PddPromotionHomeCouponCreateHomeCouponBatchCreateResponseResponseInterface;
  [PDD_PROMOTION_LIMITED_ACTIVITY_CANCEL]: PddPromotionLimitedActivityCancelResponseInterface;
  [PDD_PROMOTION_LIMITED_ACTIVITY_CREATE]: PddPromotionLimitedActivityCreateResponseInterface;
  [PDD_PROMOTION_LIMITED_DISCOUNT_LIST_GET]: PddPromotionLimitedDiscountListGetResponseInterface;
  [PDD_PROMOTION_LIMITED_QUALIFIED_GOODS_GET]: PddPromotionLimitedQualifiedGoodsGetResponseInterface;
  [PDD_PROMOTION_LIMITED_QUALIFIED_SKU_GET]: PddPromotionLimitedQualifiedSkuGetResponseInterface;
  [PDD_PROMOTION_MERCHANT_COUPON_LIST_GET]: PddPromotionMerchantCouponListGetMerchantCouponBatchListResponseResponseInterface;
  [PDD_VOUCHER_APPOINTMENT_INFO_SEND]: PddVoucherAppointmentInfoSendVoucherAppointmentInfoSendResponseResponseInterface;
  [PDD_VOUCHER_OTA_CARD_PREPARE_VERIFICATION]: PddVoucherOtaCardPrepareVerificationResponseInterface;
  [PDD_VOUCHER_OTA_CARD_VERIFICATION]: PddVoucherOtaCardVerificationVoucherOtaCardVerificationResponseResponseInterface;
  [PDD_VOUCHER_PHYSICAL_GOODS_SEND]: PddVoucherPhysicalGoodsSendVoucherPhysicalVoucherSendResponseResponseInterface;
  [PDD_VOUCHER_REALTIME_ORDERNO_GET]: PddVoucherRealtimeOrdernoGetResponseInterface;
  [PDD_VOUCHER_REALTIME_VERIFY_SYNC]: PddVoucherRealtimeVerifySyncResponseInterface;
  [PDD_VOUCHER_VIRTUAL_CARD_BATCH_ADD]: PddVoucherVirtualCardBatchAddResponseInterface;
  [PDD_VOUCHER_VIRTUAL_CARD_VERIFICATION]: PddVoucherVirtualCardVerificationVoucherVoucherInfoVerifyResponseResponseInterface;
  [PDD_VOUCHER_VOUCHER_COMPLAIN]: PddVoucherVoucherComplainVoucherVoucherComplainResponseResponseInterface;
  [PDD_VOUCHER_VOUCHER_INFO_SEND]: PddVoucherVoucherInfoSendVoucherVoucherInfoSendResponseResponseInterface;
  [PDD_EINVOICE_INFO_QUERY]: PddEinvoiceInfoQueryEinvoiceInfoQueryResponseResponseInterface;
  [PDD_INVOICE_APPLICATION_QUERY]: PddInvoiceApplicationQueryInvoiceApplicationQueryResponseResponseInterface;
  [PDD_INVOICE_DETAIL_INVALID]: PddInvoiceDetailInvalidInvoiceDetailInvalidResponseResponseInterface;
  [PDD_INVOICE_DETAIL_UPLOAD]: PddInvoiceDetailUploadInvoiceDetailUploadResponseResponseInterface;
  [PDD_MALL_CPS_PROTOCOL_STATUS_QUERY]: PddMallCpsProtocolStatusQueryMallCpsProtocolStatusQueryResponseResponseInterface;
  [PDD_MALL_INFO_GET]: PddMallInfoGetMallInfoGetResponseResponseInterface;
  [PDD_TRACE_SOURCE_UPLOAD_CODE_INFO]: PddTraceSourceUploadCodeInfoResponseInterface;
  [PDD_TRACE_SOURCE_UPLOAD_PLAN_INFO]: PddTraceSourceUploadPlanInfoResponseInterface;
  [PDD_TRACE_SOURCE_QUERY_GOODS_INFO]: PddTraceSourceQueryGoodsInfoResponseInterface;
  [PDD_OPEN_DECRYPT_BATCH]: PddOpenDecryptBatchOpenDecryptBatchResponseResponseInterface;
  [PDD_OPEN_DECRYPT_MASK_BATCH]: PddOpenDecryptMaskBatchOpenDecryptMaskBatchResponseResponseInterface;
  [PDD_OPEN_KMS_ENCRYPT_BATCH]: PddOpenKmsEncryptBatchOpenKmsEncryptBatchResponseResponseInterface;
  [PDD_OPEN_KMS_SEARCH_BATCH]: PddOpenKmsSearchBatchOpenKmsSearchBatchResponseResponseInterface;
  [PDD_OPEN_VIRTUAL_NUMBER_CHECK]: PddOpenVirtualNumberCheckOpenVirtualNumberCheckResponseResponseInterface;
  [PDD_POP_AUTH_TOKEN_CREATE]: PddPopAuthTokenCreatePopAuthTokenCreateResponseResponseInterface;
  [PDD_POP_AUTH_TOKEN_REFRESH]: PddPopAuthTokenRefreshPopAuthTokenRefreshResponseResponseInterface;
  [PDD_TIME_GET]: PddTimeGetTimeGetResponseResponseInterface;
  [PDD_EXPRESS_ADD_DEPOT]: PddExpressAddDepotResponseInterface;
  [PDD_EXPRESS_CHANGE_DEPOT_INFO]: PddExpressChangeDepotInfoResponseInterface;
  [PDD_EXPRESS_DEPOT_INFO_GET]: PddExpressDepotInfoGetOpenApiResponseResponseInterface;
  [PDD_EXPRESS_DEPOT_LIST_GET]: PddExpressDepotListGetOpenApiResponseResponseInterface;
  [PDD_EXPRESS_MALL_DEPOT_SIMPLE_GET]: PddExpressMallDepotSimpleGetOpenApiResponseResponseInterface;
  [PDD_EXPRESS_SEARCH_DEPOT]: PddExpressSearchDepotOpenApiResponseResponseInterface;
  [PDD_STOCK_DEPOT_PRIORITY_LIST]: PddStockDepotPriorityListOpenApiResponseResponseInterface;
  [PDD_STOCK_DEPOT_PRIORITY_UPDATE]: PddStockDepotPriorityUpdateResponseInterface;
  [PDD_STOCK_GOODS_ID_TO_SKU_QUERY]: PddStockGoodsIdToSkuQueryOpenApiResponseResponseInterface;
  [PDD_STOCK_WARE_CREATE]: PddStockWareCreateResponseInterface;
  [PDD_STOCK_WARE_DELETE]: PddStockWareDeleteResponseInterface;
  [PDD_STOCK_WARE_DETAIL_QUERY]: PddStockWareDetailQueryOpenApiResponseResponseInterface;
  [PDD_STOCK_WARE_INFO_LIST]: PddStockWareInfoListStockWareInfoListResponseResponseInterface;
  [PDD_STOCK_WARE_LIST]: PddStockWareListOpenApiResponseResponseInterface;
  [PDD_STOCK_WARE_MOVE]: PddStockWareMoveResponseInterface;
  [PDD_STOCK_WARE_SKU_UPDATE]: PddStockWareSkuUpdateResponseInterface;
  [PDD_STOCK_WARE_UPDATE]: PddStockWareUpdateResponseInterface;
  [PDD_STOCK_WARE_WAREHOUSE_QUERY]: PddStockWareWarehouseQueryResponseInterface;
  [PDD_PMC_ACCRUE_QUERY]: PddPmcAccrueQueryPmcUserGetResponseResponseInterface;
  [PDD_PMC_USER_CANCEL]: PddPmcUserCancelTmcUserCancelResponseResponseInterface;
  [PDD_PMC_USER_GET]: PddPmcUserGetPmcUserGetResponseResponseInterface;
  [PDD_PMC_USER_PERMIT]: PddPmcUserPermitPmcUserPermitResponseResponseInterface;
  [PDD_CLOUDPRINT_CMDPRINT_RENDER]: PddCloudprintCmdprintRenderCloudprintCmdprintRenderResponseResponseInterface;
  [PDD_CLOUDPRINT_CUSTOMARES_GET]: PddCloudprintCustomaresGetPddCloudprintCustomaresGetResponseResponseInterface;
  [PDD_CLOUDPRINT_PORTABLEPRINTER_GET]: PddCloudprintPortableprinterGetPddCloudprintPortableprinterGetResponseResponseInterface;
  [PDD_CLOUDPRINT_STDTEMPLATES_GET]: PddCloudprintStdtemplatesGetPddCloudprintStdtemplatesGetResponseResponseInterface;
  [PDD_WAYBILL_CANCEL]: PddWaybillCancelPddWaybillCancelResponseResponseInterface;
  [PDD_WAYBILL_GET]: PddWaybillGetPddWaybillGetResponseResponseInterface;
  [PDD_WAYBILL_QUERY_BY_WAYBILLCODE]: PddWaybillQueryByWaybillcodePddWaybillQueryByWaybillcodeResponseResponseInterface;
  [PDD_WAYBILL_SEARCH]: PddWaybillSearchPddWaybillSearchResponseResponseInterface;
  [PDD_WAYBILL_UPDATE]: PddWaybillUpdatePddWaybillUpdateResponseResponseInterface;
  [PDD_FINANCE_BALANCE_DAILY_BILL_URL_GET]: PddFinanceBalanceDailyBillUrlGetFinanceBalanceDailyBillUrlGetResponseResponseInterface;
  [PDD_SERVICEMARKET_CONTRACT_SEARCH]: PddServicemarketContractSearchServicemarketContractSearchResponseResponseInterface;
  [PDD_SERVICEMARKET_SETTLEMENTBILL_GET]: PddServicemarketSettlementbillGetSettlementBillSearchResponseResponseInterface;
  [PDD_SERVICEMARKET_TRADELIST_GET]: PddServicemarketTradelistGetMallBalanceFlowSearchResponseResponseInterface;
  [PDD_VAS_ORDER_SEARCH]: PddVasOrderSearchVasOrderSearchResponseResponseInterface;
  [PDD_OPEN_MSG_SERVICE_QUERY_MSG_RECORD]: PddOpenMsgServiceQueryMsgRecordResponseInterface;
  [PDD_OPEN_MSG_SERVICE_SEND_BATCH_MSG]: PddOpenMsgServiceSendBatchMsgResponseInterface;
  [PDD_OPEN_MSG_SERVICE_SEND_EXPRESS_MSG]: PddOpenMsgServiceSendExpressMsgResponseInterface;
  [PDD_OPEN_MSG_SERVICE_SEND_MSG]: PddOpenMsgServiceSendMsgResponseInterface;
  [PDD_SMS_DETAILBILL_PUSH]: PddSmsDetailbillPushResponseInterface;
  [PDD_SMS_VENDOR_COMPLAINT_CREATE]: PddSmsVendorComplaintCreateResponseInterface;
  [PDD_AD_API_ADVERTISER_OPEN_ACCOUNT]: PddAdApiAdvertiserOpenAccountResponseInterface;
  [PDD_AD_API_ADVERTISER_QUERY_ACCOUNT_BALANCE]: PddAdApiAdvertiserQueryAccountBalanceResponseInterface;
  [PDD_AD_API_ADVERTISER_QUERY_ACCOUNT_INFO]: PddAdApiAdvertiserQueryAccountInfoResponseInterface;
  [PDD_AD_API_ADVERTISER_QUERY_DETAIL]: PddAdApiAdvertiserQueryDetailResponseInterface;
  [PDD_AD_API_GOODS_QUERY_GALLERY_IMAGES]: PddAdApiGoodsQueryGalleryImagesResponseInterface;
  [PDD_AD_API_GOODS_QUERY_LONG_IMAGES]: PddAdApiGoodsQueryLongImagesResponseInterface;
  [PDD_AD_API_GOODS_QUERY_PAGE]: PddAdApiGoodsQueryPageResponseInterface;
  [PDD_AD_API_KEYWORD_CREATE]: PddAdApiKeywordCreateResponseInterface;
  [PDD_AD_API_KEYWORD_DELETE]: PddAdApiKeywordDeleteResponseInterface;
  [PDD_AD_API_KEYWORD_QUERY_LIST]: PddAdApiKeywordQueryListResponseInterface;
  [PDD_AD_API_KEYWORD_RECOMMEND_GET]: PddAdApiKeywordRecommendGetResponseInterface;
  [PDD_AD_API_KEYWORD_RELEVANCE_GET]: PddAdApiKeywordRelevanceGetResponseInterface;
  [PDD_AD_API_KEYWORD_UPDATE]: PddAdApiKeywordUpdateResponseInterface;
  [PDD_AD_API_PLAN_CREATE]: PddAdApiPlanCreateResponseInterface;
  [PDD_AD_API_PLAN_DELETE]: PddAdApiPlanDeleteResponseInterface;
  [PDD_AD_API_PLAN_QUERY_CAN_CREATE_AD_PLAN]: PddAdApiPlanQueryCanCreateAdPlanResponseInterface;
  [PDD_AD_API_PLAN_QUERY_CAN_UPDATE_MAX_COST]: PddAdApiPlanQueryCanUpdateMaxCostResponseInterface;
  [PDD_AD_API_PLAN_QUERY_LIST]: PddAdApiPlanQueryListResponseInterface;
  [PDD_AD_API_PLAN_UPDATE_DATA_OPERATE_STATUS]: PddAdApiPlanUpdateDataOperateStatusResponseInterface;
  [PDD_AD_API_PLAN_UPDATE_MAX_COST]: PddAdApiPlanUpdateMaxCostResponseInterface;
  [PDD_AD_API_PLAN_UPDATE_PLAN_DISCOUNT]: PddAdApiPlanUpdatePlanDiscountResponseInterface;
  [PDD_AD_API_PLAN_UPDATE_PLAN_NAME]: PddAdApiPlanUpdatePlanNameResponseInterface;
  [PDD_AD_API_PLAN_UPDATE_PLAN_TO_OCPC]: PddAdApiPlanUpdatePlanToOcpcResponseInterface;
  [PDD_AD_API_REPORT_DAILY_REPORT_QUERY]: PddAdApiReportDailyReportQueryResponseInterface;
  [PDD_AD_API_REPORT_ENTITY_REPORT_QUERY]: PddAdApiReportEntityReportQueryResponseInterface;
  [PDD_AD_API_REPORT_HOURLY_REPORT_QUERY]: PddAdApiReportHourlyReportQueryResponseInterface;
  [PDD_AD_API_UNIT_BID_DELETE]: PddAdApiUnitBidDeleteResponseInterface;
  [PDD_AD_API_UNIT_BID_QUERY_BASE_LOCATION_PROFILE]: PddAdApiUnitBidQueryBaseLocationProfileResponseInterface;
  [PDD_AD_API_UNIT_BID_QUERY_BASE_TARGET_PROFILE]: PddAdApiUnitBidQueryBaseTargetProfileResponseInterface;
  [PDD_AD_API_UNIT_BID_QUERY_LIST]: PddAdApiUnitBidQueryListResponseInterface;
  [PDD_AD_API_UNIT_BID_QUERY_TARGETING_TAG_LIST]: PddAdApiUnitBidQueryTargetingTagListResponseInterface;
  [PDD_AD_API_UNIT_BID_SYNC]: PddAdApiUnitBidSyncResponseInterface;
  [PDD_AD_API_UNIT_BID_UPDATE]: PddAdApiUnitBidUpdateResponseInterface;
  [PDD_AD_API_UNIT_CREATE]: PddAdApiUnitCreateResponseInterface;
  [PDD_AD_API_UNIT_CREATIVE_CHECK_TITLE]: PddAdApiUnitCreativeCheckTitleResponseInterface;
  [PDD_AD_API_UNIT_CREATIVE_CREATE]: PddAdApiUnitCreativeCreateResponseInterface;
  [PDD_AD_API_UNIT_CREATIVE_DELETE]: PddAdApiUnitCreativeDeleteResponseInterface;
  [PDD_AD_API_UNIT_CREATIVE_DISTRIBUTE_FLOW_RATE]: PddAdApiUnitCreativeDistributeFlowRateResponseInterface;
  [PDD_AD_API_UNIT_CREATIVE_QUERY_FLOW_RATE]: PddAdApiUnitCreativeQueryFlowRateResponseInterface;
  [PDD_AD_API_UNIT_CREATIVE_QUERY_LIST]: PddAdApiUnitCreativeQueryListResponseInterface;
  [PDD_AD_API_UNIT_CREATIVE_UPDATE_CONTENT]: PddAdApiUnitCreativeUpdateContentResponseInterface;
  [PDD_AD_API_UNIT_CREATIVE_UPDATE_DATA_OPERATE_STATUS]: PddAdApiUnitCreativeUpdateDataOperateStatusResponseInterface;
  [PDD_AD_API_UNIT_CREATIVE_UPDATE_SMART_CREATIVE]: PddAdApiUnitCreativeUpdateSmartCreativeResponseInterface;
  [PDD_AD_API_UNIT_DELETE]: PddAdApiUnitDeleteResponseInterface;
  [PDD_AD_API_UNIT_QUERY_LIST]: PddAdApiUnitQueryListResponseInterface;
  [PDD_AD_API_UNIT_UPDATE_DATA_OPERATE_STATUS]: PddAdApiUnitUpdateDataOperateStatusResponseInterface;
  [PDD_AD_API_UNIT_UPDATE_OPTIMIZATION_MESSAGE]: PddAdApiUnitUpdateOptimizationMessageResponseInterface;
  [PDD_AD_API_UNIT_UPDATE_UNIT_BID]: PddAdApiUnitUpdateUnitBidResponseInterface;
  [PDD_AD_API_UNIT_UPDATE_UNIT_NAME]: PddAdApiUnitUpdateUnitNameResponseInterface;
  [PDD_FDS_ORDER_GET]: PddFdsOrderGetPddFdsOrderGetResponseResponseInterface;
  [PDD_FDS_ORDER_LIST_GET]: PddFdsOrderListGetPddFdsOrderListGetResponseResponseInterface;
  [PDD_FDS_ROLE_GET]: PddFdsRoleGetPddFdsRoleGetResponseResponseInterface;
  [PDD_FDS_WAYBILL_CANCEL]: PddFdsWaybillCancelPddFdsWaybillCancelResponseResponseInterface;
  [PDD_FDS_WAYBILL_GET]: PddFdsWaybillGetPddFdsWaybillGetResponseResponseInterface;
  [PDD_FDS_WAYBILL_RETURN]: PddFdsWaybillReturnPddFdsWaybillReturnResponseResponseInterface;
  [PDD_FDS_WAYBILL_RETURN_SLAVE]: PddFdsWaybillReturnSlavePddFdsWaybillReturnSlaveResponseResponseInterface;
  [PDD_MALL_INFO_GROUP_ADD_POST]: PddMallInfoGroupAddPostResponseInterface;
  [PDD_MALL_INFO_GROUP_ADD_STORE_POST]: PddMallInfoGroupAddStorePostMallInfoGroupAddStorePostResponseResponseInterface;
  [PDD_MALL_INFO_GROUP_DELETE_POST]: PddMallInfoGroupDeletePostResponseInterface;
  [PDD_MALL_INFO_GROUP_LIST_STORE_GET]: PddMallInfoGroupListStoreGetMallInfoGroupListStoreGetResponseResponseInterface;
  [PDD_MALL_INFO_GROUP_QUERY_POST]: PddMallInfoGroupQueryPostResponseInterface;
  [PDD_MALL_INFO_GROUP_REMOVE_STORE_GET]: PddMallInfoGroupRemoveStoreGetMallInfoGroupRemoveStoreGetResponseResponseInterface;
  [PDD_MALL_INFO_GROUP_UPDATE_POST]: PddMallInfoGroupUpdatePostResponseInterface;
  [PDD_MALL_INFO_STORE_CREATE_POST]: PddMallInfoStoreCreatePostMallInfoStoreCreatePostResponseResponseInterface;
  [PDD_MALL_INFO_STORE_CREATE_POST_NOPOI]: PddMallInfoStoreCreatePostNopoiResponseInterface;
  [PDD_MALL_INFO_STORE_DELETE_POST]: PddMallInfoStoreDeletePostMallInfoStoreDeletePostResponseResponseInterface;
  [PDD_MALL_INFO_STORE_GET]: PddMallInfoStoreGetResponseInterface;
  [PDD_MALL_INFO_STORE_UPDATE_POST]: PddMallInfoStoreUpdatePostMallInfoStoreUpdatePostResponseResponseInterface;
  [PDD_MALL_INFO_STORE_UPDATE_POST_NOPOI]: PddMallInfoStoreUpdatePostNopoiResponseInterface;
  [PDD_QRPAY_PAYEE_REGISTER]: PddQrpayPayeeRegisterQrpayPayeeRegisterResponseResponseInterface;
  [PDD_MALL_INFO_BONDED_WAREHOUSE_GET]: PddMallInfoBondedWarehouseGetMallInfoBondedWarehouseGetResponseResponseInterface;
  [PDD_OVERSEA_CLEARANCE_GET]: PddOverseaClearanceGetClearanceResponseResponseInterface;
  [PDD_OVERSEA_DECLARATION_FAIL_NOTIFY]: PddOverseaDeclarationFailNotifyNotifyExceededResponseResponseInterface;
  [PDD_TICKET_AREACODE_GET]: PddTicketAreacodeGetResponseInterface;
  [PDD_TICKET_GOODS_QUERY]: PddTicketGoodsQueryGoodsDetailGetResponseResponseInterface;
  [PDD_TICKET_GOODS_UPLOAD]: PddTicketGoodsUploadGoodsUploadResponseResponseInterface;
  [PDD_TICKET_ORDER_CREATE_NOTIFYCATION]: PddTicketOrderCreateNotifycationResponseInterface;
  [PDD_TICKET_ORDER_REFUND_NOTIFYCATION]: PddTicketOrderRefundNotifycationResponseInterface;
  [PDD_TICKET_SCENIC_GET]: PddTicketScenicGetResponseInterface;
  [PDD_TICKET_SKU_RULE_ADD]: PddTicketSkuRuleAddResponseInterface;
  [PDD_TICKET_SKU_RULE_EDIT]: PddTicketSkuRuleEditResponseInterface;
  [PDD_TICKET_SKU_RULE_GET]: PddTicketSkuRuleGetResponseInterface;
  [PDD_TICKET_VERIFICATION_NOTIFYCATION]: PddTicketVerificationNotifycationResponseInterface;
  [PDD_CLOUD_ISV_PAGE_CODE]: PddCloudIsvPageCodeResponseInterface;
  [PDD_CLOUD_SECURITY_EVENT_TRACKING_BATCH_ORDER]: PddCloudSecurityEventTrackingBatchOrderResponseInterface;
  [PDD_CLOUD_SECURITY_EVENT_TRACKING_LOGIN]: PddCloudSecurityEventTrackingLoginResponseInterface;
  [PDD_DDY_PDP_USER_ADD]: PddDdyPdpUserAddDdyPdpUserAddResponseResponseInterface;
  [PDD_DDY_PDP_USER_DELETE]: PddDdyPdpUserDeleteDdyPdpUsersDeleteResponseResponseInterface;
  [PDD_DDY_PDP_USERS_GET]: PddDdyPdpUsersGetDdyPdpUsersGetResponseResponseInterface;
  [PDD_CLOUD_DTS_ORDER_LIST_INCREMENT_GET]: PddCloudDtsOrderListIncrementGetOrderSnIncrementGetResponseResponseInterface;
  [PDD_CLOUD_LOGISTICS_ONLINE_SEND]: PddCloudLogisticsOnlineSendLogisticsOnlineSendResponseResponseInterface;
  [PDD_CLOUD_WAYBILL_GET]: PddCloudWaybillGetPddWaybillGetResponseResponseInterface;
  [PDD_CLOUD_WAYBILL_UPDATE]: PddCloudWaybillUpdatePddWaybillUpdateResponseResponseInterface;
  [PDD_CLOUD_WEBSESSION_SEND]: PddCloudWebsessionSendSendResponseResponseInterface;
  [PDD_CLOUD_WMS_ORDER_SEND]: PddCloudWmsOrderSendSendResponseResponseInterface;
}
export interface PddCommonRequestInterface {
  /**
   * API接口名称
   */
  type: string;

  /**
   * POP分配给应用的client_id
   */
  client_id: string;

  /**
   * 通过code获取的access_token(无需授权的接口，该字段不参与sign签名运算)
   */
  access_token?: string;

  /**
   * UNIX时间戳，单位秒，需要与拼多多服务器时间差值在10分钟内
   */
  timestamp: number;

  /**
   * 响应格式，即返回数据的格式，JSON或者XML（二选一），默认JSON，注意是大写
   * @default JSON
   */
  data_type?: 'JSON' | 'XML';

  /**
   * API协议版本号，默认为V1，可不填
   * @default V1
   */
  version?: string;

  /**
   * API输入参数签名结果，签名算法参考开放平台接入指南第三部分底部。
   */
  sign: string;
}
