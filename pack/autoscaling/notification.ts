// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

/**
 * Provides an AutoScaling Group with Notification support, via SNS Topics. Each of
 * the `notifications` map to a [Notification Configuration][2] inside Amazon Web
 * Services, and are applied to each AutoScaling Group you supply.
 */
export class Notification extends fabric.Resource {
    /**
     * A list of AutoScaling Group Names
     */
    public readonly groupNames: fabric.Computed<string[]>;
    /**
     * A list of Notification Types that trigger
     * notifications. Acceptable values are documented [in the AWS documentation here][1]
     */
    public readonly notifications: fabric.Computed<string[]>;
    /**
     * The Topic ARN for notifications to be sent through
     */
    public readonly topicArn: fabric.Computed<string>;

    /**
     * Create a Notification resource with the given unique name, arguments and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this Notification instance
     * @param args A collection of arguments for creating this Notification intance
     * @param dependsOn A optional array of additional resources this intance depends on
     */
    constructor(urnName: string, args: NotificationArgs, dependsOn?: fabric.Resource[]) {
        if (args.groupNames === undefined) {
            throw new Error("Missing required property 'groupNames'");
        }
        if (args.notifications === undefined) {
            throw new Error("Missing required property 'notifications'");
        }
        if (args.topicArn === undefined) {
            throw new Error("Missing required property 'topicArn'");
        }
        super("aws:autoscaling/notification:Notification", urnName, {
            "groupNames": args.groupNames,
            "notifications": args.notifications,
            "topicArn": args.topicArn,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a Notification resource.
 */
export interface NotificationArgs {
    /**
     * A list of AutoScaling Group Names
     */
    readonly groupNames: fabric.ComputedValue<fabric.ComputedValue<string>>[];
    /**
     * A list of Notification Types that trigger
     * notifications. Acceptable values are documented [in the AWS documentation here][1]
     */
    readonly notifications: fabric.ComputedValue<fabric.ComputedValue<string>>[];
    /**
     * The Topic ARN for notifications to be sent through
     */
    readonly topicArn: fabric.ComputedValue<string>;
}

