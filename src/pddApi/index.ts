// 订单API
import {
  PDD_ERP_ORDER_SYNC,
  PddErpOrderSyncRequestInterface,
  PddErpOrderSyncResponseInterface,
} from './dingDan/PddErpOrderSync';
import {
  PDD_ORDER_INFORMATION_GET,
  PddOrderInformationGetRequestInterface,
  PddOrderInformationGetResponseInterface,
} from './dingDan/PddOrderInformationGet';
import {
  PDD_ORDER_LIST_GET,
  PddOrderListGetRequestInterface,
  PddOrderListGetResponseInterface,
} from './dingDan/PddOrderListGet';
import {
  PDD_ORDER_NUMBER_LIST_INCREMENT_GET,
  PddOrderNumberListIncrementGetRequestInterface,
  PddOrderNumberListIncrementGetResponseInterface,
} from './dingDan/PddOrderNumberListIncrementGet';
import {
  PDD_ORDER_STATUS_GET,
  PddOrderStatusGetRequestInterface,
  PddOrderStatusGetResponseInterface,
} from './dingDan/PddOrderStatusGet';
// 售后API
import {
  PDD_NEXTONE_LOGISTICS_WAREHOUSE_UPDATE,
  PddNextoneLogisticsWarehouseUpdateRequestInterface,
  PddNextoneLogisticsWarehouseUpdateResponseInterface,
} from './shouHou/PddNextoneLogisticsWarehouseUpdate';
import {
  PDD_RDC_PDDGENIUS_SENDGOODS_CANCEL,
  PddRdcPddgeniusSendgoodsCancelRequestInterface,
  PddRdcPddgeniusSendgoodsCancelResponseInterface,
} from './shouHou/PddRdcPddgeniusSendgoodsCancel';
import {
  PDD_REFUND_ADDRESS_LIST_GET,
  PddRefundAddressListGetRequestInterface,
  PddRefundAddressListGetResponseInterface,
} from './shouHou/PddRefundAddressListGet';
import {
  PDD_REFUND_INFORMATION_GET,
  PddRefundInformationGetRequestInterface,
  PddRefundInformationGetResponseInterface,
} from './shouHou/PddRefundInformationGet';
import {
  PDD_REFUND_LIST_INCREMENT_GET,
  PddRefundListIncrementGetRequestInterface,
  PddRefundListIncrementGetResponseInterface,
} from './shouHou/PddRefundListIncrementGet';
import {
  PDD_REFUND_STATUS_CHECK,
  PddRefundStatusCheckRequestInterface,
  PddRefundStatusCheckResponseInterface,
} from './shouHou/PddRefundStatusCheck';
// 物流API
import {
  PDD_LOGISTICS_ADDRESS_GET,
  PddLogisticsAddressGetRequestInterface,
  PddLogisticsAddressGetResponseInterface,
} from './wuLiu/PddLogisticsAddressGet';
import {
  PDD_LOGISTICS_COMPANIES_GET,
  PddLogisticsCompaniesGetRequestInterface,
  PddLogisticsCompaniesGetResponseInterface,
} from './wuLiu/PddLogisticsCompaniesGet';
import {
  PDD_LOGISTICS_ONLINE_CREATE,
  PddLogisticsOnlineCreateRequestInterface,
  PddLogisticsOnlineCreateResponseInterface,
} from './wuLiu/PddLogisticsOnlineCreate';
import {
  PDD_LOGISTICS_ONLINE_SEND,
  PddLogisticsOnlineSendRequestInterface,
  PddLogisticsOnlineSendResponseInterface,
} from './wuLiu/PddLogisticsOnlineSend';
import {
  PDD_LOGISTICS_ONLINE_STATUS_QUERY,
  PddLogisticsOnlineStatusQueryRequestInterface,
  PddLogisticsOnlineStatusQueryResponseInterface,
} from './wuLiu/PddLogisticsOnlineStatusQuery';
import {
  PDD_LOGISTICS_ORDERTRACE_GET,
  PddLogisticsOrdertraceGetRequestInterface,
  PddLogisticsOrdertraceGetResponseInterface,
} from './wuLiu/PddLogisticsOrdertraceGet';
// 虚拟类目API
import {
  PDD_VIRTUAL_GAME_SERVER_QUERY,
  PddVirtualGameServerQueryRequestInterface,
  PddVirtualGameServerQueryResponseInterface,
} from './xuNiLeiMu/PddVirtualGameServerQuery';
import {
  PDD_VIRTUAL_MOBILE_CHARGE_NOTIFY,
  PddVirtualMobileChargeNotifyRequestInterface,
  PddVirtualMobileChargeNotifyResponseInterface,
} from './xuNiLeiMu/PddVirtualMobileChargeNotify';
// 商品API
import {
  PDD_DELETE_DRAFT_COMMIT,
  PddDeleteDraftCommitRequestInterface,
  PddDeleteDraftCommitResponseInterface,
} from './shangPin/PddDeleteDraftCommit';
import {
  PDD_DELETE_GOODS_COMMIT,
  PddDeleteGoodsCommitRequestInterface,
  PddDeleteGoodsCommitResponseInterface,
} from './shangPin/PddDeleteGoodsCommit';
import { PDD_GOODS_ADD, PddGoodsAddRequestInterface, PddGoodsAddResponseInterface } from './shangPin/PddGoodsAdd';
import {
  PDD_GOODS_AUTHORIZATION_CATS,
  PddGoodsAuthorizationCatsRequestInterface,
  PddGoodsAuthorizationCatsResponseInterface,
} from './shangPin/PddGoodsAuthorizationCats';
import {
  PDD_GOODS_CAT_TEMPLATE_GET,
  PddGoodsCatTemplateGetRequestInterface,
  PddGoodsCatTemplateGetResponseInterface,
} from './shangPin/PddGoodsCatTemplateGet';
import {
  PDD_GOODS_CATS_GET,
  PddGoodsCatsGetRequestInterface,
  PddGoodsCatsGetResponseInterface,
} from './shangPin/PddGoodsCatsGet';
import {
  PDD_GOODS_COMMIT_DETAIL_GET,
  PddGoodsCommitDetailGetRequestInterface,
  PddGoodsCommitDetailGetResponseInterface,
} from './shangPin/PddGoodsCommitDetailGet';
import {
  PDD_GOODS_COMMIT_LIST_GET,
  PddGoodsCommitListGetRequestInterface,
  PddGoodsCommitListGetResponseInterface,
} from './shangPin/PddGoodsCommitListGet';
import {
  PDD_GOODS_COMMIT_STATUS_GET,
  PddGoodsCommitStatusGetRequestInterface,
  PddGoodsCommitStatusGetResponseInterface,
} from './shangPin/PddGoodsCommitStatusGet';
import {
  PDD_GOODS_COUNTRY_GET,
  PddGoodsCountryGetRequestInterface,
  PddGoodsCountryGetResponseInterface,
} from './shangPin/PddGoodsCountryGet';
import {
  PDD_GOODS_CPS_MALL_UNIT_CHANGE,
  PddGoodsCpsMallUnitChangeRequestInterface,
  PddGoodsCpsMallUnitChangeResponseInterface,
} from './shangPin/PddGoodsCpsMallUnitChange';
import {
  PDD_GOODS_CPS_MALL_UNIT_CREATE,
  PddGoodsCpsMallUnitCreateRequestInterface,
  PddGoodsCpsMallUnitCreateResponseInterface,
} from './shangPin/PddGoodsCpsMallUnitCreate';
import {
  PDD_GOODS_CPS_MALL_UNIT_PAUSE,
  PddGoodsCpsMallUnitPauseRequestInterface,
  PddGoodsCpsMallUnitPauseResponseInterface,
} from './shangPin/PddGoodsCpsMallUnitPause';
import {
  PDD_GOODS_CPS_MALL_UNIT_QUERY,
  PddGoodsCpsMallUnitQueryRequestInterface,
  PddGoodsCpsMallUnitQueryResponseInterface,
} from './shangPin/PddGoodsCpsMallUnitQuery';
import {
  PDD_GOODS_CPS_MALL_UNIT_RESUME,
  PddGoodsCpsMallUnitResumeRequestInterface,
  PddGoodsCpsMallUnitResumeResponseInterface,
} from './shangPin/PddGoodsCpsMallUnitResume';
import {
  PDD_GOODS_CPS_UNIT_CHANGE,
  PddGoodsCpsUnitChangeRequestInterface,
  PddGoodsCpsUnitChangeResponseInterface,
} from './shangPin/PddGoodsCpsUnitChange';
import {
  PDD_GOODS_CPS_UNIT_CREATE,
  PddGoodsCpsUnitCreateRequestInterface,
  PddGoodsCpsUnitCreateResponseInterface,
} from './shangPin/PddGoodsCpsUnitCreate';
import {
  PDD_GOODS_CPS_UNIT_DELETE,
  PddGoodsCpsUnitDeleteRequestInterface,
  PddGoodsCpsUnitDeleteResponseInterface,
} from './shangPin/PddGoodsCpsUnitDelete';
import {
  PDD_GOODS_CPS_UNIT_QUERY,
  PddGoodsCpsUnitQueryRequestInterface,
  PddGoodsCpsUnitQueryResponseInterface,
} from './shangPin/PddGoodsCpsUnitQuery';
import {
  PDD_GOODS_DETAIL_GET,
  PddGoodsDetailGetRequestInterface,
  PddGoodsDetailGetResponseInterface,
} from './shangPin/PddGoodsDetailGet';
import {
  PDD_GOODS_EDIT_GOODS_COMMIT,
  PddGoodsEditGoodsCommitRequestInterface,
  PddGoodsEditGoodsCommitResponseInterface,
} from './shangPin/PddGoodsEditGoodsCommit';
import {
  PDD_GOODS_GET_RELATION,
  PddGoodsGetRelationRequestInterface,
  PddGoodsGetRelationResponseInterface,
} from './shangPin/PddGoodsGetRelation';
import {
  PDD_GOODS_IMAGE_UPLOAD,
  PddGoodsImageUploadRequestInterface,
  PddGoodsImageUploadResponseInterface,
} from './shangPin/PddGoodsImageUpload';
import {
  PDD_GOODS_INFORMATION_GET,
  PddGoodsInformationGetRequestInterface,
  PddGoodsInformationGetResponseInterface,
} from './shangPin/PddGoodsInformationGet';
import {
  PDD_GOODS_INFORMATION_UPDATE,
  PddGoodsInformationUpdateRequestInterface,
  PddGoodsInformationUpdateResponseInterface,
} from './shangPin/PddGoodsInformationUpdate';
import {
  PDD_GOODS_LATEST_COMMIT_STATUS_GET,
  PddGoodsLatestCommitStatusGetRequestInterface,
  PddGoodsLatestCommitStatusGetResponseInterface,
} from './shangPin/PddGoodsLatestCommitStatusGet';
import {
  PDD_GOODS_LIST_GET,
  PddGoodsListGetRequestInterface,
  PddGoodsListGetResponseInterface,
} from './shangPin/PddGoodsListGet';
import {
  PDD_GOODS_LOGISTICS_SER_TEMPLATE_CREATE,
  PddGoodsLogisticsSerTemplateCreateRequestInterface,
  PddGoodsLogisticsSerTemplateCreateResponseInterface,
} from './shangPin/PddGoodsLogisticsSerTemplateCreate';
import {
  PDD_GOODS_LOGISTICS_SER_TEMPLATE_DELETE,
  PddGoodsLogisticsSerTemplateDeleteRequestInterface,
  PddGoodsLogisticsSerTemplateDeleteResponseInterface,
} from './shangPin/PddGoodsLogisticsSerTemplateDelete';
import {
  PDD_GOODS_LOGISTICS_SER_TEMPLATE_DETAIL,
  PddGoodsLogisticsSerTemplateDetailRequestInterface,
  PddGoodsLogisticsSerTemplateDetailResponseInterface,
} from './shangPin/PddGoodsLogisticsSerTemplateDetail';
import {
  PDD_GOODS_LOGISTICS_SER_TEMPLATE_LIST,
  PddGoodsLogisticsSerTemplateListRequestInterface,
  PddGoodsLogisticsSerTemplateListResponseInterface,
} from './shangPin/PddGoodsLogisticsSerTemplateList';
import {
  PDD_GOODS_LOGISTICS_SER_TEMPLATE_UPDATE,
  PddGoodsLogisticsSerTemplateUpdateRequestInterface,
  PddGoodsLogisticsSerTemplateUpdateResponseInterface,
} from './shangPin/PddGoodsLogisticsSerTemplateUpdate';
import {
  PDD_GOODS_LOGISTICS_TEMPLATE_CREATE,
  PddGoodsLogisticsTemplateCreateRequestInterface,
  PddGoodsLogisticsTemplateCreateResponseInterface,
} from './shangPin/PddGoodsLogisticsTemplateCreate';
import {
  PDD_GOODS_LOGISTICS_TEMPLATE_GET,
  PddGoodsLogisticsTemplateGetRequestInterface,
  PddGoodsLogisticsTemplateGetResponseInterface,
} from './shangPin/PddGoodsLogisticsTemplateGet';
import {
  PDD_GOODS_OPT_GET,
  PddGoodsOptGetRequestInterface,
  PddGoodsOptGetResponseInterface,
} from './shangPin/PddGoodsOptGet';
import {
  PDD_GOODS_OUTER_CAT_MAPPING_GET,
  PddGoodsOuterCatMappingGetRequestInterface,
  PddGoodsOuterCatMappingGetResponseInterface,
} from './shangPin/PddGoodsOuterCatMappingGet';
import {
  PDD_GOODS_QUANTITY_UPDATE,
  PddGoodsQuantityUpdateRequestInterface,
  PddGoodsQuantityUpdateResponseInterface,
} from './shangPin/PddGoodsQuantityUpdate';
import {
  PDD_GOODS_RELATION_SET,
  PddGoodsRelationSetRequestInterface,
  PddGoodsRelationSetResponseInterface,
} from './shangPin/PddGoodsRelationSet';
import {
  PDD_GOODS_SALE_STATUS_SET,
  PddGoodsSaleStatusSetRequestInterface,
  PddGoodsSaleStatusSetResponseInterface,
} from './shangPin/PddGoodsSaleStatusSet';
import {
  PDD_GOODS_SKU_PRICE_UPDATE,
  PddGoodsSkuPriceUpdateRequestInterface,
  PddGoodsSkuPriceUpdateResponseInterface,
} from './shangPin/PddGoodsSkuPriceUpdate';
import {
  PDD_GOODS_SPEC_GET,
  PddGoodsSpecGetRequestInterface,
  PddGoodsSpecGetResponseInterface,
} from './shangPin/PddGoodsSpecGet';
import {
  PDD_GOODS_SPEC_ID_GET,
  PddGoodsSpecIdGetRequestInterface,
  PddGoodsSpecIdGetResponseInterface,
} from './shangPin/PddGoodsSpecIdGet';
import {
  PDD_GOODS_SUBMIT_GOODS_COMMIT,
  PddGoodsSubmitGoodsCommitRequestInterface,
  PddGoodsSubmitGoodsCommitResponseInterface,
} from './shangPin/PddGoodsSubmitGoodsCommit';
import {
  PDD_GOODS_TEMPLATE_PROPERTY_VALUE_SEARCH,
  PddGoodsTemplatePropertyValueSearchRequestInterface,
  PddGoodsTemplatePropertyValueSearchResponseInterface,
} from './shangPin/PddGoodsTemplatePropertyValueSearch';
import {
  PDD_GOOODS_SKU_MEASUREMENT_LIST,
  PddGooodsSkuMeasurementListRequestInterface,
  PddGooodsSkuMeasurementListResponseInterface,
} from './shangPin/PddGooodsSkuMeasurementList';
import {
  PDD_ONE_EXPRESS_COST_TEMPLATE,
  PddOneExpressCostTemplateRequestInterface,
  PddOneExpressCostTemplateResponseInterface,
} from './shangPin/PddOneExpressCostTemplate';
// 推广API
import {
  PDD_AD_BALANCE_GET,
  PddAdBalanceGetRequestInterface,
  PddAdBalanceGetResponseInterface,
} from './tuiGuang/PddAdBalanceGet';
import {
  PDD_AD_BID_QUERY_PROFILE,
  PddAdBidQueryProfileRequestInterface,
  PddAdBidQueryProfileResponseInterface,
} from './tuiGuang/PddAdBidQueryProfile';
import {
  PDD_AD_CAN_CREATE_PLAN,
  PddAdCanCreatePlanRequestInterface,
  PddAdCanCreatePlanResponseInterface,
} from './tuiGuang/PddAdCanCreatePlan';
import {
  PDD_AD_CHART_BYKEYWORD_GET,
  PddAdChartBykeywordGetRequestInterface,
  PddAdChartBykeywordGetResponseInterface,
} from './tuiGuang/PddAdChartBykeywordGet';
import {
  PDD_AD_CREATE_LOCATION_BID,
  PddAdCreateLocationBidRequestInterface,
  PddAdCreateLocationBidResponseInterface,
} from './tuiGuang/PddAdCreateLocationBid';
import {
  PDD_AD_CREATE_UNIT_BID,
  PddAdCreateUnitBidRequestInterface,
  PddAdCreateUnitBidResponseInterface,
} from './tuiGuang/PddAdCreateUnitBid';
import {
  PDD_AD_CREATIVE_CREATE,
  PddAdCreativeCreateRequestInterface,
  PddAdCreativeCreateResponseInterface,
} from './tuiGuang/PddAdCreativeCreate';
import {
  PDD_AD_CREATIVE_DELETE,
  PddAdCreativeDeleteRequestInterface,
  PddAdCreativeDeleteResponseInterface,
} from './tuiGuang/PddAdCreativeDelete';
import {
  PDD_AD_CREATIVE_HISTORY_REPORT_GET,
  PddAdCreativeHistoryReportGetRequestInterface,
  PddAdCreativeHistoryReportGetResponseInterface,
} from './tuiGuang/PddAdCreativeHistoryReportGet';
import {
  PDD_AD_CREATIVE_QUERY,
  PddAdCreativeQueryRequestInterface,
  PddAdCreativeQueryResponseInterface,
} from './tuiGuang/PddAdCreativeQuery';
import {
  PDD_AD_CREATIVE_REPORT_GET,
  PddAdCreativeReportGetRequestInterface,
  PddAdCreativeReportGetResponseInterface,
} from './tuiGuang/PddAdCreativeReportGet';
import {
  PDD_AD_CREATIVE_UPDATE,
  PddAdCreativeUpdateRequestInterface,
  PddAdCreativeUpdateResponseInterface,
} from './tuiGuang/PddAdCreativeUpdate';
import {
  PDD_AD_DELETE_BID,
  PddAdDeleteBidRequestInterface,
  PddAdDeleteBidResponseInterface,
} from './tuiGuang/PddAdDeleteBid';
import {
  PDD_AD_DELETE_LOCATION_BID,
  PddAdDeleteLocationBidRequestInterface,
  PddAdDeleteLocationBidResponseInterface,
} from './tuiGuang/PddAdDeleteLocationBid';
import {
  PDD_AD_HISTORY_KEYWORD_REPORT_GET,
  PddAdHistoryKeywordReportGetRequestInterface,
  PddAdHistoryKeywordReportGetResponseInterface,
} from './tuiGuang/PddAdHistoryKeywordReportGet';
import {
  PDD_AD_HISTORY_PLAN_REPORT_GET,
  PddAdHistoryPlanReportGetRequestInterface,
  PddAdHistoryPlanReportGetResponseInterface,
} from './tuiGuang/PddAdHistoryPlanReportGet';
import {
  PDD_AD_HISTORY_REPORT_GET,
  PddAdHistoryReportGetRequestInterface,
  PddAdHistoryReportGetResponseInterface,
} from './tuiGuang/PddAdHistoryReportGet';
import {
  PDD_AD_HISTORY_RT_KEYWORD_REPORT_GET,
  PddAdHistoryRtKeywordReportGetRequestInterface,
  PddAdHistoryRtKeywordReportGetResponseInterface,
} from './tuiGuang/PddAdHistoryRtKeywordReportGet';
import {
  PDD_AD_HISTORY_RT_PLAN_REPORT_GET,
  PddAdHistoryRtPlanReportGetRequestInterface,
  PddAdHistoryRtPlanReportGetResponseInterface,
} from './tuiGuang/PddAdHistoryRtPlanReportGet';
import {
  PDD_AD_HISTORY_RT_REPORT_GET,
  PddAdHistoryRtReportGetRequestInterface,
  PddAdHistoryRtReportGetResponseInterface,
} from './tuiGuang/PddAdHistoryRtReportGet';
import {
  PDD_AD_HISTORY_RT_UNIT_REPORT_GET,
  PddAdHistoryRtUnitReportGetRequestInterface,
  PddAdHistoryRtUnitReportGetResponseInterface,
} from './tuiGuang/PddAdHistoryRtUnitReportGet';
import {
  PDD_AD_HISTORY_UNIT_REPORT_GET,
  PddAdHistoryUnitReportGetRequestInterface,
  PddAdHistoryUnitReportGetResponseInterface,
} from './tuiGuang/PddAdHistoryUnitReportGet';
import {
  PDD_AD_KEYWORD_CREATE,
  PddAdKeywordCreateRequestInterface,
  PddAdKeywordCreateResponseInterface,
} from './tuiGuang/PddAdKeywordCreate';
import {
  PDD_AD_KEYWORD_DAILY_REPORT,
  PddAdKeywordDailyReportRequestInterface,
  PddAdKeywordDailyReportResponseInterface,
} from './tuiGuang/PddAdKeywordDailyReport';
import {
  PDD_AD_KEYWORD_DELETE,
  PddAdKeywordDeleteRequestInterface,
  PddAdKeywordDeleteResponseInterface,
} from './tuiGuang/PddAdKeywordDelete';
import {
  PDD_AD_KEYWORD_RCOMMENDED_GET,
  PddAdKeywordRcommendedGetRequestInterface,
  PddAdKeywordRcommendedGetResponseInterface,
} from './tuiGuang/PddAdKeywordRcommendedGet';
import {
  PDD_AD_KEYWORD_RELEVANCE_GET,
  PddAdKeywordRelevanceGetRequestInterface,
  PddAdKeywordRelevanceGetResponseInterface,
} from './tuiGuang/PddAdKeywordRelevanceGet';
import {
  PDD_AD_KEYWORD_UPDATE,
  PddAdKeywordUpdateRequestInterface,
  PddAdKeywordUpdateResponseInterface,
} from './tuiGuang/PddAdKeywordUpdate';
import {
  PDD_AD_PLAN_CREATE,
  PddAdPlanCreateRequestInterface,
  PddAdPlanCreateResponseInterface,
} from './tuiGuang/PddAdPlanCreate';
import {
  PDD_AD_PLAN_DELETE,
  PddAdPlanDeleteRequestInterface,
  PddAdPlanDeleteResponseInterface,
} from './tuiGuang/PddAdPlanDelete';
import {
  PDD_AD_PLAN_DISCOUNT_UPDATE,
  PddAdPlanDiscountUpdateRequestInterface,
  PddAdPlanDiscountUpdateResponseInterface,
} from './tuiGuang/PddAdPlanDiscountUpdate';
import {
  PDD_AD_PLAN_INFO_LIST_GET,
  PddAdPlanInfoListGetRequestInterface,
  PddAdPlanInfoListGetResponseInterface,
} from './tuiGuang/PddAdPlanInfoListGet';
import {
  PDD_AD_PLAN_MAX_COST_UPDATE,
  PddAdPlanMaxCostUpdateRequestInterface,
  PddAdPlanMaxCostUpdateResponseInterface,
} from './tuiGuang/PddAdPlanMaxCostUpdate';
import {
  PDD_AD_PLAN_NAME_UPDATE,
  PddAdPlanNameUpdateRequestInterface,
  PddAdPlanNameUpdateResponseInterface,
} from './tuiGuang/PddAdPlanNameUpdate';
import {
  PDD_AD_PLAN_OPT_STATUS_UPDATE,
  PddAdPlanOptStatusUpdateRequestInterface,
  PddAdPlanOptStatusUpdateResponseInterface,
} from './tuiGuang/PddAdPlanOptStatusUpdate';
import {
  PDD_AD_QUERY_BID_LIST,
  PddAdQueryBidListRequestInterface,
  PddAdQueryBidListResponseInterface,
} from './tuiGuang/PddAdQueryBidList';
import {
  PDD_AD_QUERY_LOCATION_BID_HISTORY_REPORT,
  PddAdQueryLocationBidHistoryReportRequestInterface,
  PddAdQueryLocationBidHistoryReportResponseInterface,
} from './tuiGuang/PddAdQueryLocationBidHistoryReport';
import {
  PDD_AD_QUERY_LOCATION_BID_LIST,
  PddAdQueryLocationBidListRequestInterface,
  PddAdQueryLocationBidListResponseInterface,
} from './tuiGuang/PddAdQueryLocationBidList';
import {
  PDD_AD_QUERY_LOCATION_BID_PV_LIST,
  PddAdQueryLocationBidPvListRequestInterface,
  PddAdQueryLocationBidPvListResponseInterface,
} from './tuiGuang/PddAdQueryLocationBidPvList';
import {
  PDD_AD_QUERY_UNIT_BID_HISTORY_REPORT,
  PddAdQueryUnitBidHistoryReportRequestInterface,
  PddAdQueryUnitBidHistoryReportResponseInterface,
} from './tuiGuang/PddAdQueryUnitBidHistoryReport';
import {
  PDD_AD_UNIT_CREATE,
  PddAdUnitCreateRequestInterface,
  PddAdUnitCreateResponseInterface,
} from './tuiGuang/PddAdUnitCreate';
import {
  PDD_AD_UNIT_DELETE,
  PddAdUnitDeleteRequestInterface,
  PddAdUnitDeleteResponseInterface,
} from './tuiGuang/PddAdUnitDelete';
import {
  PDD_AD_UNIT_GET_BY_PLAN_ID,
  PddAdUnitGetByPlanIdRequestInterface,
  PddAdUnitGetByPlanIdResponseInterface,
} from './tuiGuang/PddAdUnitGetByPlanId';
import {
  PDD_AD_UNIT_OPT_STATUS_UPDATE,
  PddAdUnitOptStatusUpdateRequestInterface,
  PddAdUnitOptStatusUpdateResponseInterface,
} from './tuiGuang/PddAdUnitOptStatusUpdate';
import {
  PDD_AD_UPDATE_BID,
  PddAdUpdateBidRequestInterface,
  PddAdUpdateBidResponseInterface,
} from './tuiGuang/PddAdUpdateBid';
import {
  PDD_AD_UPDATE_LOCATION_BID,
  PddAdUpdateLocationBidRequestInterface,
  PddAdUpdateLocationBidResponseInterface,
} from './tuiGuang/PddAdUpdateLocationBid';
// 多多客API
import {
  PDD_DDK_CMS_PROM_URL_GENERATE,
  PddDdkCmsPromUrlGenerateRequestInterface,
  PddDdkCmsPromUrlGenerateResponseInterface,
} from './duoDuoKe/PddDdkCmsPromUrlGenerate';
import {
  PDD_DDK_COUPON_INFO_QUERY,
  PddDdkCouponInfoQueryRequestInterface,
  PddDdkCouponInfoQueryResponseInterface,
} from './duoDuoKe/PddDdkCouponInfoQuery';
import {
  PDD_DDK_FINANCE_CPA_QUERY,
  PddDdkFinanceCpaQueryRequestInterface,
  PddDdkFinanceCpaQueryResponseInterface,
} from './duoDuoKe/PddDdkFinanceCpaQuery';
import {
  PDD_DDK_GOODS_BASIC_INFO_GET,
  PddDdkGoodsBasicInfoGetRequestInterface,
  PddDdkGoodsBasicInfoGetResponseInterface,
} from './duoDuoKe/PddDdkGoodsBasicInfoGet';
import {
  PDD_DDK_GOODS_DETAIL,
  PddDdkGoodsDetailRequestInterface,
  PddDdkGoodsDetailResponseInterface,
} from './duoDuoKe/PddDdkGoodsDetail';
import {
  PDD_DDK_GOODS_PID_GENERATE,
  PddDdkGoodsPidGenerateRequestInterface,
  PddDdkGoodsPidGenerateResponseInterface,
} from './duoDuoKe/PddDdkGoodsPidGenerate';
import {
  PDD_DDK_GOODS_PID_QUERY,
  PddDdkGoodsPidQueryRequestInterface,
  PddDdkGoodsPidQueryResponseInterface,
} from './duoDuoKe/PddDdkGoodsPidQuery';
import {
  PDD_DDK_GOODS_PROMOTION_URL_GENERATE,
  PddDdkGoodsPromotionUrlGenerateRequestInterface,
  PddDdkGoodsPromotionUrlGenerateResponseInterface,
} from './duoDuoKe/PddDdkGoodsPromotionUrlGenerate';
import {
  PDD_DDK_GOODS_RECOMMEND_GET,
  PddDdkGoodsRecommendGetRequestInterface,
  PddDdkGoodsRecommendGetResponseInterface,
} from './duoDuoKe/PddDdkGoodsRecommendGet';
import {
  PDD_DDK_GOODS_SEARCH,
  PddDdkGoodsSearchRequestInterface,
  PddDdkGoodsSearchResponseInterface,
} from './duoDuoKe/PddDdkGoodsSearch';
import {
  PDD_DDK_GOODS_UNIT_QUERY,
  PddDdkGoodsUnitQueryRequestInterface,
  PddDdkGoodsUnitQueryResponseInterface,
} from './duoDuoKe/PddDdkGoodsUnitQuery';
import {
  PDD_DDK_GOODS_ZS_UNIT_URL_GEN,
  PddDdkGoodsZsUnitUrlGenRequestInterface,
  PddDdkGoodsZsUnitUrlGenResponseInterface,
} from './duoDuoKe/PddDdkGoodsZsUnitUrlGen';
import {
  PDD_DDK_LOTTERY_URL_GEN,
  PddDdkLotteryUrlGenRequestInterface,
  PddDdkLotteryUrlGenResponseInterface,
} from './duoDuoKe/PddDdkLotteryUrlGen';
import {
  PDD_DDK_MALL_GOODS_LIST_GET,
  PddDdkMallGoodsListGetRequestInterface,
  PddDdkMallGoodsListGetResponseInterface,
} from './duoDuoKe/PddDdkMallGoodsListGet';
import {
  PDD_DDK_MALL_URL_GEN,
  PddDdkMallUrlGenRequestInterface,
  PddDdkMallUrlGenResponseInterface,
} from './duoDuoKe/PddDdkMallUrlGen';
import {
  PDD_DDK_MERCHANT_LIST_GET,
  PddDdkMerchantListGetRequestInterface,
  PddDdkMerchantListGetResponseInterface,
} from './duoDuoKe/PddDdkMerchantListGet';
import {
  PDD_DDK_ORDER_DETAIL_GET,
  PddDdkOrderDetailGetRequestInterface,
  PddDdkOrderDetailGetResponseInterface,
} from './duoDuoKe/PddDdkOrderDetailGet';
import {
  PDD_DDK_ORDER_LIST_INCREMENT_GET,
  PddDdkOrderListIncrementGetRequestInterface,
  PddDdkOrderListIncrementGetResponseInterface,
} from './duoDuoKe/PddDdkOrderListIncrementGet';
import {
  PDD_DDK_ORDER_LIST_RANGE_GET,
  PddDdkOrderListRangeGetRequestInterface,
  PddDdkOrderListRangeGetResponseInterface,
} from './duoDuoKe/PddDdkOrderListRangeGet';
import {
  PDD_DDK_RESOURCE_URL_GEN,
  PddDdkResourceUrlGenRequestInterface,
  PddDdkResourceUrlGenResponseInterface,
} from './duoDuoKe/PddDdkResourceUrlGen';
import {
  PDD_DDK_RP_PROM_URL_GENERATE,
  PddDdkRpPromUrlGenerateRequestInterface,
  PddDdkRpPromUrlGenerateResponseInterface,
} from './duoDuoKe/PddDdkRpPromUrlGenerate';
import {
  PDD_DDK_THEME_GOODS_SEARCH,
  PddDdkThemeGoodsSearchRequestInterface,
  PddDdkThemeGoodsSearchResponseInterface,
} from './duoDuoKe/PddDdkThemeGoodsSearch';
import {
  PDD_DDK_THEME_LIST_GET,
  PddDdkThemeListGetRequestInterface,
  PddDdkThemeListGetResponseInterface,
} from './duoDuoKe/PddDdkThemeListGet';
import {
  PDD_DDK_THEME_PROM_URL_GENERATE,
  PddDdkThemePromUrlGenerateRequestInterface,
  PddDdkThemePromUrlGenerateResponseInterface,
} from './duoDuoKe/PddDdkThemePromUrlGenerate';
import {
  PDD_DDK_TOP_GOODS_LIST_QUERY,
  PddDdkTopGoodsListQueryRequestInterface,
  PddDdkTopGoodsListQueryResponseInterface,
} from './duoDuoKe/PddDdkTopGoodsListQuery';
import {
  PDD_DDK_WEAPP_QRCODE_URL_GEN,
  PddDdkWeappQrcodeUrlGenRequestInterface,
  PddDdkWeappQrcodeUrlGenResponseInterface,
} from './duoDuoKe/PddDdkWeappQrcodeUrlGen';
// 多多客工具API
import {
  PDD_DDK_ALL_ORDER_LIST_INCREMENT_GET,
  PddDdkAllOrderListIncrementGetRequestInterface,
  PddDdkAllOrderListIncrementGetResponseInterface,
} from './duoDuoKeGongJu/PddDdkAllOrderListIncrementGet';
import {
  PDD_DDK_OAUTH_CMS_PROM_URL_GENERATE,
  PddDdkOauthCmsPromUrlGenerateRequestInterface,
  PddDdkOauthCmsPromUrlGenerateResponseInterface,
} from './duoDuoKeGongJu/PddDdkOauthCmsPromUrlGenerate';
import {
  PDD_DDK_OAUTH_GOODS_PID_GENERATE,
  PddDdkOauthGoodsPidGenerateRequestInterface,
  PddDdkOauthGoodsPidGenerateResponseInterface,
} from './duoDuoKeGongJu/PddDdkOauthGoodsPidGenerate';
import {
  PDD_DDK_OAUTH_GOODS_PID_QUERY,
  PddDdkOauthGoodsPidQueryRequestInterface,
  PddDdkOauthGoodsPidQueryResponseInterface,
} from './duoDuoKeGongJu/PddDdkOauthGoodsPidQuery';
import {
  PDD_DDK_OAUTH_GOODS_PROM_URL_GENERATE,
  PddDdkOauthGoodsPromUrlGenerateRequestInterface,
  PddDdkOauthGoodsPromUrlGenerateResponseInterface,
} from './duoDuoKeGongJu/PddDdkOauthGoodsPromUrlGenerate';
import {
  PDD_DDK_OAUTH_GOODS_RECOMMEND_GET,
  PddDdkOauthGoodsRecommendGetRequestInterface,
  PddDdkOauthGoodsRecommendGetResponseInterface,
} from './duoDuoKeGongJu/PddDdkOauthGoodsRecommendGet';
import {
  PDD_DDK_OAUTH_GOODS_ZS_UNIT_URL_GEN,
  PddDdkOauthGoodsZsUnitUrlGenRequestInterface,
  PddDdkOauthGoodsZsUnitUrlGenResponseInterface,
} from './duoDuoKeGongJu/PddDdkOauthGoodsZsUnitUrlGen';
import {
  PDD_DDK_OAUTH_LOTTERY_URL_GEN,
  PddDdkOauthLotteryUrlGenRequestInterface,
  PddDdkOauthLotteryUrlGenResponseInterface,
} from './duoDuoKeGongJu/PddDdkOauthLotteryUrlGen';
import {
  PDD_DDK_OAUTH_MALL_URL_GEN,
  PddDdkOauthMallUrlGenRequestInterface,
  PddDdkOauthMallUrlGenResponseInterface,
} from './duoDuoKeGongJu/PddDdkOauthMallUrlGen';
import {
  PDD_DDK_OAUTH_ORDER_DETAIL_GET,
  PddDdkOauthOrderDetailGetRequestInterface,
  PddDdkOauthOrderDetailGetResponseInterface,
} from './duoDuoKeGongJu/PddDdkOauthOrderDetailGet';
import {
  PDD_DDK_OAUTH_RESOURCE_URL_GEN,
  PddDdkOauthResourceUrlGenRequestInterface,
  PddDdkOauthResourceUrlGenResponseInterface,
} from './duoDuoKeGongJu/PddDdkOauthResourceUrlGen';
import {
  PDD_DDK_OAUTH_RP_PROM_URL_GENERATE,
  PddDdkOauthRpPromUrlGenerateRequestInterface,
  PddDdkOauthRpPromUrlGenerateResponseInterface,
} from './duoDuoKeGongJu/PddDdkOauthRpPromUrlGenerate';
import {
  PDD_DDK_OAUTH_THEME_PROM_URL_GENERATE,
  PddDdkOauthThemePromUrlGenerateRequestInterface,
  PddDdkOauthThemePromUrlGenerateResponseInterface,
} from './duoDuoKeGongJu/PddDdkOauthThemePromUrlGenerate';
import {
  PDD_DDK_OAUTH_TOP_GOODS_LIST_QUERY,
  PddDdkOauthTopGoodsListQueryRequestInterface,
  PddDdkOauthTopGoodsListQueryResponseInterface,
} from './duoDuoKeGongJu/PddDdkOauthTopGoodsListQuery';
// 物流商API
import {
  PDD_LOGISTICS_CS_HISTORY_MESSAGE_GET,
  PddLogisticsCsHistoryMessageGetRequestInterface,
  PddLogisticsCsHistoryMessageGetResponseInterface,
} from './wuLiuShang/PddLogisticsCsHistoryMessageGet';
import {
  PDD_LOGISTICS_CS_MESSAGE_SEND,
  PddLogisticsCsMessageSendRequestInterface,
  PddLogisticsCsMessageSendResponseInterface,
} from './wuLiuShang/PddLogisticsCsMessageSend';
import {
  PDD_LOGISTICS_CS_SESSION_CLOSE,
  PddLogisticsCsSessionCloseRequestInterface,
  PddLogisticsCsSessionCloseResponseInterface,
} from './wuLiuShang/PddLogisticsCsSessionClose';
import {
  PDD_LOGISTICS_CS_SESSION_START,
  PddLogisticsCsSessionStartRequestInterface,
  PddLogisticsCsSessionStartResponseInterface,
} from './wuLiuShang/PddLogisticsCsSessionStart';
import {
  PDD_LOGISTICS_TICKET_GET,
  PddLogisticsTicketGetRequestInterface,
  PddLogisticsTicketGetResponseInterface,
} from './wuLiuShang/PddLogisticsTicketGet';
import {
  PDD_LOGISTICS_TICKET_IMAGE_UPLOAD,
  PddLogisticsTicketImageUploadRequestInterface,
  PddLogisticsTicketImageUploadResponseInterface,
} from './wuLiuShang/PddLogisticsTicketImageUpload';
import {
  PDD_LOGISTICS_TICKET_NOTIFY,
  PddLogisticsTicketNotifyRequestInterface,
  PddLogisticsTicketNotifyResponseInterface,
} from './wuLiuShang/PddLogisticsTicketNotify';
import {
  PDD_LOGISTICS_TICKET_PROBLEM_TYPE_GET,
  PddLogisticsTicketProblemTypeGetRequestInterface,
  PddLogisticsTicketProblemTypeGetResponseInterface,
} from './wuLiuShang/PddLogisticsTicketProblemTypeGet';
// 营销API
import {
  PDD_PROMOTION_COUPON_CLOSE,
  PddPromotionCouponCloseRequestInterface,
  PddPromotionCouponCloseResponseInterface,
} from './yingXiao/PddPromotionCouponClose';
import {
  PDD_PROMOTION_COUPON_QUANTITY_ADD,
  PddPromotionCouponQuantityAddRequestInterface,
  PddPromotionCouponQuantityAddResponseInterface,
} from './yingXiao/PddPromotionCouponQuantityAdd';
import {
  PDD_PROMOTION_GOODS_COUPON_CREATE,
  PddPromotionGoodsCouponCreateRequestInterface,
  PddPromotionGoodsCouponCreateResponseInterface,
} from './yingXiao/PddPromotionGoodsCouponCreate';
import {
  PDD_PROMOTION_GOODS_COUPON_LIST_GET,
  PddPromotionGoodsCouponListGetRequestInterface,
  PddPromotionGoodsCouponListGetResponseInterface,
} from './yingXiao/PddPromotionGoodsCouponListGet';
import {
  PDD_PROMOTION_HOME_COUPON_CREATE,
  PddPromotionHomeCouponCreateRequestInterface,
  PddPromotionHomeCouponCreateResponseInterface,
} from './yingXiao/PddPromotionHomeCouponCreate';
import {
  PDD_PROMOTION_MERCHANT_COUPON_LIST_GET,
  PddPromotionMerchantCouponListGetRequestInterface,
  PddPromotionMerchantCouponListGetResponseInterface,
} from './yingXiao/PddPromotionMerchantCouponListGet';
// 卡券API
import {
  PDD_VOUCHER_APPOINTMENT_INFO_SEND,
  PddVoucherAppointmentInfoSendRequestInterface,
  PddVoucherAppointmentInfoSendResponseInterface,
} from './kaQuan/PddVoucherAppointmentInfoSend';
import {
  PDD_VOUCHER_OTA_CARD_VERIFICATION,
  PddVoucherOtaCardVerificationRequestInterface,
  PddVoucherOtaCardVerificationResponseInterface,
} from './kaQuan/PddVoucherOtaCardVerification';
import {
  PDD_VOUCHER_PHYSICAL_GOODS_SEND,
  PddVoucherPhysicalGoodsSendRequestInterface,
  PddVoucherPhysicalGoodsSendResponseInterface,
} from './kaQuan/PddVoucherPhysicalGoodsSend';
import {
  PDD_VOUCHER_VIRTUAL_CARD_VERIFICATION,
  PddVoucherVirtualCardVerificationRequestInterface,
  PddVoucherVirtualCardVerificationResponseInterface,
} from './kaQuan/PddVoucherVirtualCardVerification';
import {
  PDD_VOUCHER_VOUCHER_COMPLAIN,
  PddVoucherVoucherComplainRequestInterface,
  PddVoucherVoucherComplainResponseInterface,
} from './kaQuan/PddVoucherVoucherComplain';
import {
  PDD_VOUCHER_VOUCHER_INFO_SEND,
  PddVoucherVoucherInfoSendRequestInterface,
  PddVoucherVoucherInfoSendResponseInterface,
} from './kaQuan/PddVoucherVoucherInfoSend';
// 发票API
import {
  PDD_INVOICE_APPLICATION_QUERY,
  PddInvoiceApplicationQueryRequestInterface,
  PddInvoiceApplicationQueryResponseInterface,
} from './faPiao/PddInvoiceApplicationQuery';
import {
  PDD_INVOICE_APPLICATION_UPDATE,
  PddInvoiceApplicationUpdateRequestInterface,
  PddInvoiceApplicationUpdateResponseInterface,
} from './faPiao/PddInvoiceApplicationUpdate';
import {
  PDD_INVOICE_DETAIL_INVALID,
  PddInvoiceDetailInvalidRequestInterface,
  PddInvoiceDetailInvalidResponseInterface,
} from './faPiao/PddInvoiceDetailInvalid';
import {
  PDD_INVOICE_DETAIL_QUERY,
  PddInvoiceDetailQueryRequestInterface,
  PddInvoiceDetailQueryResponseInterface,
} from './faPiao/PddInvoiceDetailQuery';
import {
  PDD_INVOICE_DETAIL_UPLOAD,
  PddInvoiceDetailUploadRequestInterface,
  PddInvoiceDetailUploadResponseInterface,
} from './faPiao/PddInvoiceDetailUpload';
// 店铺API
import {
  PDD_MALL_CPS_PROTOCOL_STATUS_QUERY,
  PddMallCpsProtocolStatusQueryRequestInterface,
  PddMallCpsProtocolStatusQueryResponseInterface,
} from './dianPu/PddMallCpsProtocolStatusQuery';
import {
  PDD_MALL_INFO_BONDED_WAREHOUSE_GET,
  PddMallInfoBondedWarehouseGetRequestInterface,
  PddMallInfoBondedWarehouseGetResponseInterface,
} from './dianPu/PddMallInfoBondedWarehouseGet';
import {
  PDD_MALL_INFO_GET,
  PddMallInfoGetRequestInterface,
  PddMallInfoGetResponseInterface,
} from './dianPu/PddMallInfoGet';
import {
  PDD_MALL_INFO_GROUP_ADD_STORE_POST,
  PddMallInfoGroupAddStorePostRequestInterface,
  PddMallInfoGroupAddStorePostResponseInterface,
} from './dianPu/PddMallInfoGroupAddStorePost';
import {
  PDD_MALL_INFO_GROUP_LIST_STORE_GET,
  PddMallInfoGroupListStoreGetRequestInterface,
  PddMallInfoGroupListStoreGetResponseInterface,
} from './dianPu/PddMallInfoGroupListStoreGet';
import {
  PDD_MALL_INFO_GROUP_REMOVE_STORE_GET,
  PddMallInfoGroupRemoveStoreGetRequestInterface,
  PddMallInfoGroupRemoveStoreGetResponseInterface,
} from './dianPu/PddMallInfoGroupRemoveStoreGet';
import {
  PDD_MALL_INFO_STORE_CREATE_POST,
  PddMallInfoStoreCreatePostRequestInterface,
  PddMallInfoStoreCreatePostResponseInterface,
} from './dianPu/PddMallInfoStoreCreatePost';
import {
  PDD_MALL_INFO_STORE_CREATE_POST_NOPOI,
  PddMallInfoStoreCreatePostNopoiRequestInterface,
  PddMallInfoStoreCreatePostNopoiResponseInterface,
} from './dianPu/PddMallInfoStoreCreatePostNopoi';
import {
  PDD_MALL_INFO_STORE_DELETE_POST,
  PddMallInfoStoreDeletePostRequestInterface,
  PddMallInfoStoreDeletePostResponseInterface,
} from './dianPu/PddMallInfoStoreDeletePost';
import {
  PDD_MALL_INFO_STORE_GET,
  PddMallInfoStoreGetRequestInterface,
  PddMallInfoStoreGetResponseInterface,
} from './dianPu/PddMallInfoStoreGet';
import {
  PDD_MALL_INFO_STORE_UPDATE_POST,
  PddMallInfoStoreUpdatePostRequestInterface,
  PddMallInfoStoreUpdatePostResponseInterface,
} from './dianPu/PddMallInfoStoreUpdatePost';
import {
  PDD_MALL_INFO_STORE_UPDATE_POST_NOPOI,
  PddMallInfoStoreUpdatePostNopoiRequestInterface,
  PddMallInfoStoreUpdatePostNopoiResponseInterface,
} from './dianPu/PddMallInfoStoreUpdatePostNopoi';
import {
  PDD_QRPAY_PAYEE_REGISTER,
  PddQrpayPayeeRegisterRequestInterface,
  PddQrpayPayeeRegisterResponseInterface,
} from './dianPu/PddQrpayPayeeRegister';
// 营销短信API
import {
  PDD_SMS_ADD_CROWD,
  PddSmsAddCrowdRequestInterface,
  PddSmsAddCrowdResponseInterface,
} from './yingXiaoDuanXin/PddSmsAddCrowd';
import {
  PDD_SMS_CREATE_CUSTOM_TEMPLATE,
  PddSmsCreateCustomTemplateRequestInterface,
  PddSmsCreateCustomTemplateResponseInterface,
} from './yingXiaoDuanXin/PddSmsCreateCustomTemplate';
import {
  PDD_SMS_CROWDS_PEOPLE_NUMBER_QUERY,
  PddSmsCrowdsPeopleNumberQueryRequestInterface,
  PddSmsCrowdsPeopleNumberQueryResponseInterface,
} from './yingXiaoDuanXin/PddSmsCrowdsPeopleNumberQuery';
import {
  PDD_SMS_CROWDS_QUERY,
  PddSmsCrowdsQueryRequestInterface,
  PddSmsCrowdsQueryResponseInterface,
} from './yingXiaoDuanXin/PddSmsCrowdsQuery';
import {
  PDD_SMS_CUSTOM_SETTING,
  PddSmsCustomSettingRequestInterface,
  PddSmsCustomSettingResponseInterface,
} from './yingXiaoDuanXin/PddSmsCustomSetting';
import {
  PDD_SMS_CUSTOM_TEMPLATE_QUERY,
  PddSmsCustomTemplateQueryRequestInterface,
  PddSmsCustomTemplateQueryResponseInterface,
} from './yingXiaoDuanXin/PddSmsCustomTemplateQuery';
import {
  PDD_SMS_REMAIN_DETAIL_QUERY,
  PddSmsRemainDetailQueryRequestInterface,
  PddSmsRemainDetailQueryResponseInterface,
} from './yingXiaoDuanXin/PddSmsRemainDetailQuery';
import {
  PDD_SMS_REMAIN_SETTING,
  PddSmsRemainSettingRequestInterface,
  PddSmsRemainSettingResponseInterface,
} from './yingXiaoDuanXin/PddSmsRemainSetting';
import {
  PDD_SMS_REMAIN_SETTING_DETAIL_QUERY,
  PddSmsRemainSettingDetailQueryRequestInterface,
  PddSmsRemainSettingDetailQueryResponseInterface,
} from './yingXiaoDuanXin/PddSmsRemainSettingDetailQuery';
import {
  PDD_SMS_SELL_DELETING,
  PddSmsSellDeletingRequestInterface,
  PddSmsSellDeletingResponseInterface,
} from './yingXiaoDuanXin/PddSmsSellDeleting';
import {
  PDD_SMS_SELL_RECORD_LIST_QUERY,
  PddSmsSellRecordListQueryRequestInterface,
  PddSmsSellRecordListQueryResponseInterface,
} from './yingXiaoDuanXin/PddSmsSellRecordListQuery';
import {
  PDD_SMS_SELL_SETTING,
  PddSmsSellSettingRequestInterface,
  PddSmsSellSettingResponseInterface,
} from './yingXiaoDuanXin/PddSmsSellSetting';
import {
  PDD_SMS_SELL_SETTING_DETAIL_QUERY,
  PddSmsSellSettingDetailQueryRequestInterface,
  PddSmsSellSettingDetailQueryResponseInterface,
} from './yingXiaoDuanXin/PddSmsSellSettingDetailQuery';
import {
  PDD_SMS_SELL_SETTING_RECORD_CANCEL,
  PddSmsSellSettingRecordCancelRequestInterface,
  PddSmsSellSettingRecordCancelResponseInterface,
} from './yingXiaoDuanXin/PddSmsSellSettingRecordCancel';
import {
  PDD_SMS_SEND_RECORD_LIST_QUERY,
  PddSmsSendRecordListQueryRequestInterface,
  PddSmsSendRecordListQueryResponseInterface,
} from './yingXiaoDuanXin/PddSmsSendRecordListQuery';
import {
  PDD_SMS_SHORT_STATISTIC_QUERY,
  PddSmsShortStatisticQueryRequestInterface,
  PddSmsShortStatisticQueryResponseInterface,
} from './yingXiaoDuanXin/PddSmsShortStatisticQuery';
import {
  PDD_SMS_TEMPLATE_QUERY,
  PddSmsTemplateQueryRequestInterface,
  PddSmsTemplateQueryResponseInterface,
} from './yingXiaoDuanXin/PddSmsTemplateQuery';
// 工具API
import { PDD_TIME_GET, PddTimeGetRequestInterface, PddTimeGetResponseInterface } from './gongJu/PddTimeGet';
import {
  PDD_UTIL_DIVIDE_BASE64_IMAGE,
  PddUtilDivideBase64ImageRequestInterface,
  PddUtilDivideBase64ImageResponseInterface,
} from './gongJu/PddUtilDivideBase64Image';
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
  PddExpressDepotInfoGetRequestInterface,
  PddExpressDepotInfoGetResponseInterface,
} from './cangChu/PddExpressDepotInfoGet';
import {
  PDD_EXPRESS_DEPOT_LIST_GET,
  PddExpressDepotListGetRequestInterface,
  PddExpressDepotListGetResponseInterface,
} from './cangChu/PddExpressDepotListGet';
import {
  PDD_EXPRESS_MALL_DEPOT_SIMPLE_GET,
  PddExpressMallDepotSimpleGetRequestInterface,
  PddExpressMallDepotSimpleGetResponseInterface,
} from './cangChu/PddExpressMallDepotSimpleGet';
import {
  PDD_EXPRESS_SEARCH_DEPOT,
  PddExpressSearchDepotRequestInterface,
  PddExpressSearchDepotResponseInterface,
} from './cangChu/PddExpressSearchDepot';
import {
  PDD_STOCK_DEPOT_PRIORITY_LIST,
  PddStockDepotPriorityListRequestInterface,
  PddStockDepotPriorityListResponseInterface,
} from './cangChu/PddStockDepotPriorityList';
import {
  PDD_STOCK_DEPOT_PRIORITY_UPDATE,
  PddStockDepotPriorityUpdateRequestInterface,
  PddStockDepotPriorityUpdateResponseInterface,
} from './cangChu/PddStockDepotPriorityUpdate';
import {
  PDD_STOCK_GOODS_ID_TO_SKU_QUERY,
  PddStockGoodsIdToSkuQueryRequestInterface,
  PddStockGoodsIdToSkuQueryResponseInterface,
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
  PddStockWareDetailQueryRequestInterface,
  PddStockWareDetailQueryResponseInterface,
} from './cangChu/PddStockWareDetailQuery';
import {
  PDD_STOCK_WARE_INFO_LIST,
  PddStockWareInfoListRequestInterface,
  PddStockWareInfoListResponseInterface,
} from './cangChu/PddStockWareInfoList';
import {
  PDD_STOCK_WARE_LIST,
  PddStockWareListRequestInterface,
  PddStockWareListResponseInterface,
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
// 消息服务API
import {
  PDD_PMC_USER_CANCEL,
  PddPmcUserCancelRequestInterface,
  PddPmcUserCancelResponseInterface,
} from './xiaoXiFuWu/PddPmcUserCancel';
import {
  PDD_PMC_USER_GET,
  PddPmcUserGetRequestInterface,
  PddPmcUserGetResponseInterface,
} from './xiaoXiFuWu/PddPmcUserGet';
import {
  PDD_PMC_USER_PERMIT,
  PddPmcUserPermitRequestInterface,
  PddPmcUserPermitResponseInterface,
} from './xiaoXiFuWu/PddPmcUserPermit';
// 电子面单API
import {
  PDD_CLOUDPRINT_CMDPRINT_RENDER,
  PddCloudprintCmdprintRenderRequestInterface,
  PddCloudprintCmdprintRenderResponseInterface,
} from './dianZiMianDan/PddCloudprintCmdprintRender';
import {
  PDD_CLOUDPRINT_CUSTOMARES_GET,
  PddCloudprintCustomaresGetRequestInterface,
  PddCloudprintCustomaresGetResponseInterface,
} from './dianZiMianDan/PddCloudprintCustomaresGet';
import {
  PDD_CLOUDPRINT_STDTEMPLATES_GET,
  PddCloudprintStdtemplatesGetRequestInterface,
  PddCloudprintStdtemplatesGetResponseInterface,
} from './dianZiMianDan/PddCloudprintStdtemplatesGet';
import {
  PDD_WAYBILL_CANCEL,
  PddWaybillCancelRequestInterface,
  PddWaybillCancelResponseInterface,
} from './dianZiMianDan/PddWaybillCancel';
import {
  PDD_WAYBILL_GET,
  PddWaybillGetRequestInterface,
  PddWaybillGetResponseInterface,
} from './dianZiMianDan/PddWaybillGet';
import {
  PDD_WAYBILL_QUERY_BY_WAYBILLCODE,
  PddWaybillQueryByWaybillcodeRequestInterface,
  PddWaybillQueryByWaybillcodeResponseInterface,
} from './dianZiMianDan/PddWaybillQueryByWaybillcode';
import {
  PDD_WAYBILL_SEARCH,
  PddWaybillSearchRequestInterface,
  PddWaybillSearchResponseInterface,
} from './dianZiMianDan/PddWaybillSearch';
import {
  PDD_WAYBILL_UPDATE,
  PddWaybillUpdateRequestInterface,
  PddWaybillUpdateResponseInterface,
} from './dianZiMianDan/PddWaybillUpdate';
// 财务API
import {
  PDD_FINANCE_BALANCE_DAILY_BILL_URL_GET,
  PddFinanceBalanceDailyBillUrlGetRequestInterface,
  PddFinanceBalanceDailyBillUrlGetResponseInterface,
} from './caiWu/PddFinanceBalanceDailyBillUrlGet';
// 开平短信服务API
import {
  PDD_OPEN_MSG_SERVICE_QUERY_EXPRESS_MSG_RECORD,
  PddOpenMsgServiceQueryExpressMsgRecordRequestInterface,
  PddOpenMsgServiceQueryExpressMsgRecordResponseInterface,
} from './kaiPingDuanXinFuWu/PddOpenMsgServiceQueryExpressMsgRecord';
import {
  PDD_OPEN_MSG_SERVICE_QUERY_MSG_RECORD,
  PddOpenMsgServiceQueryMsgRecordRequestInterface,
  PddOpenMsgServiceQueryMsgRecordResponseInterface,
} from './kaiPingDuanXinFuWu/PddOpenMsgServiceQueryMsgRecord';
import {
  PDD_OPEN_MSG_SERVICE_SEND_BATCH_MSG,
  PddOpenMsgServiceSendBatchMsgRequestInterface,
  PddOpenMsgServiceSendBatchMsgResponseInterface,
} from './kaiPingDuanXinFuWu/PddOpenMsgServiceSendBatchMsg';
import {
  PDD_OPEN_MSG_SERVICE_SEND_EXPRESS_MSG,
  PddOpenMsgServiceSendExpressMsgRequestInterface,
  PddOpenMsgServiceSendExpressMsgResponseInterface,
} from './kaiPingDuanXinFuWu/PddOpenMsgServiceSendExpressMsg';
import {
  PDD_OPEN_MSG_SERVICE_SEND_MSG,
  PddOpenMsgServiceSendMsgRequestInterface,
  PddOpenMsgServiceSendMsgResponseInterface,
} from './kaiPingDuanXinFuWu/PddOpenMsgServiceSendMsg';
// 服务市场API
import {
  PDD_SERVICEMARKET_SETTLEMENTBILL_GET,
  PddServicemarketSettlementbillGetRequestInterface,
  PddServicemarketSettlementbillGetResponseInterface,
} from './fuWuShiChang/PddServicemarketSettlementbillGet';
import {
  PDD_SERVICEMARKET_TRADELIST_GET,
  PddServicemarketTradelistGetRequestInterface,
  PddServicemarketTradelistGetResponseInterface,
} from './fuWuShiChang/PddServicemarketTradelistGet';
import {
  PDD_VAS_ORDER_SEARCH,
  PddVasOrderSearchRequestInterface,
  PddVasOrderSearchResponseInterface,
} from './fuWuShiChang/PddVasOrderSearch';
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
// 商家工单API
import {
  PDD_MALL_TICKET_DETAIL,
  PddMallTicketDetailRequestInterface,
  PddMallTicketDetailResponseInterface,
} from './shangJiaGongDan/PddMallTicketDetail';
import {
  PDD_MALL_TICKET_LIST,
  PddMallTicketListRequestInterface,
  PddMallTicketListResponseInterface,
} from './shangJiaGongDan/PddMallTicketList';
import {
  PDD_MALL_TICKET_NOTIFY,
  PddMallTicketNotifyRequestInterface,
  PddMallTicketNotifyResponseInterface,
} from './shangJiaGongDan/PddMallTicketNotify';
export {
  PDD_ERP_ORDER_SYNC,
  PddErpOrderSyncRequestInterface,
  PddErpOrderSyncResponseInterface,
  PDD_ORDER_INFORMATION_GET,
  PddOrderInformationGetRequestInterface,
  PddOrderInformationGetResponseInterface,
  PDD_ORDER_LIST_GET,
  PddOrderListGetRequestInterface,
  PddOrderListGetResponseInterface,
  PDD_ORDER_NUMBER_LIST_INCREMENT_GET,
  PddOrderNumberListIncrementGetRequestInterface,
  PddOrderNumberListIncrementGetResponseInterface,
  PDD_ORDER_STATUS_GET,
  PddOrderStatusGetRequestInterface,
  PddOrderStatusGetResponseInterface,
  PDD_NEXTONE_LOGISTICS_WAREHOUSE_UPDATE,
  PddNextoneLogisticsWarehouseUpdateRequestInterface,
  PddNextoneLogisticsWarehouseUpdateResponseInterface,
  PDD_RDC_PDDGENIUS_SENDGOODS_CANCEL,
  PddRdcPddgeniusSendgoodsCancelRequestInterface,
  PddRdcPddgeniusSendgoodsCancelResponseInterface,
  PDD_REFUND_ADDRESS_LIST_GET,
  PddRefundAddressListGetRequestInterface,
  PddRefundAddressListGetResponseInterface,
  PDD_REFUND_INFORMATION_GET,
  PddRefundInformationGetRequestInterface,
  PddRefundInformationGetResponseInterface,
  PDD_REFUND_LIST_INCREMENT_GET,
  PddRefundListIncrementGetRequestInterface,
  PddRefundListIncrementGetResponseInterface,
  PDD_REFUND_STATUS_CHECK,
  PddRefundStatusCheckRequestInterface,
  PddRefundStatusCheckResponseInterface,
  PDD_LOGISTICS_ADDRESS_GET,
  PddLogisticsAddressGetRequestInterface,
  PddLogisticsAddressGetResponseInterface,
  PDD_LOGISTICS_COMPANIES_GET,
  PddLogisticsCompaniesGetRequestInterface,
  PddLogisticsCompaniesGetResponseInterface,
  PDD_LOGISTICS_ONLINE_CREATE,
  PddLogisticsOnlineCreateRequestInterface,
  PddLogisticsOnlineCreateResponseInterface,
  PDD_LOGISTICS_ONLINE_SEND,
  PddLogisticsOnlineSendRequestInterface,
  PddLogisticsOnlineSendResponseInterface,
  PDD_LOGISTICS_ONLINE_STATUS_QUERY,
  PddLogisticsOnlineStatusQueryRequestInterface,
  PddLogisticsOnlineStatusQueryResponseInterface,
  PDD_LOGISTICS_ORDERTRACE_GET,
  PddLogisticsOrdertraceGetRequestInterface,
  PddLogisticsOrdertraceGetResponseInterface,
  PDD_VIRTUAL_GAME_SERVER_QUERY,
  PddVirtualGameServerQueryRequestInterface,
  PddVirtualGameServerQueryResponseInterface,
  PDD_VIRTUAL_MOBILE_CHARGE_NOTIFY,
  PddVirtualMobileChargeNotifyRequestInterface,
  PddVirtualMobileChargeNotifyResponseInterface,
  PDD_DELETE_DRAFT_COMMIT,
  PddDeleteDraftCommitRequestInterface,
  PddDeleteDraftCommitResponseInterface,
  PDD_DELETE_GOODS_COMMIT,
  PddDeleteGoodsCommitRequestInterface,
  PddDeleteGoodsCommitResponseInterface,
  PDD_GOODS_ADD,
  PddGoodsAddRequestInterface,
  PddGoodsAddResponseInterface,
  PDD_GOODS_AUTHORIZATION_CATS,
  PddGoodsAuthorizationCatsRequestInterface,
  PddGoodsAuthorizationCatsResponseInterface,
  PDD_GOODS_CAT_TEMPLATE_GET,
  PddGoodsCatTemplateGetRequestInterface,
  PddGoodsCatTemplateGetResponseInterface,
  PDD_GOODS_CATS_GET,
  PddGoodsCatsGetRequestInterface,
  PddGoodsCatsGetResponseInterface,
  PDD_GOODS_COMMIT_DETAIL_GET,
  PddGoodsCommitDetailGetRequestInterface,
  PddGoodsCommitDetailGetResponseInterface,
  PDD_GOODS_COMMIT_LIST_GET,
  PddGoodsCommitListGetRequestInterface,
  PddGoodsCommitListGetResponseInterface,
  PDD_GOODS_COMMIT_STATUS_GET,
  PddGoodsCommitStatusGetRequestInterface,
  PddGoodsCommitStatusGetResponseInterface,
  PDD_GOODS_COUNTRY_GET,
  PddGoodsCountryGetRequestInterface,
  PddGoodsCountryGetResponseInterface,
  PDD_GOODS_CPS_MALL_UNIT_CHANGE,
  PddGoodsCpsMallUnitChangeRequestInterface,
  PddGoodsCpsMallUnitChangeResponseInterface,
  PDD_GOODS_CPS_MALL_UNIT_CREATE,
  PddGoodsCpsMallUnitCreateRequestInterface,
  PddGoodsCpsMallUnitCreateResponseInterface,
  PDD_GOODS_CPS_MALL_UNIT_PAUSE,
  PddGoodsCpsMallUnitPauseRequestInterface,
  PddGoodsCpsMallUnitPauseResponseInterface,
  PDD_GOODS_CPS_MALL_UNIT_QUERY,
  PddGoodsCpsMallUnitQueryRequestInterface,
  PddGoodsCpsMallUnitQueryResponseInterface,
  PDD_GOODS_CPS_MALL_UNIT_RESUME,
  PddGoodsCpsMallUnitResumeRequestInterface,
  PddGoodsCpsMallUnitResumeResponseInterface,
  PDD_GOODS_CPS_UNIT_CHANGE,
  PddGoodsCpsUnitChangeRequestInterface,
  PddGoodsCpsUnitChangeResponseInterface,
  PDD_GOODS_CPS_UNIT_CREATE,
  PddGoodsCpsUnitCreateRequestInterface,
  PddGoodsCpsUnitCreateResponseInterface,
  PDD_GOODS_CPS_UNIT_DELETE,
  PddGoodsCpsUnitDeleteRequestInterface,
  PddGoodsCpsUnitDeleteResponseInterface,
  PDD_GOODS_CPS_UNIT_QUERY,
  PddGoodsCpsUnitQueryRequestInterface,
  PddGoodsCpsUnitQueryResponseInterface,
  PDD_GOODS_DETAIL_GET,
  PddGoodsDetailGetRequestInterface,
  PddGoodsDetailGetResponseInterface,
  PDD_GOODS_EDIT_GOODS_COMMIT,
  PddGoodsEditGoodsCommitRequestInterface,
  PddGoodsEditGoodsCommitResponseInterface,
  PDD_GOODS_GET_RELATION,
  PddGoodsGetRelationRequestInterface,
  PddGoodsGetRelationResponseInterface,
  PDD_GOODS_IMAGE_UPLOAD,
  PddGoodsImageUploadRequestInterface,
  PddGoodsImageUploadResponseInterface,
  PDD_GOODS_INFORMATION_GET,
  PddGoodsInformationGetRequestInterface,
  PddGoodsInformationGetResponseInterface,
  PDD_GOODS_INFORMATION_UPDATE,
  PddGoodsInformationUpdateRequestInterface,
  PddGoodsInformationUpdateResponseInterface,
  PDD_GOODS_LATEST_COMMIT_STATUS_GET,
  PddGoodsLatestCommitStatusGetRequestInterface,
  PddGoodsLatestCommitStatusGetResponseInterface,
  PDD_GOODS_LIST_GET,
  PddGoodsListGetRequestInterface,
  PddGoodsListGetResponseInterface,
  PDD_GOODS_LOGISTICS_SER_TEMPLATE_CREATE,
  PddGoodsLogisticsSerTemplateCreateRequestInterface,
  PddGoodsLogisticsSerTemplateCreateResponseInterface,
  PDD_GOODS_LOGISTICS_SER_TEMPLATE_DELETE,
  PddGoodsLogisticsSerTemplateDeleteRequestInterface,
  PddGoodsLogisticsSerTemplateDeleteResponseInterface,
  PDD_GOODS_LOGISTICS_SER_TEMPLATE_DETAIL,
  PddGoodsLogisticsSerTemplateDetailRequestInterface,
  PddGoodsLogisticsSerTemplateDetailResponseInterface,
  PDD_GOODS_LOGISTICS_SER_TEMPLATE_LIST,
  PddGoodsLogisticsSerTemplateListRequestInterface,
  PddGoodsLogisticsSerTemplateListResponseInterface,
  PDD_GOODS_LOGISTICS_SER_TEMPLATE_UPDATE,
  PddGoodsLogisticsSerTemplateUpdateRequestInterface,
  PddGoodsLogisticsSerTemplateUpdateResponseInterface,
  PDD_GOODS_LOGISTICS_TEMPLATE_CREATE,
  PddGoodsLogisticsTemplateCreateRequestInterface,
  PddGoodsLogisticsTemplateCreateResponseInterface,
  PDD_GOODS_LOGISTICS_TEMPLATE_GET,
  PddGoodsLogisticsTemplateGetRequestInterface,
  PddGoodsLogisticsTemplateGetResponseInterface,
  PDD_GOODS_OPT_GET,
  PddGoodsOptGetRequestInterface,
  PddGoodsOptGetResponseInterface,
  PDD_GOODS_OUTER_CAT_MAPPING_GET,
  PddGoodsOuterCatMappingGetRequestInterface,
  PddGoodsOuterCatMappingGetResponseInterface,
  PDD_GOODS_QUANTITY_UPDATE,
  PddGoodsQuantityUpdateRequestInterface,
  PddGoodsQuantityUpdateResponseInterface,
  PDD_GOODS_RELATION_SET,
  PddGoodsRelationSetRequestInterface,
  PddGoodsRelationSetResponseInterface,
  PDD_GOODS_SALE_STATUS_SET,
  PddGoodsSaleStatusSetRequestInterface,
  PddGoodsSaleStatusSetResponseInterface,
  PDD_GOODS_SKU_PRICE_UPDATE,
  PddGoodsSkuPriceUpdateRequestInterface,
  PddGoodsSkuPriceUpdateResponseInterface,
  PDD_GOODS_SPEC_GET,
  PddGoodsSpecGetRequestInterface,
  PddGoodsSpecGetResponseInterface,
  PDD_GOODS_SPEC_ID_GET,
  PddGoodsSpecIdGetRequestInterface,
  PddGoodsSpecIdGetResponseInterface,
  PDD_GOODS_SUBMIT_GOODS_COMMIT,
  PddGoodsSubmitGoodsCommitRequestInterface,
  PddGoodsSubmitGoodsCommitResponseInterface,
  PDD_GOODS_TEMPLATE_PROPERTY_VALUE_SEARCH,
  PddGoodsTemplatePropertyValueSearchRequestInterface,
  PddGoodsTemplatePropertyValueSearchResponseInterface,
  PDD_GOOODS_SKU_MEASUREMENT_LIST,
  PddGooodsSkuMeasurementListRequestInterface,
  PddGooodsSkuMeasurementListResponseInterface,
  PDD_ONE_EXPRESS_COST_TEMPLATE,
  PddOneExpressCostTemplateRequestInterface,
  PddOneExpressCostTemplateResponseInterface,
  PDD_AD_BALANCE_GET,
  PddAdBalanceGetRequestInterface,
  PddAdBalanceGetResponseInterface,
  PDD_AD_BID_QUERY_PROFILE,
  PddAdBidQueryProfileRequestInterface,
  PddAdBidQueryProfileResponseInterface,
  PDD_AD_CAN_CREATE_PLAN,
  PddAdCanCreatePlanRequestInterface,
  PddAdCanCreatePlanResponseInterface,
  PDD_AD_CHART_BYKEYWORD_GET,
  PddAdChartBykeywordGetRequestInterface,
  PddAdChartBykeywordGetResponseInterface,
  PDD_AD_CREATE_LOCATION_BID,
  PddAdCreateLocationBidRequestInterface,
  PddAdCreateLocationBidResponseInterface,
  PDD_AD_CREATE_UNIT_BID,
  PddAdCreateUnitBidRequestInterface,
  PddAdCreateUnitBidResponseInterface,
  PDD_AD_CREATIVE_CREATE,
  PddAdCreativeCreateRequestInterface,
  PddAdCreativeCreateResponseInterface,
  PDD_AD_CREATIVE_DELETE,
  PddAdCreativeDeleteRequestInterface,
  PddAdCreativeDeleteResponseInterface,
  PDD_AD_CREATIVE_HISTORY_REPORT_GET,
  PddAdCreativeHistoryReportGetRequestInterface,
  PddAdCreativeHistoryReportGetResponseInterface,
  PDD_AD_CREATIVE_QUERY,
  PddAdCreativeQueryRequestInterface,
  PddAdCreativeQueryResponseInterface,
  PDD_AD_CREATIVE_REPORT_GET,
  PddAdCreativeReportGetRequestInterface,
  PddAdCreativeReportGetResponseInterface,
  PDD_AD_CREATIVE_UPDATE,
  PddAdCreativeUpdateRequestInterface,
  PddAdCreativeUpdateResponseInterface,
  PDD_AD_DELETE_BID,
  PddAdDeleteBidRequestInterface,
  PddAdDeleteBidResponseInterface,
  PDD_AD_DELETE_LOCATION_BID,
  PddAdDeleteLocationBidRequestInterface,
  PddAdDeleteLocationBidResponseInterface,
  PDD_AD_HISTORY_KEYWORD_REPORT_GET,
  PddAdHistoryKeywordReportGetRequestInterface,
  PddAdHistoryKeywordReportGetResponseInterface,
  PDD_AD_HISTORY_PLAN_REPORT_GET,
  PddAdHistoryPlanReportGetRequestInterface,
  PddAdHistoryPlanReportGetResponseInterface,
  PDD_AD_HISTORY_REPORT_GET,
  PddAdHistoryReportGetRequestInterface,
  PddAdHistoryReportGetResponseInterface,
  PDD_AD_HISTORY_RT_KEYWORD_REPORT_GET,
  PddAdHistoryRtKeywordReportGetRequestInterface,
  PddAdHistoryRtKeywordReportGetResponseInterface,
  PDD_AD_HISTORY_RT_PLAN_REPORT_GET,
  PddAdHistoryRtPlanReportGetRequestInterface,
  PddAdHistoryRtPlanReportGetResponseInterface,
  PDD_AD_HISTORY_RT_REPORT_GET,
  PddAdHistoryRtReportGetRequestInterface,
  PddAdHistoryRtReportGetResponseInterface,
  PDD_AD_HISTORY_RT_UNIT_REPORT_GET,
  PddAdHistoryRtUnitReportGetRequestInterface,
  PddAdHistoryRtUnitReportGetResponseInterface,
  PDD_AD_HISTORY_UNIT_REPORT_GET,
  PddAdHistoryUnitReportGetRequestInterface,
  PddAdHistoryUnitReportGetResponseInterface,
  PDD_AD_KEYWORD_CREATE,
  PddAdKeywordCreateRequestInterface,
  PddAdKeywordCreateResponseInterface,
  PDD_AD_KEYWORD_DAILY_REPORT,
  PddAdKeywordDailyReportRequestInterface,
  PddAdKeywordDailyReportResponseInterface,
  PDD_AD_KEYWORD_DELETE,
  PddAdKeywordDeleteRequestInterface,
  PddAdKeywordDeleteResponseInterface,
  PDD_AD_KEYWORD_RCOMMENDED_GET,
  PddAdKeywordRcommendedGetRequestInterface,
  PddAdKeywordRcommendedGetResponseInterface,
  PDD_AD_KEYWORD_RELEVANCE_GET,
  PddAdKeywordRelevanceGetRequestInterface,
  PddAdKeywordRelevanceGetResponseInterface,
  PDD_AD_KEYWORD_UPDATE,
  PddAdKeywordUpdateRequestInterface,
  PddAdKeywordUpdateResponseInterface,
  PDD_AD_PLAN_CREATE,
  PddAdPlanCreateRequestInterface,
  PddAdPlanCreateResponseInterface,
  PDD_AD_PLAN_DELETE,
  PddAdPlanDeleteRequestInterface,
  PddAdPlanDeleteResponseInterface,
  PDD_AD_PLAN_DISCOUNT_UPDATE,
  PddAdPlanDiscountUpdateRequestInterface,
  PddAdPlanDiscountUpdateResponseInterface,
  PDD_AD_PLAN_INFO_LIST_GET,
  PddAdPlanInfoListGetRequestInterface,
  PddAdPlanInfoListGetResponseInterface,
  PDD_AD_PLAN_MAX_COST_UPDATE,
  PddAdPlanMaxCostUpdateRequestInterface,
  PddAdPlanMaxCostUpdateResponseInterface,
  PDD_AD_PLAN_NAME_UPDATE,
  PddAdPlanNameUpdateRequestInterface,
  PddAdPlanNameUpdateResponseInterface,
  PDD_AD_PLAN_OPT_STATUS_UPDATE,
  PddAdPlanOptStatusUpdateRequestInterface,
  PddAdPlanOptStatusUpdateResponseInterface,
  PDD_AD_QUERY_BID_LIST,
  PddAdQueryBidListRequestInterface,
  PddAdQueryBidListResponseInterface,
  PDD_AD_QUERY_LOCATION_BID_HISTORY_REPORT,
  PddAdQueryLocationBidHistoryReportRequestInterface,
  PddAdQueryLocationBidHistoryReportResponseInterface,
  PDD_AD_QUERY_LOCATION_BID_LIST,
  PddAdQueryLocationBidListRequestInterface,
  PddAdQueryLocationBidListResponseInterface,
  PDD_AD_QUERY_LOCATION_BID_PV_LIST,
  PddAdQueryLocationBidPvListRequestInterface,
  PddAdQueryLocationBidPvListResponseInterface,
  PDD_AD_QUERY_UNIT_BID_HISTORY_REPORT,
  PddAdQueryUnitBidHistoryReportRequestInterface,
  PddAdQueryUnitBidHistoryReportResponseInterface,
  PDD_AD_UNIT_CREATE,
  PddAdUnitCreateRequestInterface,
  PddAdUnitCreateResponseInterface,
  PDD_AD_UNIT_DELETE,
  PddAdUnitDeleteRequestInterface,
  PddAdUnitDeleteResponseInterface,
  PDD_AD_UNIT_GET_BY_PLAN_ID,
  PddAdUnitGetByPlanIdRequestInterface,
  PddAdUnitGetByPlanIdResponseInterface,
  PDD_AD_UNIT_OPT_STATUS_UPDATE,
  PddAdUnitOptStatusUpdateRequestInterface,
  PddAdUnitOptStatusUpdateResponseInterface,
  PDD_AD_UPDATE_BID,
  PddAdUpdateBidRequestInterface,
  PddAdUpdateBidResponseInterface,
  PDD_AD_UPDATE_LOCATION_BID,
  PddAdUpdateLocationBidRequestInterface,
  PddAdUpdateLocationBidResponseInterface,
  PDD_DDK_CMS_PROM_URL_GENERATE,
  PddDdkCmsPromUrlGenerateRequestInterface,
  PddDdkCmsPromUrlGenerateResponseInterface,
  PDD_DDK_COUPON_INFO_QUERY,
  PddDdkCouponInfoQueryRequestInterface,
  PddDdkCouponInfoQueryResponseInterface,
  PDD_DDK_FINANCE_CPA_QUERY,
  PddDdkFinanceCpaQueryRequestInterface,
  PddDdkFinanceCpaQueryResponseInterface,
  PDD_DDK_GOODS_BASIC_INFO_GET,
  PddDdkGoodsBasicInfoGetRequestInterface,
  PddDdkGoodsBasicInfoGetResponseInterface,
  PDD_DDK_GOODS_DETAIL,
  PddDdkGoodsDetailRequestInterface,
  PddDdkGoodsDetailResponseInterface,
  PDD_DDK_GOODS_PID_GENERATE,
  PddDdkGoodsPidGenerateRequestInterface,
  PddDdkGoodsPidGenerateResponseInterface,
  PDD_DDK_GOODS_PID_QUERY,
  PddDdkGoodsPidQueryRequestInterface,
  PddDdkGoodsPidQueryResponseInterface,
  PDD_DDK_GOODS_PROMOTION_URL_GENERATE,
  PddDdkGoodsPromotionUrlGenerateRequestInterface,
  PddDdkGoodsPromotionUrlGenerateResponseInterface,
  PDD_DDK_GOODS_RECOMMEND_GET,
  PddDdkGoodsRecommendGetRequestInterface,
  PddDdkGoodsRecommendGetResponseInterface,
  PDD_DDK_GOODS_SEARCH,
  PddDdkGoodsSearchRequestInterface,
  PddDdkGoodsSearchResponseInterface,
  PDD_DDK_GOODS_UNIT_QUERY,
  PddDdkGoodsUnitQueryRequestInterface,
  PddDdkGoodsUnitQueryResponseInterface,
  PDD_DDK_GOODS_ZS_UNIT_URL_GEN,
  PddDdkGoodsZsUnitUrlGenRequestInterface,
  PddDdkGoodsZsUnitUrlGenResponseInterface,
  PDD_DDK_LOTTERY_URL_GEN,
  PddDdkLotteryUrlGenRequestInterface,
  PddDdkLotteryUrlGenResponseInterface,
  PDD_DDK_MALL_GOODS_LIST_GET,
  PddDdkMallGoodsListGetRequestInterface,
  PddDdkMallGoodsListGetResponseInterface,
  PDD_DDK_MALL_URL_GEN,
  PddDdkMallUrlGenRequestInterface,
  PddDdkMallUrlGenResponseInterface,
  PDD_DDK_MERCHANT_LIST_GET,
  PddDdkMerchantListGetRequestInterface,
  PddDdkMerchantListGetResponseInterface,
  PDD_DDK_ORDER_DETAIL_GET,
  PddDdkOrderDetailGetRequestInterface,
  PddDdkOrderDetailGetResponseInterface,
  PDD_DDK_ORDER_LIST_INCREMENT_GET,
  PddDdkOrderListIncrementGetRequestInterface,
  PddDdkOrderListIncrementGetResponseInterface,
  PDD_DDK_ORDER_LIST_RANGE_GET,
  PddDdkOrderListRangeGetRequestInterface,
  PddDdkOrderListRangeGetResponseInterface,
  PDD_DDK_RESOURCE_URL_GEN,
  PddDdkResourceUrlGenRequestInterface,
  PddDdkResourceUrlGenResponseInterface,
  PDD_DDK_RP_PROM_URL_GENERATE,
  PddDdkRpPromUrlGenerateRequestInterface,
  PddDdkRpPromUrlGenerateResponseInterface,
  PDD_DDK_THEME_GOODS_SEARCH,
  PddDdkThemeGoodsSearchRequestInterface,
  PddDdkThemeGoodsSearchResponseInterface,
  PDD_DDK_THEME_LIST_GET,
  PddDdkThemeListGetRequestInterface,
  PddDdkThemeListGetResponseInterface,
  PDD_DDK_THEME_PROM_URL_GENERATE,
  PddDdkThemePromUrlGenerateRequestInterface,
  PddDdkThemePromUrlGenerateResponseInterface,
  PDD_DDK_TOP_GOODS_LIST_QUERY,
  PddDdkTopGoodsListQueryRequestInterface,
  PddDdkTopGoodsListQueryResponseInterface,
  PDD_DDK_WEAPP_QRCODE_URL_GEN,
  PddDdkWeappQrcodeUrlGenRequestInterface,
  PddDdkWeappQrcodeUrlGenResponseInterface,
  PDD_DDK_ALL_ORDER_LIST_INCREMENT_GET,
  PddDdkAllOrderListIncrementGetRequestInterface,
  PddDdkAllOrderListIncrementGetResponseInterface,
  PDD_DDK_OAUTH_CMS_PROM_URL_GENERATE,
  PddDdkOauthCmsPromUrlGenerateRequestInterface,
  PddDdkOauthCmsPromUrlGenerateResponseInterface,
  PDD_DDK_OAUTH_GOODS_PID_GENERATE,
  PddDdkOauthGoodsPidGenerateRequestInterface,
  PddDdkOauthGoodsPidGenerateResponseInterface,
  PDD_DDK_OAUTH_GOODS_PID_QUERY,
  PddDdkOauthGoodsPidQueryRequestInterface,
  PddDdkOauthGoodsPidQueryResponseInterface,
  PDD_DDK_OAUTH_GOODS_PROM_URL_GENERATE,
  PddDdkOauthGoodsPromUrlGenerateRequestInterface,
  PddDdkOauthGoodsPromUrlGenerateResponseInterface,
  PDD_DDK_OAUTH_GOODS_RECOMMEND_GET,
  PddDdkOauthGoodsRecommendGetRequestInterface,
  PddDdkOauthGoodsRecommendGetResponseInterface,
  PDD_DDK_OAUTH_GOODS_ZS_UNIT_URL_GEN,
  PddDdkOauthGoodsZsUnitUrlGenRequestInterface,
  PddDdkOauthGoodsZsUnitUrlGenResponseInterface,
  PDD_DDK_OAUTH_LOTTERY_URL_GEN,
  PddDdkOauthLotteryUrlGenRequestInterface,
  PddDdkOauthLotteryUrlGenResponseInterface,
  PDD_DDK_OAUTH_MALL_URL_GEN,
  PddDdkOauthMallUrlGenRequestInterface,
  PddDdkOauthMallUrlGenResponseInterface,
  PDD_DDK_OAUTH_ORDER_DETAIL_GET,
  PddDdkOauthOrderDetailGetRequestInterface,
  PddDdkOauthOrderDetailGetResponseInterface,
  PDD_DDK_OAUTH_RESOURCE_URL_GEN,
  PddDdkOauthResourceUrlGenRequestInterface,
  PddDdkOauthResourceUrlGenResponseInterface,
  PDD_DDK_OAUTH_RP_PROM_URL_GENERATE,
  PddDdkOauthRpPromUrlGenerateRequestInterface,
  PddDdkOauthRpPromUrlGenerateResponseInterface,
  PDD_DDK_OAUTH_THEME_PROM_URL_GENERATE,
  PddDdkOauthThemePromUrlGenerateRequestInterface,
  PddDdkOauthThemePromUrlGenerateResponseInterface,
  PDD_DDK_OAUTH_TOP_GOODS_LIST_QUERY,
  PddDdkOauthTopGoodsListQueryRequestInterface,
  PddDdkOauthTopGoodsListQueryResponseInterface,
  PDD_LOGISTICS_CS_HISTORY_MESSAGE_GET,
  PddLogisticsCsHistoryMessageGetRequestInterface,
  PddLogisticsCsHistoryMessageGetResponseInterface,
  PDD_LOGISTICS_CS_MESSAGE_SEND,
  PddLogisticsCsMessageSendRequestInterface,
  PddLogisticsCsMessageSendResponseInterface,
  PDD_LOGISTICS_CS_SESSION_CLOSE,
  PddLogisticsCsSessionCloseRequestInterface,
  PddLogisticsCsSessionCloseResponseInterface,
  PDD_LOGISTICS_CS_SESSION_START,
  PddLogisticsCsSessionStartRequestInterface,
  PddLogisticsCsSessionStartResponseInterface,
  PDD_LOGISTICS_TICKET_GET,
  PddLogisticsTicketGetRequestInterface,
  PddLogisticsTicketGetResponseInterface,
  PDD_LOGISTICS_TICKET_IMAGE_UPLOAD,
  PddLogisticsTicketImageUploadRequestInterface,
  PddLogisticsTicketImageUploadResponseInterface,
  PDD_LOGISTICS_TICKET_NOTIFY,
  PddLogisticsTicketNotifyRequestInterface,
  PddLogisticsTicketNotifyResponseInterface,
  PDD_LOGISTICS_TICKET_PROBLEM_TYPE_GET,
  PddLogisticsTicketProblemTypeGetRequestInterface,
  PddLogisticsTicketProblemTypeGetResponseInterface,
  PDD_PROMOTION_COUPON_CLOSE,
  PddPromotionCouponCloseRequestInterface,
  PddPromotionCouponCloseResponseInterface,
  PDD_PROMOTION_COUPON_QUANTITY_ADD,
  PddPromotionCouponQuantityAddRequestInterface,
  PddPromotionCouponQuantityAddResponseInterface,
  PDD_PROMOTION_GOODS_COUPON_CREATE,
  PddPromotionGoodsCouponCreateRequestInterface,
  PddPromotionGoodsCouponCreateResponseInterface,
  PDD_PROMOTION_GOODS_COUPON_LIST_GET,
  PddPromotionGoodsCouponListGetRequestInterface,
  PddPromotionGoodsCouponListGetResponseInterface,
  PDD_PROMOTION_HOME_COUPON_CREATE,
  PddPromotionHomeCouponCreateRequestInterface,
  PddPromotionHomeCouponCreateResponseInterface,
  PDD_PROMOTION_MERCHANT_COUPON_LIST_GET,
  PddPromotionMerchantCouponListGetRequestInterface,
  PddPromotionMerchantCouponListGetResponseInterface,
  PDD_VOUCHER_APPOINTMENT_INFO_SEND,
  PddVoucherAppointmentInfoSendRequestInterface,
  PddVoucherAppointmentInfoSendResponseInterface,
  PDD_VOUCHER_OTA_CARD_VERIFICATION,
  PddVoucherOtaCardVerificationRequestInterface,
  PddVoucherOtaCardVerificationResponseInterface,
  PDD_VOUCHER_PHYSICAL_GOODS_SEND,
  PddVoucherPhysicalGoodsSendRequestInterface,
  PddVoucherPhysicalGoodsSendResponseInterface,
  PDD_VOUCHER_VIRTUAL_CARD_VERIFICATION,
  PddVoucherVirtualCardVerificationRequestInterface,
  PddVoucherVirtualCardVerificationResponseInterface,
  PDD_VOUCHER_VOUCHER_COMPLAIN,
  PddVoucherVoucherComplainRequestInterface,
  PddVoucherVoucherComplainResponseInterface,
  PDD_VOUCHER_VOUCHER_INFO_SEND,
  PddVoucherVoucherInfoSendRequestInterface,
  PddVoucherVoucherInfoSendResponseInterface,
  PDD_INVOICE_APPLICATION_QUERY,
  PddInvoiceApplicationQueryRequestInterface,
  PddInvoiceApplicationQueryResponseInterface,
  PDD_INVOICE_APPLICATION_UPDATE,
  PddInvoiceApplicationUpdateRequestInterface,
  PddInvoiceApplicationUpdateResponseInterface,
  PDD_INVOICE_DETAIL_INVALID,
  PddInvoiceDetailInvalidRequestInterface,
  PddInvoiceDetailInvalidResponseInterface,
  PDD_INVOICE_DETAIL_QUERY,
  PddInvoiceDetailQueryRequestInterface,
  PddInvoiceDetailQueryResponseInterface,
  PDD_INVOICE_DETAIL_UPLOAD,
  PddInvoiceDetailUploadRequestInterface,
  PddInvoiceDetailUploadResponseInterface,
  PDD_MALL_CPS_PROTOCOL_STATUS_QUERY,
  PddMallCpsProtocolStatusQueryRequestInterface,
  PddMallCpsProtocolStatusQueryResponseInterface,
  PDD_MALL_INFO_BONDED_WAREHOUSE_GET,
  PddMallInfoBondedWarehouseGetRequestInterface,
  PddMallInfoBondedWarehouseGetResponseInterface,
  PDD_MALL_INFO_GET,
  PddMallInfoGetRequestInterface,
  PddMallInfoGetResponseInterface,
  PDD_MALL_INFO_GROUP_ADD_STORE_POST,
  PddMallInfoGroupAddStorePostRequestInterface,
  PddMallInfoGroupAddStorePostResponseInterface,
  PDD_MALL_INFO_GROUP_LIST_STORE_GET,
  PddMallInfoGroupListStoreGetRequestInterface,
  PddMallInfoGroupListStoreGetResponseInterface,
  PDD_MALL_INFO_GROUP_REMOVE_STORE_GET,
  PddMallInfoGroupRemoveStoreGetRequestInterface,
  PddMallInfoGroupRemoveStoreGetResponseInterface,
  PDD_MALL_INFO_STORE_CREATE_POST,
  PddMallInfoStoreCreatePostRequestInterface,
  PddMallInfoStoreCreatePostResponseInterface,
  PDD_MALL_INFO_STORE_CREATE_POST_NOPOI,
  PddMallInfoStoreCreatePostNopoiRequestInterface,
  PddMallInfoStoreCreatePostNopoiResponseInterface,
  PDD_MALL_INFO_STORE_DELETE_POST,
  PddMallInfoStoreDeletePostRequestInterface,
  PddMallInfoStoreDeletePostResponseInterface,
  PDD_MALL_INFO_STORE_GET,
  PddMallInfoStoreGetRequestInterface,
  PddMallInfoStoreGetResponseInterface,
  PDD_MALL_INFO_STORE_UPDATE_POST,
  PddMallInfoStoreUpdatePostRequestInterface,
  PddMallInfoStoreUpdatePostResponseInterface,
  PDD_MALL_INFO_STORE_UPDATE_POST_NOPOI,
  PddMallInfoStoreUpdatePostNopoiRequestInterface,
  PddMallInfoStoreUpdatePostNopoiResponseInterface,
  PDD_QRPAY_PAYEE_REGISTER,
  PddQrpayPayeeRegisterRequestInterface,
  PddQrpayPayeeRegisterResponseInterface,
  PDD_SMS_ADD_CROWD,
  PddSmsAddCrowdRequestInterface,
  PddSmsAddCrowdResponseInterface,
  PDD_SMS_CREATE_CUSTOM_TEMPLATE,
  PddSmsCreateCustomTemplateRequestInterface,
  PddSmsCreateCustomTemplateResponseInterface,
  PDD_SMS_CROWDS_PEOPLE_NUMBER_QUERY,
  PddSmsCrowdsPeopleNumberQueryRequestInterface,
  PddSmsCrowdsPeopleNumberQueryResponseInterface,
  PDD_SMS_CROWDS_QUERY,
  PddSmsCrowdsQueryRequestInterface,
  PddSmsCrowdsQueryResponseInterface,
  PDD_SMS_CUSTOM_SETTING,
  PddSmsCustomSettingRequestInterface,
  PddSmsCustomSettingResponseInterface,
  PDD_SMS_CUSTOM_TEMPLATE_QUERY,
  PddSmsCustomTemplateQueryRequestInterface,
  PddSmsCustomTemplateQueryResponseInterface,
  PDD_SMS_REMAIN_DETAIL_QUERY,
  PddSmsRemainDetailQueryRequestInterface,
  PddSmsRemainDetailQueryResponseInterface,
  PDD_SMS_REMAIN_SETTING,
  PddSmsRemainSettingRequestInterface,
  PddSmsRemainSettingResponseInterface,
  PDD_SMS_REMAIN_SETTING_DETAIL_QUERY,
  PddSmsRemainSettingDetailQueryRequestInterface,
  PddSmsRemainSettingDetailQueryResponseInterface,
  PDD_SMS_SELL_DELETING,
  PddSmsSellDeletingRequestInterface,
  PddSmsSellDeletingResponseInterface,
  PDD_SMS_SELL_RECORD_LIST_QUERY,
  PddSmsSellRecordListQueryRequestInterface,
  PddSmsSellRecordListQueryResponseInterface,
  PDD_SMS_SELL_SETTING,
  PddSmsSellSettingRequestInterface,
  PddSmsSellSettingResponseInterface,
  PDD_SMS_SELL_SETTING_DETAIL_QUERY,
  PddSmsSellSettingDetailQueryRequestInterface,
  PddSmsSellSettingDetailQueryResponseInterface,
  PDD_SMS_SELL_SETTING_RECORD_CANCEL,
  PddSmsSellSettingRecordCancelRequestInterface,
  PddSmsSellSettingRecordCancelResponseInterface,
  PDD_SMS_SEND_RECORD_LIST_QUERY,
  PddSmsSendRecordListQueryRequestInterface,
  PddSmsSendRecordListQueryResponseInterface,
  PDD_SMS_SHORT_STATISTIC_QUERY,
  PddSmsShortStatisticQueryRequestInterface,
  PddSmsShortStatisticQueryResponseInterface,
  PDD_SMS_TEMPLATE_QUERY,
  PddSmsTemplateQueryRequestInterface,
  PddSmsTemplateQueryResponseInterface,
  PDD_TIME_GET,
  PddTimeGetRequestInterface,
  PddTimeGetResponseInterface,
  PDD_UTIL_DIVIDE_BASE64_IMAGE,
  PddUtilDivideBase64ImageRequestInterface,
  PddUtilDivideBase64ImageResponseInterface,
  PDD_EXPRESS_ADD_DEPOT,
  PddExpressAddDepotRequestInterface,
  PddExpressAddDepotResponseInterface,
  PDD_EXPRESS_CHANGE_DEPOT_INFO,
  PddExpressChangeDepotInfoRequestInterface,
  PddExpressChangeDepotInfoResponseInterface,
  PDD_EXPRESS_DEPOT_INFO_GET,
  PddExpressDepotInfoGetRequestInterface,
  PddExpressDepotInfoGetResponseInterface,
  PDD_EXPRESS_DEPOT_LIST_GET,
  PddExpressDepotListGetRequestInterface,
  PddExpressDepotListGetResponseInterface,
  PDD_EXPRESS_MALL_DEPOT_SIMPLE_GET,
  PddExpressMallDepotSimpleGetRequestInterface,
  PddExpressMallDepotSimpleGetResponseInterface,
  PDD_EXPRESS_SEARCH_DEPOT,
  PddExpressSearchDepotRequestInterface,
  PddExpressSearchDepotResponseInterface,
  PDD_STOCK_DEPOT_PRIORITY_LIST,
  PddStockDepotPriorityListRequestInterface,
  PddStockDepotPriorityListResponseInterface,
  PDD_STOCK_DEPOT_PRIORITY_UPDATE,
  PddStockDepotPriorityUpdateRequestInterface,
  PddStockDepotPriorityUpdateResponseInterface,
  PDD_STOCK_GOODS_ID_TO_SKU_QUERY,
  PddStockGoodsIdToSkuQueryRequestInterface,
  PddStockGoodsIdToSkuQueryResponseInterface,
  PDD_STOCK_WARE_CREATE,
  PddStockWareCreateRequestInterface,
  PddStockWareCreateResponseInterface,
  PDD_STOCK_WARE_DELETE,
  PddStockWareDeleteRequestInterface,
  PddStockWareDeleteResponseInterface,
  PDD_STOCK_WARE_DETAIL_QUERY,
  PddStockWareDetailQueryRequestInterface,
  PddStockWareDetailQueryResponseInterface,
  PDD_STOCK_WARE_INFO_LIST,
  PddStockWareInfoListRequestInterface,
  PddStockWareInfoListResponseInterface,
  PDD_STOCK_WARE_LIST,
  PddStockWareListRequestInterface,
  PddStockWareListResponseInterface,
  PDD_STOCK_WARE_MOVE,
  PddStockWareMoveRequestInterface,
  PddStockWareMoveResponseInterface,
  PDD_STOCK_WARE_SKU_UPDATE,
  PddStockWareSkuUpdateRequestInterface,
  PddStockWareSkuUpdateResponseInterface,
  PDD_STOCK_WARE_UPDATE,
  PddStockWareUpdateRequestInterface,
  PddStockWareUpdateResponseInterface,
  PDD_PMC_USER_CANCEL,
  PddPmcUserCancelRequestInterface,
  PddPmcUserCancelResponseInterface,
  PDD_PMC_USER_GET,
  PddPmcUserGetRequestInterface,
  PddPmcUserGetResponseInterface,
  PDD_PMC_USER_PERMIT,
  PddPmcUserPermitRequestInterface,
  PddPmcUserPermitResponseInterface,
  PDD_CLOUDPRINT_CMDPRINT_RENDER,
  PddCloudprintCmdprintRenderRequestInterface,
  PddCloudprintCmdprintRenderResponseInterface,
  PDD_CLOUDPRINT_CUSTOMARES_GET,
  PddCloudprintCustomaresGetRequestInterface,
  PddCloudprintCustomaresGetResponseInterface,
  PDD_CLOUDPRINT_STDTEMPLATES_GET,
  PddCloudprintStdtemplatesGetRequestInterface,
  PddCloudprintStdtemplatesGetResponseInterface,
  PDD_WAYBILL_CANCEL,
  PddWaybillCancelRequestInterface,
  PddWaybillCancelResponseInterface,
  PDD_WAYBILL_GET,
  PddWaybillGetRequestInterface,
  PddWaybillGetResponseInterface,
  PDD_WAYBILL_QUERY_BY_WAYBILLCODE,
  PddWaybillQueryByWaybillcodeRequestInterface,
  PddWaybillQueryByWaybillcodeResponseInterface,
  PDD_WAYBILL_SEARCH,
  PddWaybillSearchRequestInterface,
  PddWaybillSearchResponseInterface,
  PDD_WAYBILL_UPDATE,
  PddWaybillUpdateRequestInterface,
  PddWaybillUpdateResponseInterface,
  PDD_FINANCE_BALANCE_DAILY_BILL_URL_GET,
  PddFinanceBalanceDailyBillUrlGetRequestInterface,
  PddFinanceBalanceDailyBillUrlGetResponseInterface,
  PDD_OPEN_MSG_SERVICE_QUERY_EXPRESS_MSG_RECORD,
  PddOpenMsgServiceQueryExpressMsgRecordRequestInterface,
  PddOpenMsgServiceQueryExpressMsgRecordResponseInterface,
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
  PDD_SERVICEMARKET_SETTLEMENTBILL_GET,
  PddServicemarketSettlementbillGetRequestInterface,
  PddServicemarketSettlementbillGetResponseInterface,
  PDD_SERVICEMARKET_TRADELIST_GET,
  PddServicemarketTradelistGetRequestInterface,
  PddServicemarketTradelistGetResponseInterface,
  PDD_VAS_ORDER_SEARCH,
  PddVasOrderSearchRequestInterface,
  PddVasOrderSearchResponseInterface,
  PDD_SMS_DETAILBILL_PUSH,
  PddSmsDetailbillPushRequestInterface,
  PddSmsDetailbillPushResponseInterface,
  PDD_SMS_VENDOR_COMPLAINT_CREATE,
  PddSmsVendorComplaintCreateRequestInterface,
  PddSmsVendorComplaintCreateResponseInterface,
  PDD_MALL_TICKET_DETAIL,
  PddMallTicketDetailRequestInterface,
  PddMallTicketDetailResponseInterface,
  PDD_MALL_TICKET_LIST,
  PddMallTicketListRequestInterface,
  PddMallTicketListResponseInterface,
  PDD_MALL_TICKET_NOTIFY,
  PddMallTicketNotifyRequestInterface,
  PddMallTicketNotifyResponseInterface,
};
export interface PddCollectRequestInterface {
  [PDD_ERP_ORDER_SYNC]: PddErpOrderSyncRequestInterface;
  [PDD_ORDER_INFORMATION_GET]: PddOrderInformationGetRequestInterface;
  [PDD_ORDER_LIST_GET]: PddOrderListGetRequestInterface;
  [PDD_ORDER_NUMBER_LIST_INCREMENT_GET]: PddOrderNumberListIncrementGetRequestInterface;
  [PDD_ORDER_STATUS_GET]: PddOrderStatusGetRequestInterface;
  [PDD_NEXTONE_LOGISTICS_WAREHOUSE_UPDATE]: PddNextoneLogisticsWarehouseUpdateRequestInterface;
  [PDD_RDC_PDDGENIUS_SENDGOODS_CANCEL]: PddRdcPddgeniusSendgoodsCancelRequestInterface;
  [PDD_REFUND_ADDRESS_LIST_GET]: PddRefundAddressListGetRequestInterface;
  [PDD_REFUND_INFORMATION_GET]: PddRefundInformationGetRequestInterface;
  [PDD_REFUND_LIST_INCREMENT_GET]: PddRefundListIncrementGetRequestInterface;
  [PDD_REFUND_STATUS_CHECK]: PddRefundStatusCheckRequestInterface;
  [PDD_LOGISTICS_ADDRESS_GET]: PddLogisticsAddressGetRequestInterface;
  [PDD_LOGISTICS_COMPANIES_GET]: PddLogisticsCompaniesGetRequestInterface;
  [PDD_LOGISTICS_ONLINE_CREATE]: PddLogisticsOnlineCreateRequestInterface;
  [PDD_LOGISTICS_ONLINE_SEND]: PddLogisticsOnlineSendRequestInterface;
  [PDD_LOGISTICS_ONLINE_STATUS_QUERY]: PddLogisticsOnlineStatusQueryRequestInterface;
  [PDD_LOGISTICS_ORDERTRACE_GET]: PddLogisticsOrdertraceGetRequestInterface;
  [PDD_VIRTUAL_GAME_SERVER_QUERY]: PddVirtualGameServerQueryRequestInterface;
  [PDD_VIRTUAL_MOBILE_CHARGE_NOTIFY]: PddVirtualMobileChargeNotifyRequestInterface;
  [PDD_DELETE_DRAFT_COMMIT]: PddDeleteDraftCommitRequestInterface;
  [PDD_DELETE_GOODS_COMMIT]: PddDeleteGoodsCommitRequestInterface;
  [PDD_GOODS_ADD]: PddGoodsAddRequestInterface;
  [PDD_GOODS_AUTHORIZATION_CATS]: PddGoodsAuthorizationCatsRequestInterface;
  [PDD_GOODS_CAT_TEMPLATE_GET]: PddGoodsCatTemplateGetRequestInterface;
  [PDD_GOODS_CATS_GET]: PddGoodsCatsGetRequestInterface;
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
  [PDD_GOODS_GET_RELATION]: PddGoodsGetRelationRequestInterface;
  [PDD_GOODS_IMAGE_UPLOAD]: PddGoodsImageUploadRequestInterface;
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
  [PDD_GOODS_OPT_GET]: PddGoodsOptGetRequestInterface;
  [PDD_GOODS_OUTER_CAT_MAPPING_GET]: PddGoodsOuterCatMappingGetRequestInterface;
  [PDD_GOODS_QUANTITY_UPDATE]: PddGoodsQuantityUpdateRequestInterface;
  [PDD_GOODS_RELATION_SET]: PddGoodsRelationSetRequestInterface;
  [PDD_GOODS_SALE_STATUS_SET]: PddGoodsSaleStatusSetRequestInterface;
  [PDD_GOODS_SKU_PRICE_UPDATE]: PddGoodsSkuPriceUpdateRequestInterface;
  [PDD_GOODS_SPEC_GET]: PddGoodsSpecGetRequestInterface;
  [PDD_GOODS_SPEC_ID_GET]: PddGoodsSpecIdGetRequestInterface;
  [PDD_GOODS_SUBMIT_GOODS_COMMIT]: PddGoodsSubmitGoodsCommitRequestInterface;
  [PDD_GOODS_TEMPLATE_PROPERTY_VALUE_SEARCH]: PddGoodsTemplatePropertyValueSearchRequestInterface;
  [PDD_GOOODS_SKU_MEASUREMENT_LIST]: PddGooodsSkuMeasurementListRequestInterface;
  [PDD_ONE_EXPRESS_COST_TEMPLATE]: PddOneExpressCostTemplateRequestInterface;
  [PDD_AD_BALANCE_GET]: PddAdBalanceGetRequestInterface;
  [PDD_AD_BID_QUERY_PROFILE]: PddAdBidQueryProfileRequestInterface;
  [PDD_AD_CAN_CREATE_PLAN]: PddAdCanCreatePlanRequestInterface;
  [PDD_AD_CHART_BYKEYWORD_GET]: PddAdChartBykeywordGetRequestInterface;
  [PDD_AD_CREATE_LOCATION_BID]: PddAdCreateLocationBidRequestInterface;
  [PDD_AD_CREATE_UNIT_BID]: PddAdCreateUnitBidRequestInterface;
  [PDD_AD_CREATIVE_CREATE]: PddAdCreativeCreateRequestInterface;
  [PDD_AD_CREATIVE_DELETE]: PddAdCreativeDeleteRequestInterface;
  [PDD_AD_CREATIVE_HISTORY_REPORT_GET]: PddAdCreativeHistoryReportGetRequestInterface;
  [PDD_AD_CREATIVE_QUERY]: PddAdCreativeQueryRequestInterface;
  [PDD_AD_CREATIVE_REPORT_GET]: PddAdCreativeReportGetRequestInterface;
  [PDD_AD_CREATIVE_UPDATE]: PddAdCreativeUpdateRequestInterface;
  [PDD_AD_DELETE_BID]: PddAdDeleteBidRequestInterface;
  [PDD_AD_DELETE_LOCATION_BID]: PddAdDeleteLocationBidRequestInterface;
  [PDD_AD_HISTORY_KEYWORD_REPORT_GET]: PddAdHistoryKeywordReportGetRequestInterface;
  [PDD_AD_HISTORY_PLAN_REPORT_GET]: PddAdHistoryPlanReportGetRequestInterface;
  [PDD_AD_HISTORY_REPORT_GET]: PddAdHistoryReportGetRequestInterface;
  [PDD_AD_HISTORY_RT_KEYWORD_REPORT_GET]: PddAdHistoryRtKeywordReportGetRequestInterface;
  [PDD_AD_HISTORY_RT_PLAN_REPORT_GET]: PddAdHistoryRtPlanReportGetRequestInterface;
  [PDD_AD_HISTORY_RT_REPORT_GET]: PddAdHistoryRtReportGetRequestInterface;
  [PDD_AD_HISTORY_RT_UNIT_REPORT_GET]: PddAdHistoryRtUnitReportGetRequestInterface;
  [PDD_AD_HISTORY_UNIT_REPORT_GET]: PddAdHistoryUnitReportGetRequestInterface;
  [PDD_AD_KEYWORD_CREATE]: PddAdKeywordCreateRequestInterface;
  [PDD_AD_KEYWORD_DAILY_REPORT]: PddAdKeywordDailyReportRequestInterface;
  [PDD_AD_KEYWORD_DELETE]: PddAdKeywordDeleteRequestInterface;
  [PDD_AD_KEYWORD_RCOMMENDED_GET]: PddAdKeywordRcommendedGetRequestInterface;
  [PDD_AD_KEYWORD_RELEVANCE_GET]: PddAdKeywordRelevanceGetRequestInterface;
  [PDD_AD_KEYWORD_UPDATE]: PddAdKeywordUpdateRequestInterface;
  [PDD_AD_PLAN_CREATE]: PddAdPlanCreateRequestInterface;
  [PDD_AD_PLAN_DELETE]: PddAdPlanDeleteRequestInterface;
  [PDD_AD_PLAN_DISCOUNT_UPDATE]: PddAdPlanDiscountUpdateRequestInterface;
  [PDD_AD_PLAN_INFO_LIST_GET]: PddAdPlanInfoListGetRequestInterface;
  [PDD_AD_PLAN_MAX_COST_UPDATE]: PddAdPlanMaxCostUpdateRequestInterface;
  [PDD_AD_PLAN_NAME_UPDATE]: PddAdPlanNameUpdateRequestInterface;
  [PDD_AD_PLAN_OPT_STATUS_UPDATE]: PddAdPlanOptStatusUpdateRequestInterface;
  [PDD_AD_QUERY_BID_LIST]: PddAdQueryBidListRequestInterface;
  [PDD_AD_QUERY_LOCATION_BID_HISTORY_REPORT]: PddAdQueryLocationBidHistoryReportRequestInterface;
  [PDD_AD_QUERY_LOCATION_BID_LIST]: PddAdQueryLocationBidListRequestInterface;
  [PDD_AD_QUERY_LOCATION_BID_PV_LIST]: PddAdQueryLocationBidPvListRequestInterface;
  [PDD_AD_QUERY_UNIT_BID_HISTORY_REPORT]: PddAdQueryUnitBidHistoryReportRequestInterface;
  [PDD_AD_UNIT_CREATE]: PddAdUnitCreateRequestInterface;
  [PDD_AD_UNIT_DELETE]: PddAdUnitDeleteRequestInterface;
  [PDD_AD_UNIT_GET_BY_PLAN_ID]: PddAdUnitGetByPlanIdRequestInterface;
  [PDD_AD_UNIT_OPT_STATUS_UPDATE]: PddAdUnitOptStatusUpdateRequestInterface;
  [PDD_AD_UPDATE_BID]: PddAdUpdateBidRequestInterface;
  [PDD_AD_UPDATE_LOCATION_BID]: PddAdUpdateLocationBidRequestInterface;
  [PDD_DDK_CMS_PROM_URL_GENERATE]: PddDdkCmsPromUrlGenerateRequestInterface;
  [PDD_DDK_COUPON_INFO_QUERY]: PddDdkCouponInfoQueryRequestInterface;
  [PDD_DDK_FINANCE_CPA_QUERY]: PddDdkFinanceCpaQueryRequestInterface;
  [PDD_DDK_GOODS_BASIC_INFO_GET]: PddDdkGoodsBasicInfoGetRequestInterface;
  [PDD_DDK_GOODS_DETAIL]: PddDdkGoodsDetailRequestInterface;
  [PDD_DDK_GOODS_PID_GENERATE]: PddDdkGoodsPidGenerateRequestInterface;
  [PDD_DDK_GOODS_PID_QUERY]: PddDdkGoodsPidQueryRequestInterface;
  [PDD_DDK_GOODS_PROMOTION_URL_GENERATE]: PddDdkGoodsPromotionUrlGenerateRequestInterface;
  [PDD_DDK_GOODS_RECOMMEND_GET]: PddDdkGoodsRecommendGetRequestInterface;
  [PDD_DDK_GOODS_SEARCH]: PddDdkGoodsSearchRequestInterface;
  [PDD_DDK_GOODS_UNIT_QUERY]: PddDdkGoodsUnitQueryRequestInterface;
  [PDD_DDK_GOODS_ZS_UNIT_URL_GEN]: PddDdkGoodsZsUnitUrlGenRequestInterface;
  [PDD_DDK_LOTTERY_URL_GEN]: PddDdkLotteryUrlGenRequestInterface;
  [PDD_DDK_MALL_GOODS_LIST_GET]: PddDdkMallGoodsListGetRequestInterface;
  [PDD_DDK_MALL_URL_GEN]: PddDdkMallUrlGenRequestInterface;
  [PDD_DDK_MERCHANT_LIST_GET]: PddDdkMerchantListGetRequestInterface;
  [PDD_DDK_ORDER_DETAIL_GET]: PddDdkOrderDetailGetRequestInterface;
  [PDD_DDK_ORDER_LIST_INCREMENT_GET]: PddDdkOrderListIncrementGetRequestInterface;
  [PDD_DDK_ORDER_LIST_RANGE_GET]: PddDdkOrderListRangeGetRequestInterface;
  [PDD_DDK_RESOURCE_URL_GEN]: PddDdkResourceUrlGenRequestInterface;
  [PDD_DDK_RP_PROM_URL_GENERATE]: PddDdkRpPromUrlGenerateRequestInterface;
  [PDD_DDK_THEME_GOODS_SEARCH]: PddDdkThemeGoodsSearchRequestInterface;
  [PDD_DDK_THEME_LIST_GET]: PddDdkThemeListGetRequestInterface;
  [PDD_DDK_THEME_PROM_URL_GENERATE]: PddDdkThemePromUrlGenerateRequestInterface;
  [PDD_DDK_TOP_GOODS_LIST_QUERY]: PddDdkTopGoodsListQueryRequestInterface;
  [PDD_DDK_WEAPP_QRCODE_URL_GEN]: PddDdkWeappQrcodeUrlGenRequestInterface;
  [PDD_DDK_ALL_ORDER_LIST_INCREMENT_GET]: PddDdkAllOrderListIncrementGetRequestInterface;
  [PDD_DDK_OAUTH_CMS_PROM_URL_GENERATE]: PddDdkOauthCmsPromUrlGenerateRequestInterface;
  [PDD_DDK_OAUTH_GOODS_PID_GENERATE]: PddDdkOauthGoodsPidGenerateRequestInterface;
  [PDD_DDK_OAUTH_GOODS_PID_QUERY]: PddDdkOauthGoodsPidQueryRequestInterface;
  [PDD_DDK_OAUTH_GOODS_PROM_URL_GENERATE]: PddDdkOauthGoodsPromUrlGenerateRequestInterface;
  [PDD_DDK_OAUTH_GOODS_RECOMMEND_GET]: PddDdkOauthGoodsRecommendGetRequestInterface;
  [PDD_DDK_OAUTH_GOODS_ZS_UNIT_URL_GEN]: PddDdkOauthGoodsZsUnitUrlGenRequestInterface;
  [PDD_DDK_OAUTH_LOTTERY_URL_GEN]: PddDdkOauthLotteryUrlGenRequestInterface;
  [PDD_DDK_OAUTH_MALL_URL_GEN]: PddDdkOauthMallUrlGenRequestInterface;
  [PDD_DDK_OAUTH_ORDER_DETAIL_GET]: PddDdkOauthOrderDetailGetRequestInterface;
  [PDD_DDK_OAUTH_RESOURCE_URL_GEN]: PddDdkOauthResourceUrlGenRequestInterface;
  [PDD_DDK_OAUTH_RP_PROM_URL_GENERATE]: PddDdkOauthRpPromUrlGenerateRequestInterface;
  [PDD_DDK_OAUTH_THEME_PROM_URL_GENERATE]: PddDdkOauthThemePromUrlGenerateRequestInterface;
  [PDD_DDK_OAUTH_TOP_GOODS_LIST_QUERY]: PddDdkOauthTopGoodsListQueryRequestInterface;
  [PDD_LOGISTICS_CS_HISTORY_MESSAGE_GET]: PddLogisticsCsHistoryMessageGetRequestInterface;
  [PDD_LOGISTICS_CS_MESSAGE_SEND]: PddLogisticsCsMessageSendRequestInterface;
  [PDD_LOGISTICS_CS_SESSION_CLOSE]: PddLogisticsCsSessionCloseRequestInterface;
  [PDD_LOGISTICS_CS_SESSION_START]: PddLogisticsCsSessionStartRequestInterface;
  [PDD_LOGISTICS_TICKET_GET]: PddLogisticsTicketGetRequestInterface;
  [PDD_LOGISTICS_TICKET_IMAGE_UPLOAD]: PddLogisticsTicketImageUploadRequestInterface;
  [PDD_LOGISTICS_TICKET_NOTIFY]: PddLogisticsTicketNotifyRequestInterface;
  [PDD_LOGISTICS_TICKET_PROBLEM_TYPE_GET]: PddLogisticsTicketProblemTypeGetRequestInterface;
  [PDD_PROMOTION_COUPON_CLOSE]: PddPromotionCouponCloseRequestInterface;
  [PDD_PROMOTION_COUPON_QUANTITY_ADD]: PddPromotionCouponQuantityAddRequestInterface;
  [PDD_PROMOTION_GOODS_COUPON_CREATE]: PddPromotionGoodsCouponCreateRequestInterface;
  [PDD_PROMOTION_GOODS_COUPON_LIST_GET]: PddPromotionGoodsCouponListGetRequestInterface;
  [PDD_PROMOTION_HOME_COUPON_CREATE]: PddPromotionHomeCouponCreateRequestInterface;
  [PDD_PROMOTION_MERCHANT_COUPON_LIST_GET]: PddPromotionMerchantCouponListGetRequestInterface;
  [PDD_VOUCHER_APPOINTMENT_INFO_SEND]: PddVoucherAppointmentInfoSendRequestInterface;
  [PDD_VOUCHER_OTA_CARD_VERIFICATION]: PddVoucherOtaCardVerificationRequestInterface;
  [PDD_VOUCHER_PHYSICAL_GOODS_SEND]: PddVoucherPhysicalGoodsSendRequestInterface;
  [PDD_VOUCHER_VIRTUAL_CARD_VERIFICATION]: PddVoucherVirtualCardVerificationRequestInterface;
  [PDD_VOUCHER_VOUCHER_COMPLAIN]: PddVoucherVoucherComplainRequestInterface;
  [PDD_VOUCHER_VOUCHER_INFO_SEND]: PddVoucherVoucherInfoSendRequestInterface;
  [PDD_INVOICE_APPLICATION_QUERY]: PddInvoiceApplicationQueryRequestInterface;
  [PDD_INVOICE_APPLICATION_UPDATE]: PddInvoiceApplicationUpdateRequestInterface;
  [PDD_INVOICE_DETAIL_INVALID]: PddInvoiceDetailInvalidRequestInterface;
  [PDD_INVOICE_DETAIL_QUERY]: PddInvoiceDetailQueryRequestInterface;
  [PDD_INVOICE_DETAIL_UPLOAD]: PddInvoiceDetailUploadRequestInterface;
  [PDD_MALL_CPS_PROTOCOL_STATUS_QUERY]: PddMallCpsProtocolStatusQueryRequestInterface;
  [PDD_MALL_INFO_BONDED_WAREHOUSE_GET]: PddMallInfoBondedWarehouseGetRequestInterface;
  [PDD_MALL_INFO_GET]: PddMallInfoGetRequestInterface;
  [PDD_MALL_INFO_GROUP_ADD_STORE_POST]: PddMallInfoGroupAddStorePostRequestInterface;
  [PDD_MALL_INFO_GROUP_LIST_STORE_GET]: PddMallInfoGroupListStoreGetRequestInterface;
  [PDD_MALL_INFO_GROUP_REMOVE_STORE_GET]: PddMallInfoGroupRemoveStoreGetRequestInterface;
  [PDD_MALL_INFO_STORE_CREATE_POST]: PddMallInfoStoreCreatePostRequestInterface;
  [PDD_MALL_INFO_STORE_CREATE_POST_NOPOI]: PddMallInfoStoreCreatePostNopoiRequestInterface;
  [PDD_MALL_INFO_STORE_DELETE_POST]: PddMallInfoStoreDeletePostRequestInterface;
  [PDD_MALL_INFO_STORE_GET]: PddMallInfoStoreGetRequestInterface;
  [PDD_MALL_INFO_STORE_UPDATE_POST]: PddMallInfoStoreUpdatePostRequestInterface;
  [PDD_MALL_INFO_STORE_UPDATE_POST_NOPOI]: PddMallInfoStoreUpdatePostNopoiRequestInterface;
  [PDD_QRPAY_PAYEE_REGISTER]: PddQrpayPayeeRegisterRequestInterface;
  [PDD_SMS_ADD_CROWD]: PddSmsAddCrowdRequestInterface;
  [PDD_SMS_CREATE_CUSTOM_TEMPLATE]: PddSmsCreateCustomTemplateRequestInterface;
  [PDD_SMS_CROWDS_PEOPLE_NUMBER_QUERY]: PddSmsCrowdsPeopleNumberQueryRequestInterface;
  [PDD_SMS_CROWDS_QUERY]: PddSmsCrowdsQueryRequestInterface;
  [PDD_SMS_CUSTOM_SETTING]: PddSmsCustomSettingRequestInterface;
  [PDD_SMS_CUSTOM_TEMPLATE_QUERY]: PddSmsCustomTemplateQueryRequestInterface;
  [PDD_SMS_REMAIN_DETAIL_QUERY]: PddSmsRemainDetailQueryRequestInterface;
  [PDD_SMS_REMAIN_SETTING]: PddSmsRemainSettingRequestInterface;
  [PDD_SMS_REMAIN_SETTING_DETAIL_QUERY]: PddSmsRemainSettingDetailQueryRequestInterface;
  [PDD_SMS_SELL_DELETING]: PddSmsSellDeletingRequestInterface;
  [PDD_SMS_SELL_RECORD_LIST_QUERY]: PddSmsSellRecordListQueryRequestInterface;
  [PDD_SMS_SELL_SETTING]: PddSmsSellSettingRequestInterface;
  [PDD_SMS_SELL_SETTING_DETAIL_QUERY]: PddSmsSellSettingDetailQueryRequestInterface;
  [PDD_SMS_SELL_SETTING_RECORD_CANCEL]: PddSmsSellSettingRecordCancelRequestInterface;
  [PDD_SMS_SEND_RECORD_LIST_QUERY]: PddSmsSendRecordListQueryRequestInterface;
  [PDD_SMS_SHORT_STATISTIC_QUERY]: PddSmsShortStatisticQueryRequestInterface;
  [PDD_SMS_TEMPLATE_QUERY]: PddSmsTemplateQueryRequestInterface;
  [PDD_TIME_GET]: PddTimeGetRequestInterface;
  [PDD_UTIL_DIVIDE_BASE64_IMAGE]: PddUtilDivideBase64ImageRequestInterface;
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
  [PDD_PMC_USER_CANCEL]: PddPmcUserCancelRequestInterface;
  [PDD_PMC_USER_GET]: PddPmcUserGetRequestInterface;
  [PDD_PMC_USER_PERMIT]: PddPmcUserPermitRequestInterface;
  [PDD_CLOUDPRINT_CMDPRINT_RENDER]: PddCloudprintCmdprintRenderRequestInterface;
  [PDD_CLOUDPRINT_CUSTOMARES_GET]: PddCloudprintCustomaresGetRequestInterface;
  [PDD_CLOUDPRINT_STDTEMPLATES_GET]: PddCloudprintStdtemplatesGetRequestInterface;
  [PDD_WAYBILL_CANCEL]: PddWaybillCancelRequestInterface;
  [PDD_WAYBILL_GET]: PddWaybillGetRequestInterface;
  [PDD_WAYBILL_QUERY_BY_WAYBILLCODE]: PddWaybillQueryByWaybillcodeRequestInterface;
  [PDD_WAYBILL_SEARCH]: PddWaybillSearchRequestInterface;
  [PDD_WAYBILL_UPDATE]: PddWaybillUpdateRequestInterface;
  [PDD_FINANCE_BALANCE_DAILY_BILL_URL_GET]: PddFinanceBalanceDailyBillUrlGetRequestInterface;
  [PDD_OPEN_MSG_SERVICE_QUERY_EXPRESS_MSG_RECORD]: PddOpenMsgServiceQueryExpressMsgRecordRequestInterface;
  [PDD_OPEN_MSG_SERVICE_QUERY_MSG_RECORD]: PddOpenMsgServiceQueryMsgRecordRequestInterface;
  [PDD_OPEN_MSG_SERVICE_SEND_BATCH_MSG]: PddOpenMsgServiceSendBatchMsgRequestInterface;
  [PDD_OPEN_MSG_SERVICE_SEND_EXPRESS_MSG]: PddOpenMsgServiceSendExpressMsgRequestInterface;
  [PDD_OPEN_MSG_SERVICE_SEND_MSG]: PddOpenMsgServiceSendMsgRequestInterface;
  [PDD_SERVICEMARKET_SETTLEMENTBILL_GET]: PddServicemarketSettlementbillGetRequestInterface;
  [PDD_SERVICEMARKET_TRADELIST_GET]: PddServicemarketTradelistGetRequestInterface;
  [PDD_VAS_ORDER_SEARCH]: PddVasOrderSearchRequestInterface;
  [PDD_SMS_DETAILBILL_PUSH]: PddSmsDetailbillPushRequestInterface;
  [PDD_SMS_VENDOR_COMPLAINT_CREATE]: PddSmsVendorComplaintCreateRequestInterface;
  [PDD_MALL_TICKET_DETAIL]: PddMallTicketDetailRequestInterface;
  [PDD_MALL_TICKET_LIST]: PddMallTicketListRequestInterface;
  [PDD_MALL_TICKET_NOTIFY]: PddMallTicketNotifyRequestInterface;
}
export interface PddCollectResponseInterface {
  [PDD_ERP_ORDER_SYNC]: PddErpOrderSyncResponseInterface;
  [PDD_ORDER_INFORMATION_GET]: PddOrderInformationGetResponseInterface;
  [PDD_ORDER_LIST_GET]: PddOrderListGetResponseInterface;
  [PDD_ORDER_NUMBER_LIST_INCREMENT_GET]: PddOrderNumberListIncrementGetResponseInterface;
  [PDD_ORDER_STATUS_GET]: PddOrderStatusGetResponseInterface;
  [PDD_NEXTONE_LOGISTICS_WAREHOUSE_UPDATE]: PddNextoneLogisticsWarehouseUpdateResponseInterface;
  [PDD_RDC_PDDGENIUS_SENDGOODS_CANCEL]: PddRdcPddgeniusSendgoodsCancelResponseInterface;
  [PDD_REFUND_ADDRESS_LIST_GET]: PddRefundAddressListGetResponseInterface;
  [PDD_REFUND_INFORMATION_GET]: PddRefundInformationGetResponseInterface;
  [PDD_REFUND_LIST_INCREMENT_GET]: PddRefundListIncrementGetResponseInterface;
  [PDD_REFUND_STATUS_CHECK]: PddRefundStatusCheckResponseInterface;
  [PDD_LOGISTICS_ADDRESS_GET]: PddLogisticsAddressGetResponseInterface;
  [PDD_LOGISTICS_COMPANIES_GET]: PddLogisticsCompaniesGetResponseInterface;
  [PDD_LOGISTICS_ONLINE_CREATE]: PddLogisticsOnlineCreateResponseInterface;
  [PDD_LOGISTICS_ONLINE_SEND]: PddLogisticsOnlineSendResponseInterface;
  [PDD_LOGISTICS_ONLINE_STATUS_QUERY]: PddLogisticsOnlineStatusQueryResponseInterface;
  [PDD_LOGISTICS_ORDERTRACE_GET]: PddLogisticsOrdertraceGetResponseInterface;
  [PDD_VIRTUAL_GAME_SERVER_QUERY]: PddVirtualGameServerQueryResponseInterface;
  [PDD_VIRTUAL_MOBILE_CHARGE_NOTIFY]: PddVirtualMobileChargeNotifyResponseInterface;
  [PDD_DELETE_DRAFT_COMMIT]: PddDeleteDraftCommitResponseInterface;
  [PDD_DELETE_GOODS_COMMIT]: PddDeleteGoodsCommitResponseInterface;
  [PDD_GOODS_ADD]: PddGoodsAddResponseInterface;
  [PDD_GOODS_AUTHORIZATION_CATS]: PddGoodsAuthorizationCatsResponseInterface;
  [PDD_GOODS_CAT_TEMPLATE_GET]: PddGoodsCatTemplateGetResponseInterface;
  [PDD_GOODS_CATS_GET]: PddGoodsCatsGetResponseInterface;
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
  [PDD_GOODS_GET_RELATION]: PddGoodsGetRelationResponseInterface;
  [PDD_GOODS_IMAGE_UPLOAD]: PddGoodsImageUploadResponseInterface;
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
  [PDD_GOODS_OPT_GET]: PddGoodsOptGetResponseInterface;
  [PDD_GOODS_OUTER_CAT_MAPPING_GET]: PddGoodsOuterCatMappingGetResponseInterface;
  [PDD_GOODS_QUANTITY_UPDATE]: PddGoodsQuantityUpdateResponseInterface;
  [PDD_GOODS_RELATION_SET]: PddGoodsRelationSetResponseInterface;
  [PDD_GOODS_SALE_STATUS_SET]: PddGoodsSaleStatusSetResponseInterface;
  [PDD_GOODS_SKU_PRICE_UPDATE]: PddGoodsSkuPriceUpdateResponseInterface;
  [PDD_GOODS_SPEC_GET]: PddGoodsSpecGetResponseInterface;
  [PDD_GOODS_SPEC_ID_GET]: PddGoodsSpecIdGetResponseInterface;
  [PDD_GOODS_SUBMIT_GOODS_COMMIT]: PddGoodsSubmitGoodsCommitResponseInterface;
  [PDD_GOODS_TEMPLATE_PROPERTY_VALUE_SEARCH]: PddGoodsTemplatePropertyValueSearchResponseInterface;
  [PDD_GOOODS_SKU_MEASUREMENT_LIST]: PddGooodsSkuMeasurementListResponseInterface;
  [PDD_ONE_EXPRESS_COST_TEMPLATE]: PddOneExpressCostTemplateResponseInterface;
  [PDD_AD_BALANCE_GET]: PddAdBalanceGetResponseInterface;
  [PDD_AD_BID_QUERY_PROFILE]: PddAdBidQueryProfileResponseInterface;
  [PDD_AD_CAN_CREATE_PLAN]: PddAdCanCreatePlanResponseInterface;
  [PDD_AD_CHART_BYKEYWORD_GET]: PddAdChartBykeywordGetResponseInterface;
  [PDD_AD_CREATE_LOCATION_BID]: PddAdCreateLocationBidResponseInterface;
  [PDD_AD_CREATE_UNIT_BID]: PddAdCreateUnitBidResponseInterface;
  [PDD_AD_CREATIVE_CREATE]: PddAdCreativeCreateResponseInterface;
  [PDD_AD_CREATIVE_DELETE]: PddAdCreativeDeleteResponseInterface;
  [PDD_AD_CREATIVE_HISTORY_REPORT_GET]: PddAdCreativeHistoryReportGetResponseInterface;
  [PDD_AD_CREATIVE_QUERY]: PddAdCreativeQueryResponseInterface;
  [PDD_AD_CREATIVE_REPORT_GET]: PddAdCreativeReportGetResponseInterface;
  [PDD_AD_CREATIVE_UPDATE]: PddAdCreativeUpdateResponseInterface;
  [PDD_AD_DELETE_BID]: PddAdDeleteBidResponseInterface;
  [PDD_AD_DELETE_LOCATION_BID]: PddAdDeleteLocationBidResponseInterface;
  [PDD_AD_HISTORY_KEYWORD_REPORT_GET]: PddAdHistoryKeywordReportGetResponseInterface;
  [PDD_AD_HISTORY_PLAN_REPORT_GET]: PddAdHistoryPlanReportGetResponseInterface;
  [PDD_AD_HISTORY_REPORT_GET]: PddAdHistoryReportGetResponseInterface;
  [PDD_AD_HISTORY_RT_KEYWORD_REPORT_GET]: PddAdHistoryRtKeywordReportGetResponseInterface;
  [PDD_AD_HISTORY_RT_PLAN_REPORT_GET]: PddAdHistoryRtPlanReportGetResponseInterface;
  [PDD_AD_HISTORY_RT_REPORT_GET]: PddAdHistoryRtReportGetResponseInterface;
  [PDD_AD_HISTORY_RT_UNIT_REPORT_GET]: PddAdHistoryRtUnitReportGetResponseInterface;
  [PDD_AD_HISTORY_UNIT_REPORT_GET]: PddAdHistoryUnitReportGetResponseInterface;
  [PDD_AD_KEYWORD_CREATE]: PddAdKeywordCreateResponseInterface;
  [PDD_AD_KEYWORD_DAILY_REPORT]: PddAdKeywordDailyReportResponseInterface;
  [PDD_AD_KEYWORD_DELETE]: PddAdKeywordDeleteResponseInterface;
  [PDD_AD_KEYWORD_RCOMMENDED_GET]: PddAdKeywordRcommendedGetResponseInterface;
  [PDD_AD_KEYWORD_RELEVANCE_GET]: PddAdKeywordRelevanceGetResponseInterface;
  [PDD_AD_KEYWORD_UPDATE]: PddAdKeywordUpdateResponseInterface;
  [PDD_AD_PLAN_CREATE]: PddAdPlanCreateResponseInterface;
  [PDD_AD_PLAN_DELETE]: PddAdPlanDeleteResponseInterface;
  [PDD_AD_PLAN_DISCOUNT_UPDATE]: PddAdPlanDiscountUpdateResponseInterface;
  [PDD_AD_PLAN_INFO_LIST_GET]: PddAdPlanInfoListGetResponseInterface;
  [PDD_AD_PLAN_MAX_COST_UPDATE]: PddAdPlanMaxCostUpdateResponseInterface;
  [PDD_AD_PLAN_NAME_UPDATE]: PddAdPlanNameUpdateResponseInterface;
  [PDD_AD_PLAN_OPT_STATUS_UPDATE]: PddAdPlanOptStatusUpdateResponseInterface;
  [PDD_AD_QUERY_BID_LIST]: PddAdQueryBidListResponseInterface;
  [PDD_AD_QUERY_LOCATION_BID_HISTORY_REPORT]: PddAdQueryLocationBidHistoryReportResponseInterface;
  [PDD_AD_QUERY_LOCATION_BID_LIST]: PddAdQueryLocationBidListResponseInterface;
  [PDD_AD_QUERY_LOCATION_BID_PV_LIST]: PddAdQueryLocationBidPvListResponseInterface;
  [PDD_AD_QUERY_UNIT_BID_HISTORY_REPORT]: PddAdQueryUnitBidHistoryReportResponseInterface;
  [PDD_AD_UNIT_CREATE]: PddAdUnitCreateResponseInterface;
  [PDD_AD_UNIT_DELETE]: PddAdUnitDeleteResponseInterface;
  [PDD_AD_UNIT_GET_BY_PLAN_ID]: PddAdUnitGetByPlanIdResponseInterface;
  [PDD_AD_UNIT_OPT_STATUS_UPDATE]: PddAdUnitOptStatusUpdateResponseInterface;
  [PDD_AD_UPDATE_BID]: PddAdUpdateBidResponseInterface;
  [PDD_AD_UPDATE_LOCATION_BID]: PddAdUpdateLocationBidResponseInterface;
  [PDD_DDK_CMS_PROM_URL_GENERATE]: PddDdkCmsPromUrlGenerateResponseInterface;
  [PDD_DDK_COUPON_INFO_QUERY]: PddDdkCouponInfoQueryResponseInterface;
  [PDD_DDK_FINANCE_CPA_QUERY]: PddDdkFinanceCpaQueryResponseInterface;
  [PDD_DDK_GOODS_BASIC_INFO_GET]: PddDdkGoodsBasicInfoGetResponseInterface;
  [PDD_DDK_GOODS_DETAIL]: PddDdkGoodsDetailResponseInterface;
  [PDD_DDK_GOODS_PID_GENERATE]: PddDdkGoodsPidGenerateResponseInterface;
  [PDD_DDK_GOODS_PID_QUERY]: PddDdkGoodsPidQueryResponseInterface;
  [PDD_DDK_GOODS_PROMOTION_URL_GENERATE]: PddDdkGoodsPromotionUrlGenerateResponseInterface;
  [PDD_DDK_GOODS_RECOMMEND_GET]: PddDdkGoodsRecommendGetResponseInterface;
  [PDD_DDK_GOODS_SEARCH]: PddDdkGoodsSearchResponseInterface;
  [PDD_DDK_GOODS_UNIT_QUERY]: PddDdkGoodsUnitQueryResponseInterface;
  [PDD_DDK_GOODS_ZS_UNIT_URL_GEN]: PddDdkGoodsZsUnitUrlGenResponseInterface;
  [PDD_DDK_LOTTERY_URL_GEN]: PddDdkLotteryUrlGenResponseInterface;
  [PDD_DDK_MALL_GOODS_LIST_GET]: PddDdkMallGoodsListGetResponseInterface;
  [PDD_DDK_MALL_URL_GEN]: PddDdkMallUrlGenResponseInterface;
  [PDD_DDK_MERCHANT_LIST_GET]: PddDdkMerchantListGetResponseInterface;
  [PDD_DDK_ORDER_DETAIL_GET]: PddDdkOrderDetailGetResponseInterface;
  [PDD_DDK_ORDER_LIST_INCREMENT_GET]: PddDdkOrderListIncrementGetResponseInterface;
  [PDD_DDK_ORDER_LIST_RANGE_GET]: PddDdkOrderListRangeGetResponseInterface;
  [PDD_DDK_RESOURCE_URL_GEN]: PddDdkResourceUrlGenResponseInterface;
  [PDD_DDK_RP_PROM_URL_GENERATE]: PddDdkRpPromUrlGenerateResponseInterface;
  [PDD_DDK_THEME_GOODS_SEARCH]: PddDdkThemeGoodsSearchResponseInterface;
  [PDD_DDK_THEME_LIST_GET]: PddDdkThemeListGetResponseInterface;
  [PDD_DDK_THEME_PROM_URL_GENERATE]: PddDdkThemePromUrlGenerateResponseInterface;
  [PDD_DDK_TOP_GOODS_LIST_QUERY]: PddDdkTopGoodsListQueryResponseInterface;
  [PDD_DDK_WEAPP_QRCODE_URL_GEN]: PddDdkWeappQrcodeUrlGenResponseInterface;
  [PDD_DDK_ALL_ORDER_LIST_INCREMENT_GET]: PddDdkAllOrderListIncrementGetResponseInterface;
  [PDD_DDK_OAUTH_CMS_PROM_URL_GENERATE]: PddDdkOauthCmsPromUrlGenerateResponseInterface;
  [PDD_DDK_OAUTH_GOODS_PID_GENERATE]: PddDdkOauthGoodsPidGenerateResponseInterface;
  [PDD_DDK_OAUTH_GOODS_PID_QUERY]: PddDdkOauthGoodsPidQueryResponseInterface;
  [PDD_DDK_OAUTH_GOODS_PROM_URL_GENERATE]: PddDdkOauthGoodsPromUrlGenerateResponseInterface;
  [PDD_DDK_OAUTH_GOODS_RECOMMEND_GET]: PddDdkOauthGoodsRecommendGetResponseInterface;
  [PDD_DDK_OAUTH_GOODS_ZS_UNIT_URL_GEN]: PddDdkOauthGoodsZsUnitUrlGenResponseInterface;
  [PDD_DDK_OAUTH_LOTTERY_URL_GEN]: PddDdkOauthLotteryUrlGenResponseInterface;
  [PDD_DDK_OAUTH_MALL_URL_GEN]: PddDdkOauthMallUrlGenResponseInterface;
  [PDD_DDK_OAUTH_ORDER_DETAIL_GET]: PddDdkOauthOrderDetailGetResponseInterface;
  [PDD_DDK_OAUTH_RESOURCE_URL_GEN]: PddDdkOauthResourceUrlGenResponseInterface;
  [PDD_DDK_OAUTH_RP_PROM_URL_GENERATE]: PddDdkOauthRpPromUrlGenerateResponseInterface;
  [PDD_DDK_OAUTH_THEME_PROM_URL_GENERATE]: PddDdkOauthThemePromUrlGenerateResponseInterface;
  [PDD_DDK_OAUTH_TOP_GOODS_LIST_QUERY]: PddDdkOauthTopGoodsListQueryResponseInterface;
  [PDD_LOGISTICS_CS_HISTORY_MESSAGE_GET]: PddLogisticsCsHistoryMessageGetResponseInterface;
  [PDD_LOGISTICS_CS_MESSAGE_SEND]: PddLogisticsCsMessageSendResponseInterface;
  [PDD_LOGISTICS_CS_SESSION_CLOSE]: PddLogisticsCsSessionCloseResponseInterface;
  [PDD_LOGISTICS_CS_SESSION_START]: PddLogisticsCsSessionStartResponseInterface;
  [PDD_LOGISTICS_TICKET_GET]: PddLogisticsTicketGetResponseInterface;
  [PDD_LOGISTICS_TICKET_IMAGE_UPLOAD]: PddLogisticsTicketImageUploadResponseInterface;
  [PDD_LOGISTICS_TICKET_NOTIFY]: PddLogisticsTicketNotifyResponseInterface;
  [PDD_LOGISTICS_TICKET_PROBLEM_TYPE_GET]: PddLogisticsTicketProblemTypeGetResponseInterface;
  [PDD_PROMOTION_COUPON_CLOSE]: PddPromotionCouponCloseResponseInterface;
  [PDD_PROMOTION_COUPON_QUANTITY_ADD]: PddPromotionCouponQuantityAddResponseInterface;
  [PDD_PROMOTION_GOODS_COUPON_CREATE]: PddPromotionGoodsCouponCreateResponseInterface;
  [PDD_PROMOTION_GOODS_COUPON_LIST_GET]: PddPromotionGoodsCouponListGetResponseInterface;
  [PDD_PROMOTION_HOME_COUPON_CREATE]: PddPromotionHomeCouponCreateResponseInterface;
  [PDD_PROMOTION_MERCHANT_COUPON_LIST_GET]: PddPromotionMerchantCouponListGetResponseInterface;
  [PDD_VOUCHER_APPOINTMENT_INFO_SEND]: PddVoucherAppointmentInfoSendResponseInterface;
  [PDD_VOUCHER_OTA_CARD_VERIFICATION]: PddVoucherOtaCardVerificationResponseInterface;
  [PDD_VOUCHER_PHYSICAL_GOODS_SEND]: PddVoucherPhysicalGoodsSendResponseInterface;
  [PDD_VOUCHER_VIRTUAL_CARD_VERIFICATION]: PddVoucherVirtualCardVerificationResponseInterface;
  [PDD_VOUCHER_VOUCHER_COMPLAIN]: PddVoucherVoucherComplainResponseInterface;
  [PDD_VOUCHER_VOUCHER_INFO_SEND]: PddVoucherVoucherInfoSendResponseInterface;
  [PDD_INVOICE_APPLICATION_QUERY]: PddInvoiceApplicationQueryResponseInterface;
  [PDD_INVOICE_APPLICATION_UPDATE]: PddInvoiceApplicationUpdateResponseInterface;
  [PDD_INVOICE_DETAIL_INVALID]: PddInvoiceDetailInvalidResponseInterface;
  [PDD_INVOICE_DETAIL_QUERY]: PddInvoiceDetailQueryResponseInterface;
  [PDD_INVOICE_DETAIL_UPLOAD]: PddInvoiceDetailUploadResponseInterface;
  [PDD_MALL_CPS_PROTOCOL_STATUS_QUERY]: PddMallCpsProtocolStatusQueryResponseInterface;
  [PDD_MALL_INFO_BONDED_WAREHOUSE_GET]: PddMallInfoBondedWarehouseGetResponseInterface;
  [PDD_MALL_INFO_GET]: PddMallInfoGetResponseInterface;
  [PDD_MALL_INFO_GROUP_ADD_STORE_POST]: PddMallInfoGroupAddStorePostResponseInterface;
  [PDD_MALL_INFO_GROUP_LIST_STORE_GET]: PddMallInfoGroupListStoreGetResponseInterface;
  [PDD_MALL_INFO_GROUP_REMOVE_STORE_GET]: PddMallInfoGroupRemoveStoreGetResponseInterface;
  [PDD_MALL_INFO_STORE_CREATE_POST]: PddMallInfoStoreCreatePostResponseInterface;
  [PDD_MALL_INFO_STORE_CREATE_POST_NOPOI]: PddMallInfoStoreCreatePostNopoiResponseInterface;
  [PDD_MALL_INFO_STORE_DELETE_POST]: PddMallInfoStoreDeletePostResponseInterface;
  [PDD_MALL_INFO_STORE_GET]: PddMallInfoStoreGetResponseInterface;
  [PDD_MALL_INFO_STORE_UPDATE_POST]: PddMallInfoStoreUpdatePostResponseInterface;
  [PDD_MALL_INFO_STORE_UPDATE_POST_NOPOI]: PddMallInfoStoreUpdatePostNopoiResponseInterface;
  [PDD_QRPAY_PAYEE_REGISTER]: PddQrpayPayeeRegisterResponseInterface;
  [PDD_SMS_ADD_CROWD]: PddSmsAddCrowdResponseInterface;
  [PDD_SMS_CREATE_CUSTOM_TEMPLATE]: PddSmsCreateCustomTemplateResponseInterface;
  [PDD_SMS_CROWDS_PEOPLE_NUMBER_QUERY]: PddSmsCrowdsPeopleNumberQueryResponseInterface;
  [PDD_SMS_CROWDS_QUERY]: PddSmsCrowdsQueryResponseInterface;
  [PDD_SMS_CUSTOM_SETTING]: PddSmsCustomSettingResponseInterface;
  [PDD_SMS_CUSTOM_TEMPLATE_QUERY]: PddSmsCustomTemplateQueryResponseInterface;
  [PDD_SMS_REMAIN_DETAIL_QUERY]: PddSmsRemainDetailQueryResponseInterface;
  [PDD_SMS_REMAIN_SETTING]: PddSmsRemainSettingResponseInterface;
  [PDD_SMS_REMAIN_SETTING_DETAIL_QUERY]: PddSmsRemainSettingDetailQueryResponseInterface;
  [PDD_SMS_SELL_DELETING]: PddSmsSellDeletingResponseInterface;
  [PDD_SMS_SELL_RECORD_LIST_QUERY]: PddSmsSellRecordListQueryResponseInterface;
  [PDD_SMS_SELL_SETTING]: PddSmsSellSettingResponseInterface;
  [PDD_SMS_SELL_SETTING_DETAIL_QUERY]: PddSmsSellSettingDetailQueryResponseInterface;
  [PDD_SMS_SELL_SETTING_RECORD_CANCEL]: PddSmsSellSettingRecordCancelResponseInterface;
  [PDD_SMS_SEND_RECORD_LIST_QUERY]: PddSmsSendRecordListQueryResponseInterface;
  [PDD_SMS_SHORT_STATISTIC_QUERY]: PddSmsShortStatisticQueryResponseInterface;
  [PDD_SMS_TEMPLATE_QUERY]: PddSmsTemplateQueryResponseInterface;
  [PDD_TIME_GET]: PddTimeGetResponseInterface;
  [PDD_UTIL_DIVIDE_BASE64_IMAGE]: PddUtilDivideBase64ImageResponseInterface;
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
  [PDD_PMC_USER_CANCEL]: PddPmcUserCancelResponseInterface;
  [PDD_PMC_USER_GET]: PddPmcUserGetResponseInterface;
  [PDD_PMC_USER_PERMIT]: PddPmcUserPermitResponseInterface;
  [PDD_CLOUDPRINT_CMDPRINT_RENDER]: PddCloudprintCmdprintRenderResponseInterface;
  [PDD_CLOUDPRINT_CUSTOMARES_GET]: PddCloudprintCustomaresGetResponseInterface;
  [PDD_CLOUDPRINT_STDTEMPLATES_GET]: PddCloudprintStdtemplatesGetResponseInterface;
  [PDD_WAYBILL_CANCEL]: PddWaybillCancelResponseInterface;
  [PDD_WAYBILL_GET]: PddWaybillGetResponseInterface;
  [PDD_WAYBILL_QUERY_BY_WAYBILLCODE]: PddWaybillQueryByWaybillcodeResponseInterface;
  [PDD_WAYBILL_SEARCH]: PddWaybillSearchResponseInterface;
  [PDD_WAYBILL_UPDATE]: PddWaybillUpdateResponseInterface;
  [PDD_FINANCE_BALANCE_DAILY_BILL_URL_GET]: PddFinanceBalanceDailyBillUrlGetResponseInterface;
  [PDD_OPEN_MSG_SERVICE_QUERY_EXPRESS_MSG_RECORD]: PddOpenMsgServiceQueryExpressMsgRecordResponseInterface;
  [PDD_OPEN_MSG_SERVICE_QUERY_MSG_RECORD]: PddOpenMsgServiceQueryMsgRecordResponseInterface;
  [PDD_OPEN_MSG_SERVICE_SEND_BATCH_MSG]: PddOpenMsgServiceSendBatchMsgResponseInterface;
  [PDD_OPEN_MSG_SERVICE_SEND_EXPRESS_MSG]: PddOpenMsgServiceSendExpressMsgResponseInterface;
  [PDD_OPEN_MSG_SERVICE_SEND_MSG]: PddOpenMsgServiceSendMsgResponseInterface;
  [PDD_SERVICEMARKET_SETTLEMENTBILL_GET]: PddServicemarketSettlementbillGetResponseInterface;
  [PDD_SERVICEMARKET_TRADELIST_GET]: PddServicemarketTradelistGetResponseInterface;
  [PDD_VAS_ORDER_SEARCH]: PddVasOrderSearchResponseInterface;
  [PDD_SMS_DETAILBILL_PUSH]: PddSmsDetailbillPushResponseInterface;
  [PDD_SMS_VENDOR_COMPLAINT_CREATE]: PddSmsVendorComplaintCreateResponseInterface;
  [PDD_MALL_TICKET_DETAIL]: PddMallTicketDetailResponseInterface;
  [PDD_MALL_TICKET_LIST]: PddMallTicketListResponseInterface;
  [PDD_MALL_TICKET_NOTIFY]: PddMallTicketNotifyResponseInterface;
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
