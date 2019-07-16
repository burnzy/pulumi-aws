// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Provides information about a MQ Broker.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const config = new pulumi.Config();
 * const brokerId = config.get("brokerId") || "";
 * const brokerName = config.get("brokerName") || "";
 * 
 * const byId = pulumi.output(aws.mq.getBroker({
 *     brokerId: brokerId,
 * }));
 * const byName = pulumi.output(aws.mq.getBroker({
 *     brokerName: brokerName,
 * }));
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/d/mq_broker.html.markdown.
 */
export function getBroker(args?: GetBrokerArgs, opts?: pulumi.InvokeOptions): Promise<GetBrokerResult> & GetBrokerResult {
    args = args || {};
    const promise: Promise<GetBrokerResult> = pulumi.runtime.invoke("aws:mq/getBroker:getBroker", {
        "brokerId": args.brokerId,
        "brokerName": args.brokerName,
        "logs": args.logs,
        "tags": args.tags,
    }, opts);

    return pulumi.utils.liftProperties(promise);
}

/**
 * A collection of arguments for invoking getBroker.
 */
export interface GetBrokerArgs {
    /**
     * The unique id of the mq broker.
     */
    readonly brokerId?: string;
    /**
     * The unique name of the mq broker.
     */
    readonly brokerName?: string;
    readonly logs?: { audit?: boolean, general?: boolean };
    readonly tags?: {[key: string]: any};
}

/**
 * A collection of values returned by getBroker.
 */
export interface GetBrokerResult {
    readonly arn: string;
    readonly autoMinorVersionUpgrade: boolean;
    readonly brokerId: string;
    readonly brokerName: string;
    readonly configuration: { id: string, revision: number };
    readonly deploymentMode: string;
    readonly engineType: string;
    readonly engineVersion: string;
    readonly hostInstanceType: string;
    readonly instances: { consoleUrl: string, endpoints: string[], ipAddress: string }[];
    readonly logs?: { audit: boolean, general: boolean };
    readonly maintenanceWindowStartTime: { dayOfWeek: string, timeOfDay: string, timeZone: string };
    readonly publiclyAccessible: boolean;
    readonly securityGroups: string[];
    readonly subnetIds: string[];
    readonly tags: {[key: string]: any};
    readonly users: { consoleAccess: boolean, groups: string[], username: string }[];
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
