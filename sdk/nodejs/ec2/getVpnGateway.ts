// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * The VPN Gateway data source provides details about
 * a specific VPN gateway.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const selected = pulumi.output(aws.ec2.getVpnGateway({
 *     filters: [{
 *         name: "tag:Name",
 *         values: ["vpn-gw"],
 *     }],
 * }));
 * 
 * export const vpnGatewayId = selected.id;
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/d/vpn_gateway.html.markdown.
 */
export function getVpnGateway(args?: GetVpnGatewayArgs, opts?: pulumi.InvokeOptions): Promise<GetVpnGatewayResult> & GetVpnGatewayResult {
    args = args || {};
    const promise: Promise<GetVpnGatewayResult> = pulumi.runtime.invoke("aws:ec2/getVpnGateway:getVpnGateway", {
        "amazonSideAsn": args.amazonSideAsn,
        "attachedVpcId": args.attachedVpcId,
        "availabilityZone": args.availabilityZone,
        "filters": args.filters,
        "id": args.id,
        "state": args.state,
        "tags": args.tags,
    }, opts);

    return pulumi.utils.liftProperties(promise, opts);
}

/**
 * A collection of arguments for invoking getVpnGateway.
 */
export interface GetVpnGatewayArgs {
    /**
     * The Autonomous System Number (ASN) for the Amazon side of the specific VPN Gateway to retrieve.
     */
    readonly amazonSideAsn?: string;
    /**
     * The ID of a VPC attached to the specific VPN Gateway to retrieve.
     */
    readonly attachedVpcId?: string;
    /**
     * The Availability Zone of the specific VPN Gateway to retrieve.
     */
    readonly availabilityZone?: string;
    /**
     * Custom filter block as described below.
     */
    readonly filters?: { name: string, values: string[] }[];
    /**
     * The ID of the specific VPN Gateway to retrieve.
     */
    readonly id?: string;
    /**
     * The state of the specific VPN Gateway to retrieve.
     */
    readonly state?: string;
    /**
     * A mapping of tags, each pair of which must exactly match
     * a pair on the desired VPN Gateway.
     */
    readonly tags?: {[key: string]: any};
}

/**
 * A collection of values returned by getVpnGateway.
 */
export interface GetVpnGatewayResult {
    readonly amazonSideAsn: string;
    readonly attachedVpcId: string;
    readonly availabilityZone: string;
    readonly filters?: { name: string, values: string[] }[];
    readonly id: string;
    readonly state: string;
    readonly tags: {[key: string]: any};
}
