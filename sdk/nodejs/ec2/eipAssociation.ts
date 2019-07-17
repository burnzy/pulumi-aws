// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";
import * as utils from "../utils";

/**
 * Provides an AWS EIP Association as a top level resource, to associate and
 * disassociate Elastic IPs from AWS Instances and Network Interfaces.
 * 
 * > **NOTE:** Do not use this resource to associate an EIP to `aws_lb` or `aws_nat_gateway` resources. Instead use the `allocation_id` available in those resources to allow AWS to manage the association, otherwise you will see `AuthFailure` errors.
 * 
 * > **NOTE:** `aws_eip_association` is useful in scenarios where EIPs are either
 * pre-existing or distributed to customers or users and therefore cannot be changed.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const example = new aws.ec2.Eip("example", {
 *     vpc: true,
 * });
 * const web = new aws.ec2.Instance("web", {
 *     ami: "ami-21f78e11",
 *     availabilityZone: "us-west-2a",
 *     instanceType: "t1.micro",
 *     tags: {
 *         Name: "HelloWorld",
 *     },
 * });
 * const eipAssoc = new aws.ec2.EipAssociation("eip_assoc", {
 *     allocationId: example.id,
 *     instanceId: web.id,
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/eip_association.html.markdown.
 */
export class EipAssociation extends pulumi.CustomResource {
    /**
     * Get an existing EipAssociation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EipAssociationState, opts?: pulumi.CustomResourceOptions): EipAssociation {
        return new EipAssociation(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:ec2/eipAssociation:EipAssociation';

    /**
     * Returns true if the given object is an instance of EipAssociation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is EipAssociation {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === EipAssociation.__pulumiType;
    }

    /**
     * The allocation ID. This is required for EC2-VPC.
     */
    public readonly allocationId!: pulumi.Output<string>;
    /**
     * Whether to allow an Elastic IP to
     * be re-associated. Defaults to `true` in VPC.
     */
    public readonly allowReassociation!: pulumi.Output<boolean | undefined>;
    /**
     * The ID of the instance. This is required for
     * EC2-Classic. For EC2-VPC, you can specify either the instance ID or the
     * network interface ID, but not both. The operation fails if you specify an
     * instance ID unless exactly one network interface is attached.
     */
    public readonly instanceId!: pulumi.Output<string>;
    /**
     * The ID of the network interface. If the
     * instance has more than one network interface, you must specify a network
     * interface ID.
     */
    public readonly networkInterfaceId!: pulumi.Output<string>;
    /**
     * The primary or secondary private IP address
     * to associate with the Elastic IP address. If no private IP address is
     * specified, the Elastic IP address is associated with the primary private IP
     * address.
     */
    public readonly privateIpAddress!: pulumi.Output<string>;
    /**
     * The Elastic IP address. This is required for EC2-Classic.
     */
    public readonly publicIp!: pulumi.Output<string>;

    /**
     * Create a EipAssociation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: EipAssociationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: EipAssociationArgs | EipAssociationState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as EipAssociationState | undefined;
            inputs["allocationId"] = state ? state.allocationId : undefined;
            inputs["allowReassociation"] = state ? state.allowReassociation : undefined;
            inputs["instanceId"] = state ? state.instanceId : undefined;
            inputs["networkInterfaceId"] = state ? state.networkInterfaceId : undefined;
            inputs["privateIpAddress"] = state ? state.privateIpAddress : undefined;
            inputs["publicIp"] = state ? state.publicIp : undefined;
        } else {
            const args = argsOrState as EipAssociationArgs | undefined;
            inputs["allocationId"] = args ? args.allocationId : undefined;
            inputs["allowReassociation"] = args ? args.allowReassociation : undefined;
            inputs["instanceId"] = args ? args.instanceId : undefined;
            inputs["networkInterfaceId"] = args ? args.networkInterfaceId : undefined;
            inputs["privateIpAddress"] = args ? args.privateIpAddress : undefined;
            inputs["publicIp"] = args ? args.publicIp : undefined;
        }
        super(EipAssociation.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering EipAssociation resources.
 */
export interface EipAssociationState {
    /**
     * The allocation ID. This is required for EC2-VPC.
     */
    readonly allocationId?: pulumi.Input<string>;
    /**
     * Whether to allow an Elastic IP to
     * be re-associated. Defaults to `true` in VPC.
     */
    readonly allowReassociation?: pulumi.Input<boolean>;
    /**
     * The ID of the instance. This is required for
     * EC2-Classic. For EC2-VPC, you can specify either the instance ID or the
     * network interface ID, but not both. The operation fails if you specify an
     * instance ID unless exactly one network interface is attached.
     */
    readonly instanceId?: pulumi.Input<string>;
    /**
     * The ID of the network interface. If the
     * instance has more than one network interface, you must specify a network
     * interface ID.
     */
    readonly networkInterfaceId?: pulumi.Input<string>;
    /**
     * The primary or secondary private IP address
     * to associate with the Elastic IP address. If no private IP address is
     * specified, the Elastic IP address is associated with the primary private IP
     * address.
     */
    readonly privateIpAddress?: pulumi.Input<string>;
    /**
     * The Elastic IP address. This is required for EC2-Classic.
     */
    readonly publicIp?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a EipAssociation resource.
 */
export interface EipAssociationArgs {
    /**
     * The allocation ID. This is required for EC2-VPC.
     */
    readonly allocationId?: pulumi.Input<string>;
    /**
     * Whether to allow an Elastic IP to
     * be re-associated. Defaults to `true` in VPC.
     */
    readonly allowReassociation?: pulumi.Input<boolean>;
    /**
     * The ID of the instance. This is required for
     * EC2-Classic. For EC2-VPC, you can specify either the instance ID or the
     * network interface ID, but not both. The operation fails if you specify an
     * instance ID unless exactly one network interface is attached.
     */
    readonly instanceId?: pulumi.Input<string>;
    /**
     * The ID of the network interface. If the
     * instance has more than one network interface, you must specify a network
     * interface ID.
     */
    readonly networkInterfaceId?: pulumi.Input<string>;
    /**
     * The primary or secondary private IP address
     * to associate with the Elastic IP address. If no private IP address is
     * specified, the Elastic IP address is associated with the primary private IP
     * address.
     */
    readonly privateIpAddress?: pulumi.Input<string>;
    /**
     * The Elastic IP address. This is required for EC2-Classic.
     */
    readonly publicIp?: pulumi.Input<string>;
}
