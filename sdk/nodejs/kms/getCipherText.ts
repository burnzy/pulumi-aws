// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";
import * as utils from "../utils";

/**
 * The KMS ciphertext data source allows you to encrypt plaintext into ciphertext
 * by using an AWS KMS customer master key. The value returned by this data source
 * changes every apply. For a stable ciphertext value, see the [`aws_kms_ciphertext`
 * resource](https://www.terraform.io/docs/providers/aws/r/kms_ciphertext.html).
 * 
 * > **Note:** All arguments including the plaintext be stored in the raw state as plain-text.
 * [Read more about sensitive data in state](https://www.terraform.io/docs/state/sensitive-data.html).
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const oauthConfig = new aws.kms.Key("oauth_config", {
 *     description: "oauth config",
 *     isEnabled: true,
 * });
 * const oauth = oauthConfig.keyId.apply(keyId => aws.kms.getCipherText({
 *     keyId: keyId,
 *     plaintext: `{
 *   "client_id": "e587dbae22222f55da22",
 *   "client_secret": "8289575d00000ace55e1815ec13673955721b8a5"
 * }
 * `,
 * }));
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/d/kms_ciphertext.html.markdown.
 */
export function getCipherText(args: GetCipherTextArgs, opts?: pulumi.InvokeOptions): GetCipherTextResult {
    const promise: Promise<GetCipherTextResult> = pulumi.runtime.invoke("aws:kms/getCipherText:getCipherText", {
        "context": args.context,
        "keyId": args.keyId,
        "plaintext": args.plaintext,
    }, opts);

    return utils.promiseResult(promise);
}

/**
 * A collection of arguments for invoking getCipherText.
 */
export interface GetCipherTextArgs {
    /**
     * An optional mapping that makes up the encryption context.
     */
    readonly context?: {[key: string]: string};
    /**
     * Globally unique key ID for the customer master key.
     */
    readonly keyId: string;
    /**
     * Data to be encrypted. Note that this may show up in logs, and it will be stored in the state file.
     */
    readonly plaintext: string;
}

/**
 * A collection of values returned by getCipherText.
 */
export interface GetCipherTextResult {
    /**
     * Base64 encoded ciphertext
     */
    readonly ciphertextBlob: string;
    readonly context?: {[key: string]: string};
    readonly keyId: string;
    readonly plaintext: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
