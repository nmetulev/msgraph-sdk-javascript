/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { FetchOptions } from "./IFetchOptions";

/**
 * @interface
 * Signature that defines callback for an authentication provider
 * @callback - The anonymous callback function which takes two params
 */
interface AuthProviderCallback {
	(error: any, accessToken: string | null): void;
}

/**
 * @interface
 * Signature that holds authProvider
 * @callback - The anonymous callback function which takes a single param
 */
export interface AuthProvider {
	(done: AuthProviderCallback): void;
}

/**
 * @interface
 * Options for initializing the Graph Client
 * @property {AuthProvider} authProvider - The function to get the authentication token
 * @property {string} [baseUrl] - Base url that needs to be appended to every request
 * @property {boolean} [debugLogging] - The boolean to enable/disable debug logging
 * @property {string} [defaultVersion] - The default version that needs to be used while making graph api request
 * @property {FetchOptions} [fetchOptions] - The options for fetch request
 */
export interface Options {
	authProvider: AuthProvider;
	baseUrl?: string;
	debugLogging?: boolean;
	defaultVersion?: string,
	fetchOptions?: FetchOptions;
}
