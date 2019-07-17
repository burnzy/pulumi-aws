// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";
import * as utils from "../utils";

/**
 * Manages a Glue Security Configuration.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const example = new aws.glue.SecurityConfiguration("example", {
 *     encryptionConfiguration: {
 *         cloudwatchEncryption: {
 *             cloudwatchEncryptionMode: "DISABLED",
 *         },
 *         jobBookmarksEncryption: {
 *             jobBookmarksEncryptionMode: "DISABLED",
 *         },
 *         s3Encryption: {
 *             kmsKeyArn: aws_kms_key_example.arn,
 *             s3EncryptionMode: "SSE-KMS",
 *         },
 *     },
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/glue_security_configuration.html.markdown.
 */
export class SecurityConfiguration extends pulumi.CustomResource {
    /**
     * Get an existing SecurityConfiguration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SecurityConfigurationState, opts?: pulumi.CustomResourceOptions): SecurityConfiguration {
        return new SecurityConfiguration(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:glue/securityConfiguration:SecurityConfiguration';

    /**
     * Returns true if the given object is an instance of SecurityConfiguration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SecurityConfiguration {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SecurityConfiguration.__pulumiType;
    }

    /**
     * Configuration block containing encryption configuration. Detailed below.
     */
    public readonly encryptionConfiguration!: pulumi.Output<{ cloudwatchEncryption: { cloudwatchEncryptionMode?: string, kmsKeyArn?: string }, jobBookmarksEncryption: { jobBookmarksEncryptionMode?: string, kmsKeyArn?: string }, s3Encryption: { kmsKeyArn?: string, s3EncryptionMode?: string } }>;
    /**
     * Name of the security configuration.
     */
    public readonly name!: pulumi.Output<string>;

    /**
     * Create a SecurityConfiguration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SecurityConfigurationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SecurityConfigurationArgs | SecurityConfigurationState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as SecurityConfigurationState | undefined;
            inputs["encryptionConfiguration"] = state ? state.encryptionConfiguration : undefined;
            inputs["name"] = state ? state.name : undefined;
        } else {
            const args = argsOrState as SecurityConfigurationArgs | undefined;
            if (!args || args.encryptionConfiguration === undefined) {
                throw new Error("Missing required property 'encryptionConfiguration'");
            }
            inputs["encryptionConfiguration"] = args ? args.encryptionConfiguration : undefined;
            inputs["name"] = args ? args.name : undefined;
        }
        super(SecurityConfiguration.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering SecurityConfiguration resources.
 */
export interface SecurityConfigurationState {
    /**
     * Configuration block containing encryption configuration. Detailed below.
     */
    readonly encryptionConfiguration?: pulumi.Input<{ cloudwatchEncryption: pulumi.Input<{ cloudwatchEncryptionMode?: pulumi.Input<string>, kmsKeyArn?: pulumi.Input<string> }>, jobBookmarksEncryption: pulumi.Input<{ jobBookmarksEncryptionMode?: pulumi.Input<string>, kmsKeyArn?: pulumi.Input<string> }>, s3Encryption: pulumi.Input<{ kmsKeyArn?: pulumi.Input<string>, s3EncryptionMode?: pulumi.Input<string> }> }>;
    /**
     * Name of the security configuration.
     */
    readonly name?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SecurityConfiguration resource.
 */
export interface SecurityConfigurationArgs {
    /**
     * Configuration block containing encryption configuration. Detailed below.
     */
    readonly encryptionConfiguration: pulumi.Input<{ cloudwatchEncryption: pulumi.Input<{ cloudwatchEncryptionMode?: pulumi.Input<string>, kmsKeyArn?: pulumi.Input<string> }>, jobBookmarksEncryption: pulumi.Input<{ jobBookmarksEncryptionMode?: pulumi.Input<string>, kmsKeyArn?: pulumi.Input<string> }>, s3Encryption: pulumi.Input<{ kmsKeyArn?: pulumi.Input<string>, s3EncryptionMode?: pulumi.Input<string> }> }>;
    /**
     * Name of the security configuration.
     */
    readonly name?: pulumi.Input<string>;
}
