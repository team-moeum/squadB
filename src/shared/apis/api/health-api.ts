/* tslint:disable */
/* eslint-disable */
/**
 * Stocky Backend
 * Stocky Backend API description
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { Configuration } from "../configuration";
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from "axios";
import globalAxios from "axios";
// Some imports not used depending on template conditions
// @ts-ignore
import {
  DUMMY_BASE_URL,
  assertParamExists,
  setApiKeyToObject,
  setBasicAuthToObject,
  setBearerAuthToObject,
  setOAuthToObject,
  setSearchParams,
  serializeDataIfNeeded,
  toPathString,
  createRequestFunction
} from "../common";
// @ts-ignore
import {
  BASE_PATH,
  COLLECTION_FORMATS,
  type RequestArgs,
  BaseAPI,
  RequiredError,
  operationServerMap
} from "../base";
// @ts-ignore
import type { HealthControllerCheck200Response } from "../model";
// @ts-ignore
import type { HealthControllerCheck503Response } from "../model";
/**
 * HealthApi - axios parameter creator
 * @export
 */
export const HealthApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     *
     * @summary 서비스 헬스 체크
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    healthControllerCheck: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
      const localVarPath = `/health`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = { method: "GET", ...baseOptions, ...options };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    }
  };
};

/**
 * HealthApi - functional programming interface
 * @export
 */
export const HealthApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = HealthApiAxiosParamCreator(configuration);
  return {
    /**
     *
     * @summary 서비스 헬스 체크
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async healthControllerCheck(
      options?: RawAxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<HealthControllerCheck200Response>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.healthControllerCheck(options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["HealthApi.healthControllerCheck"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration
        )(axios, localVarOperationServerBasePath || basePath);
    }
  };
};

/**
 * HealthApi - factory interface
 * @export
 */
export const HealthApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = HealthApiFp(configuration);
  return {
    /**
     *
     * @summary 서비스 헬스 체크
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    healthControllerCheck(
      options?: RawAxiosRequestConfig
    ): AxiosPromise<HealthControllerCheck200Response> {
      return localVarFp.healthControllerCheck(options).then(request => request(axios, basePath));
    }
  };
};

/**
 * HealthApi - object-oriented interface
 * @export
 * @class HealthApi
 * @extends {BaseAPI}
 */
export class HealthApi extends BaseAPI {
  /**
   *
   * @summary 서비스 헬스 체크
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof HealthApi
   */
  public healthControllerCheck(options?: RawAxiosRequestConfig) {
    return HealthApiFp(this.configuration)
      .healthControllerCheck(options)
      .then(request => request(this.axios, this.basePath));
  }
}
