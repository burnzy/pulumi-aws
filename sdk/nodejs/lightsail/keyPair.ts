// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";
import * as utils from "../utils";

/**
 * Provides a Lightsail Key Pair, for use with Lightsail Instances. These key pairs
 * are separate from EC2 Key Pairs, and must be created or imported for use with
 * Lightsail.
 * 
 * > **Note:** Lightsail is currently only supported in a limited number of AWS Regions, please see ["Regions and Availability Zones in Amazon Lightsail"](https://lightsail.aws.amazon.com/ls/docs/overview/article/understanding-regions-and-availability-zones-in-amazon-lightsail) for more details
 * 
 * ## Example Usage, creating a new Key Pair
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * // Create a new Lightsail Key Pair
 * const lgKeyPair = new aws.lightsail.KeyPair("lg_key_pair", {});
 * ```
 * 
 * ## Create new Key Pair, encrypting the private key with a PGP Key
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const lgKeyPair = new aws.lightsail.KeyPair("lg_key_pair", {
 *     pgpKey: "keybase:keybaseusername",
 * });
 * ```
 * 
 * ## Import an existing public key
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * import * as fs from "fs";
 * 
 * const lgKeyPair = new aws.lightsail.KeyPair("lg_key_pair", {
 *     publicKey: fs.readFileSync("~/.ssh/id_rsa.pub", "utf-8"),
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/lightsail_key_pair.html.markdown.
 */
export class KeyPair extends pulumi.CustomResource {
    /**
     * Get an existing KeyPair resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: KeyPairState, opts?: pulumi.CustomResourceOptions): KeyPair {
        return new KeyPair(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:lightsail/keyPair:KeyPair';

    /**
     * Returns true if the given object is an instance of KeyPair.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is KeyPair {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === KeyPair.__pulumiType;
    }

    /**
     * The ARN of the Lightsail key pair
     */
    public /*out*/ readonly arn!: pulumi.Output<string>;
    /**
     * The MD5 public key fingerprint for the encrypted
     * private key
     */
    public /*out*/ readonly encryptedFingerprint!: pulumi.Output<string>;
    /**
     * the private key material, base 64 encoded and
     * encrypted with the given `pgp_key`. This is only populated when creating a new
     * key and `pgp_key` is supplied
     */
    public /*out*/ readonly encryptedPrivateKey!: pulumi.Output<string>;
    /**
     * The MD5 public key fingerprint as specified in section 4 of RFC 4716.
     */
    public /*out*/ readonly fingerprint!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly namePrefix!: pulumi.Output<string | undefined>;
    /**
     * An optional PGP key to encrypt the resulting private
     * key material. Only used when creating a new key pair
     */
    public readonly pgpKey!: pulumi.Output<string | undefined>;
    /**
     * the private key, base64 encoded. This is only populated
     * when creating a new key, and when no `pgp_key` is provided
     */
    public /*out*/ readonly privateKey!: pulumi.Output<string>;
    /**
     * The public key material. This public key will be
     * imported into Lightsail
     */
    public readonly publicKey!: pulumi.Output<string>;

    /**
     * Create a KeyPair resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: KeyPairArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: KeyPairArgs | KeyPairState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as KeyPairState | undefined;
            inputs["arn"] = state ? state.arn : undefined;
            inputs["encryptedFingerprint"] = state ? state.encryptedFingerprint : undefined;
            inputs["encryptedPrivateKey"] = state ? state.encryptedPrivateKey : undefined;
            inputs["fingerprint"] = state ? state.fingerprint : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["namePrefix"] = state ? state.namePrefix : undefined;
            inputs["pgpKey"] = state ? state.pgpKey : undefined;
            inputs["privateKey"] = state ? state.privateKey : undefined;
            inputs["publicKey"] = state ? state.publicKey : undefined;
        } else {
            const args = argsOrState as KeyPairArgs | undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["namePrefix"] = args ? args.namePrefix : undefined;
            inputs["pgpKey"] = args ? args.pgpKey : undefined;
            inputs["publicKey"] = args ? args.publicKey : undefined;
            inputs["arn"] = undefined /*out*/;
            inputs["encryptedFingerprint"] = undefined /*out*/;
            inputs["encryptedPrivateKey"] = undefined /*out*/;
            inputs["fingerprint"] = undefined /*out*/;
            inputs["privateKey"] = undefined /*out*/;
        }
        super(KeyPair.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering KeyPair resources.
 */
export interface KeyPairState {
    /**
     * The ARN of the Lightsail key pair
     */
    readonly arn?: pulumi.Input<string>;
    /**
     * The MD5 public key fingerprint for the encrypted
     * private key
     */
    readonly encryptedFingerprint?: pulumi.Input<string>;
    /**
     * the private key material, base 64 encoded and
     * encrypted with the given `pgp_key`. This is only populated when creating a new
     * key and `pgp_key` is supplied
     */
    readonly encryptedPrivateKey?: pulumi.Input<string>;
    /**
     * The MD5 public key fingerprint as specified in section 4 of RFC 4716.
     */
    readonly fingerprint?: pulumi.Input<string>;
    readonly name?: pulumi.Input<string>;
    readonly namePrefix?: pulumi.Input<string>;
    /**
     * An optional PGP key to encrypt the resulting private
     * key material. Only used when creating a new key pair
     */
    readonly pgpKey?: pulumi.Input<string>;
    /**
     * the private key, base64 encoded. This is only populated
     * when creating a new key, and when no `pgp_key` is provided
     */
    readonly privateKey?: pulumi.Input<string>;
    /**
     * The public key material. This public key will be
     * imported into Lightsail
     */
    readonly publicKey?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a KeyPair resource.
 */
export interface KeyPairArgs {
    readonly name?: pulumi.Input<string>;
    readonly namePrefix?: pulumi.Input<string>;
    /**
     * An optional PGP key to encrypt the resulting private
     * key material. Only used when creating a new key pair
     */
    readonly pgpKey?: pulumi.Input<string>;
    /**
     * The public key material. This public key will be
     * imported into Lightsail
     */
    readonly publicKey?: pulumi.Input<string>;
}
