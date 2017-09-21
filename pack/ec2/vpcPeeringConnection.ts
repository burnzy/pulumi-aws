// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

/**
 * Provides a resource to manage a VPC Peering Connection resource.
 * 
 * -> **Note:** For cross-account (requester's AWS account differs from the accepter's AWS account) VPC Peering Connections
 * use the `aws_vpc_peering_connection` resource to manage the requester's side of the connection and
 * use the `aws_vpc_peering_connection_accepter` resource to manage the accepter's side of the connection.
 */
export class VpcPeeringConnection extends fabric.Resource {
    /**
     * The status of the VPC Peering Connection request.
     */
    public /*out*/ readonly acceptStatus: fabric.Computed<string>;
    /**
     * An optional configuration block that allows for [VPC Peering Connection]
     * (http://docs.aws.amazon.com/AmazonVPC/latest/PeeringGuide) options to be set for the VPC that accepts
     * the peering connection (a maximum of one).
     */
    public readonly accepter: fabric.Computed<{ allowClassicLinkToRemoteVpc?: boolean, allowRemoteVpcDnsResolution?: boolean, allowVpcToRemoteClassicLink?: boolean }[]>;
    /**
     * Accept the peering (both VPCs need to be in the same AWS account).
     */
    public readonly autoAccept?: fabric.Computed<boolean>;
    /**
     * The AWS account ID of the owner of the peer VPC.
     * Defaults to the account ID the [AWS provider][1] is currently connected to.
     */
    public readonly peerOwnerId: fabric.Computed<string>;
    /**
     * The ID of the VPC with which you are creating the VPC Peering Connection.
     */
    public readonly peerVpcId: fabric.Computed<string>;
    /**
     * A optional configuration block that allows for [VPC Peering Connection]
     * (http://docs.aws.amazon.com/AmazonVPC/latest/PeeringGuide) options to be set for the VPC that requests
     * the peering connection (a maximum of one).
     */
    public readonly requester: fabric.Computed<{ allowClassicLinkToRemoteVpc?: boolean, allowRemoteVpcDnsResolution?: boolean, allowVpcToRemoteClassicLink?: boolean }[]>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags?: fabric.Computed<{[key: string]: any}>;
    /**
     * The ID of the requester VPC.
     */
    public readonly vpcId: fabric.Computed<string>;

    /**
     * Create a VpcPeeringConnection resource with the given unique name, arguments and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this VpcPeeringConnection instance
     * @param args A collection of arguments for creating this VpcPeeringConnection intance
     * @param dependsOn A optional array of additional resources this intance depends on
     */
    constructor(urnName: string, args: VpcPeeringConnectionArgs, dependsOn?: fabric.Resource[]) {
        if (args.peerVpcId === undefined) {
            throw new Error("Missing required property 'peerVpcId'");
        }
        if (args.vpcId === undefined) {
            throw new Error("Missing required property 'vpcId'");
        }
        super("aws:ec2/vpcPeeringConnection:VpcPeeringConnection", urnName, {
            "accepter": args.accepter,
            "autoAccept": args.autoAccept,
            "peerOwnerId": args.peerOwnerId,
            "peerVpcId": args.peerVpcId,
            "requester": args.requester,
            "tags": args.tags,
            "vpcId": args.vpcId,
            "acceptStatus": undefined,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a VpcPeeringConnection resource.
 */
export interface VpcPeeringConnectionArgs {
    /**
     * An optional configuration block that allows for [VPC Peering Connection]
     * (http://docs.aws.amazon.com/AmazonVPC/latest/PeeringGuide) options to be set for the VPC that accepts
     * the peering connection (a maximum of one).
     */
    readonly accepter?: fabric.ComputedValue<{ allowClassicLinkToRemoteVpc?: fabric.ComputedValue<boolean>, allowRemoteVpcDnsResolution?: fabric.ComputedValue<boolean>, allowVpcToRemoteClassicLink?: fabric.ComputedValue<boolean> }>[];
    /**
     * Accept the peering (both VPCs need to be in the same AWS account).
     */
    readonly autoAccept?: fabric.ComputedValue<boolean>;
    /**
     * The AWS account ID of the owner of the peer VPC.
     * Defaults to the account ID the [AWS provider][1] is currently connected to.
     */
    readonly peerOwnerId?: fabric.ComputedValue<string>;
    /**
     * The ID of the VPC with which you are creating the VPC Peering Connection.
     */
    readonly peerVpcId: fabric.ComputedValue<string>;
    /**
     * A optional configuration block that allows for [VPC Peering Connection]
     * (http://docs.aws.amazon.com/AmazonVPC/latest/PeeringGuide) options to be set for the VPC that requests
     * the peering connection (a maximum of one).
     */
    readonly requester?: fabric.ComputedValue<{ allowClassicLinkToRemoteVpc?: fabric.ComputedValue<boolean>, allowRemoteVpcDnsResolution?: fabric.ComputedValue<boolean>, allowVpcToRemoteClassicLink?: fabric.ComputedValue<boolean> }>[];
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: fabric.ComputedValue<{[key: string]: any}>;
    /**
     * The ID of the requester VPC.
     */
    readonly vpcId: fabric.ComputedValue<string>;
}

