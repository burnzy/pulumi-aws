// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * The ECS Service data source allows access to details of a specific
 * Service within a AWS ECS Cluster.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const example = aws_ecs_cluster_example.arn.apply(arn => aws.ecs.getService({
 *     clusterArn: arn,
 *     serviceName: "example",
 * }));
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/d/ecs_service.html.markdown.
 */
export function getService(args: GetServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetServiceResult> & GetServiceResult {
    const promise: Promise<GetServiceResult> = pulumi.runtime.invoke("aws:ecs/getService:getService", {
        "clusterArn": args.clusterArn,
        "serviceName": args.serviceName,
    }, opts);

    return pulumi.utils.liftProperties(promise);
}

/**
 * A collection of arguments for invoking getService.
 */
export interface GetServiceArgs {
    /**
     * The arn of the ECS Cluster
     */
    readonly clusterArn: string;
    /**
     * The name of the ECS Service
     */
    readonly serviceName: string;
}

/**
 * A collection of values returned by getService.
 */
export interface GetServiceResult {
    /**
     * The ARN of the ECS Service
     */
    readonly arn: string;
    readonly clusterArn: string;
    /**
     * The number of tasks for the ECS Service
     */
    readonly desiredCount: number;
    /**
     * The launch type for the ECS Service
     */
    readonly launchType: string;
    /**
     * The scheduling strategy for the ECS Service
     */
    readonly schedulingStrategy: string;
    readonly serviceName: string;
    /**
     * The family for the latest ACTIVE revision
     */
    readonly taskDefinition: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
