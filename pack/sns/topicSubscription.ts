// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

import {Topic} from "./topic";

/**
 *   Provides a resource for subscribing to SNS topics. Requires that an SNS topic exist for the subscription to attach to.
 * This resource allows you to automatically place messages sent to SNS topics in SQS queues, send them as HTTP(S) POST requests
 * to a given endpoint, send SMS messages, or notify devices / applications. The most likely use case for Terraform users will
 * probably be SQS queues.
 * 
 * ~> **NOTE:** If SNS topic and SQS queue are in different AWS regions it is important to place the "aws_sns_topic_subscription" into the terraform configuration of the region with the SQS queue. If "aws_sns_topic_subscription" is placed in the terraform configuration of the region with the SNS topic terraform will fail to create the subscription.
 * 
 * ~> **NOTE:** Setup of cross-account subscriptions from SNS topics to SQS queues requires Terraform to have access to BOTH accounts.
 * 
 * ~> **NOTE:** If SNS topic and SQS queue are in different AWS accounts but the same region it is important to place the "aws_sns_topic_subscription" into the terraform configuration of the account with the SQS queue. If "aws_sns_topic_subscription" is placed in the terraform configuration of the account with the SNS topic terraform creates the subscriptions but does not keep state and tries to re-create the subscription at every apply.
 * 
 * ~> **NOTE:** If SNS topic and SQS queue are in different AWS accounts and different AWS regions it is important to recognize that the subscription needs to be initiated from the account with the SQS queue but in the region of the SNS topic.
 */
export class TopicSubscription extends fabric.Resource {
    /**
     * The ARN of the subscription stored as a more user-friendly property
     */
    public /*out*/ readonly arn: fabric.Computed<string>;
    /**
     * Integer indicating number of minutes to wait in retying mode for fetching subscription arn before marking it as failure. Only applicable for http and https protocols (default is 1 minute).
     */
    public readonly confirmationTimeoutInMinutes?: fabric.Computed<number>;
    public readonly deliveryPolicy?: fabric.Computed<string>;
    /**
     * The endpoint to send data to, the contents will vary with the protocol. (see below for more information)
     */
    public readonly endpoint: fabric.Computed<string>;
    /**
     * Boolean indicating whether the end point is capable of [auto confirming subscription](http://docs.aws.amazon.com/sns/latest/dg/SendMessageToHttp.html#SendMessageToHttp.prepare) e.g., PagerDuty (default is false)
     */
    public readonly endpointAutoConfirms?: fabric.Computed<boolean>;
    /**
     * The protocol to use. The possible values for this are: `sqs`,  `lambda`, `application`. (`http` or `https` are partially supported, see below) (`email`, `sms`, are options but unsupported, see below).
     */
    public readonly protocol: fabric.Computed<string>;
    /**
     * Boolean indicating whether or not to enable raw message delivery (the original message is directly passed, not wrapped in JSON with the original message in the message property).
     */
    public readonly rawMessageDelivery?: fabric.Computed<boolean>;
    /**
     * The ARN of the SNS topic to subscribe to
     */
    public readonly topic: fabric.Computed<Topic>;

    /**
     * Create a TopicSubscription resource with the given unique name, arguments and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this TopicSubscription instance
     * @param args A collection of arguments for creating this TopicSubscription intance
     * @param dependsOn A optional array of additional resources this intance depends on
     */
    constructor(urnName: string, args: TopicSubscriptionArgs, dependsOn?: fabric.Resource[]) {
        if (args.endpoint === undefined) {
            throw new Error("Missing required property 'endpoint'");
        }
        if (args.protocol === undefined) {
            throw new Error("Missing required property 'protocol'");
        }
        if (args.topic === undefined) {
            throw new Error("Missing required property 'topic'");
        }
        super("aws:sns/topicSubscription:TopicSubscription", urnName, {
            "confirmationTimeoutInMinutes": args.confirmationTimeoutInMinutes,
            "deliveryPolicy": args.deliveryPolicy,
            "endpoint": args.endpoint,
            "endpointAutoConfirms": args.endpointAutoConfirms,
            "protocol": args.protocol,
            "rawMessageDelivery": args.rawMessageDelivery,
            "topic": args.topic,
            "arn": undefined,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a TopicSubscription resource.
 */
export interface TopicSubscriptionArgs {
    /**
     * Integer indicating number of minutes to wait in retying mode for fetching subscription arn before marking it as failure. Only applicable for http and https protocols (default is 1 minute).
     */
    readonly confirmationTimeoutInMinutes?: fabric.ComputedValue<number>;
    readonly deliveryPolicy?: fabric.ComputedValue<string>;
    /**
     * The endpoint to send data to, the contents will vary with the protocol. (see below for more information)
     */
    readonly endpoint: fabric.ComputedValue<string>;
    /**
     * Boolean indicating whether the end point is capable of [auto confirming subscription](http://docs.aws.amazon.com/sns/latest/dg/SendMessageToHttp.html#SendMessageToHttp.prepare) e.g., PagerDuty (default is false)
     */
    readonly endpointAutoConfirms?: fabric.ComputedValue<boolean>;
    /**
     * The protocol to use. The possible values for this are: `sqs`,  `lambda`, `application`. (`http` or `https` are partially supported, see below) (`email`, `sms`, are options but unsupported, see below).
     */
    readonly protocol: fabric.ComputedValue<string>;
    /**
     * Boolean indicating whether or not to enable raw message delivery (the original message is directly passed, not wrapped in JSON with the original message in the message property).
     */
    readonly rawMessageDelivery?: fabric.ComputedValue<boolean>;
    /**
     * The ARN of the SNS topic to subscribe to
     */
    readonly topic: fabric.ComputedValue<Topic>;
}

