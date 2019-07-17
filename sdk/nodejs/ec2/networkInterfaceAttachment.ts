// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";
import * as utils from "../utils";

/**
 * Attach an Elastic network interface (ENI) resource with EC2 instance.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const test = new aws.ec2.NetworkInterfaceAttachment("test", {
 *     deviceIndex: 0,
 *     instanceId: aws_instance_test.id,
 *     networkInterfaceId: aws_network_interface_test.id,
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/network_interface_attachment.html.markdown.
 */
export class NetworkInterfaceAttachment extends pulumi.CustomResource {
    /**
     * Get an existing NetworkInterfaceAttachment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NetworkInterfaceAttachmentState, opts?: pulumi.CustomResourceOptions): NetworkInterfaceAttachment {
        return new NetworkInterfaceAttachment(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:ec2/networkInterfaceAttachment:NetworkInterfaceAttachment';

    /**
     * Returns true if the given object is an instance of NetworkInterfaceAttachment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NetworkInterfaceAttachment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NetworkInterfaceAttachment.__pulumiType;
    }

    /**
     * The ENI Attachment ID.
     */
    public /*out*/ readonly attachmentId!: pulumi.Output<string>;
    /**
     * Network interface index (int).
     */
    public readonly deviceIndex!: pulumi.Output<number>;
    /**
     * Instance ID to attach.
     */
    public readonly instanceId!: pulumi.Output<string>;
    /**
     * ENI ID to attach.
     */
    public readonly networkInterfaceId!: pulumi.Output<string>;
    /**
     * The status of the Network Interface Attachment.
     */
    public /*out*/ readonly status!: pulumi.Output<string>;

    /**
     * Create a NetworkInterfaceAttachment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NetworkInterfaceAttachmentArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NetworkInterfaceAttachmentArgs | NetworkInterfaceAttachmentState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as NetworkInterfaceAttachmentState | undefined;
            inputs["attachmentId"] = state ? state.attachmentId : undefined;
            inputs["deviceIndex"] = state ? state.deviceIndex : undefined;
            inputs["instanceId"] = state ? state.instanceId : undefined;
            inputs["networkInterfaceId"] = state ? state.networkInterfaceId : undefined;
            inputs["status"] = state ? state.status : undefined;
        } else {
            const args = argsOrState as NetworkInterfaceAttachmentArgs | undefined;
            if (!args || args.deviceIndex === undefined) {
                throw new Error("Missing required property 'deviceIndex'");
            }
            if (!args || args.instanceId === undefined) {
                throw new Error("Missing required property 'instanceId'");
            }
            if (!args || args.networkInterfaceId === undefined) {
                throw new Error("Missing required property 'networkInterfaceId'");
            }
            inputs["deviceIndex"] = args ? args.deviceIndex : undefined;
            inputs["instanceId"] = args ? args.instanceId : undefined;
            inputs["networkInterfaceId"] = args ? args.networkInterfaceId : undefined;
            inputs["attachmentId"] = undefined /*out*/;
            inputs["status"] = undefined /*out*/;
        }
        super(NetworkInterfaceAttachment.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering NetworkInterfaceAttachment resources.
 */
export interface NetworkInterfaceAttachmentState {
    /**
     * The ENI Attachment ID.
     */
    readonly attachmentId?: pulumi.Input<string>;
    /**
     * Network interface index (int).
     */
    readonly deviceIndex?: pulumi.Input<number>;
    /**
     * Instance ID to attach.
     */
    readonly instanceId?: pulumi.Input<string>;
    /**
     * ENI ID to attach.
     */
    readonly networkInterfaceId?: pulumi.Input<string>;
    /**
     * The status of the Network Interface Attachment.
     */
    readonly status?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a NetworkInterfaceAttachment resource.
 */
export interface NetworkInterfaceAttachmentArgs {
    /**
     * Network interface index (int).
     */
    readonly deviceIndex: pulumi.Input<number>;
    /**
     * Instance ID to attach.
     */
    readonly instanceId: pulumi.Input<string>;
    /**
     * ENI ID to attach.
     */
    readonly networkInterfaceId: pulumi.Input<string>;
}
