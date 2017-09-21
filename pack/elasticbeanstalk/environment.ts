// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

import {Application} from "./application";
import {ApplicationVersion} from "./applicationVersion";

/**
 * Provides an Elastic Beanstalk Environment Resource. Elastic Beanstalk allows
 * you to deploy and manage applications in the AWS cloud without worrying about
 * the infrastructure that runs those applications.
 * 
 * Environments are often things such as `development`, `integration`, or
 * `production`.
 */
export class Environment extends fabric.Resource {
    /**
     * List of all option settings configured in the Environment. These
     * are a combination of default settings and their overrides from `setting` in
     * the configuration.
     */
    public /*out*/ readonly allSettings: fabric.Computed<{ name: string, namespace: string, resource?: string, value: string }[]>;
    /**
     * Name of the application that contains the version
     * to be deployed
     */
    public readonly application: fabric.Computed<Application>;
    /**
     * The autoscaling groups used by this environment.
     */
    public /*out*/ readonly autoscalingGroups: fabric.Computed<string[]>;
    /**
     * Fully qualified DNS name for the Environment.
     */
    public /*out*/ readonly cname: fabric.Computed<string>;
    /**
     * Prefix to use for the fully qualified DNS name of
     * the Environment.
     */
    public readonly cnamePrefix: fabric.Computed<string>;
    /**
     * Short description of the Environment
     */
    public readonly description?: fabric.Computed<string>;
    /**
     * Instances used by this environment.
     */
    public /*out*/ readonly instances: fabric.Computed<string[]>;
    /**
     * Launch configurations in use by this environment.
     */
    public /*out*/ readonly launchConfigurations: fabric.Computed<string[]>;
    /**
     * Elastic load balancers in use by this environment.
     */
    public /*out*/ readonly loadBalancers: fabric.Computed<string[]>;
    /**
     * A unique name for this Environment. This name is used
     * in the application URL
     */
    public readonly name: fabric.Computed<string>;
    public readonly pollInterval?: fabric.Computed<string>;
    /**
     * SQS queues in use by this environment.
     */
    public /*out*/ readonly queues: fabric.Computed<string[]>;
    /**
     * Settings specifically set for this Environment.
     */
    public readonly setting?: fabric.Computed<{ name: string, namespace: string, resource?: string, value: string }[]>;
    public readonly solutionStackName: fabric.Computed<string>;
    public readonly tags?: fabric.Computed<{[key: string]: any}>;
    /**
     * The name of the Elastic Beanstalk Configuration
     * template to use in deployment
     */
    public readonly templateName?: fabric.Computed<string>;
    /**
     * Elastic Beanstalk Environment tier. Valid values are `Worker`
     * or `WebServer`. If tier is left blank `WebServer` will be used.
     * * `setting` – (Optional) Option settings to configure the new Environment. These
     * override specific values that are set as defaults. The format is detailed
     * below in [Option Settings](#option-settings)
     * * `solution_stack_name` – (Optional) A solution stack to base your environment
     * off of. Example stacks can be found in the [Amazon API documentation][1]
     */
    public readonly tier?: fabric.Computed<string>;
    /**
     * Autoscaling triggers in use by this environment.
     */
    public /*out*/ readonly triggers: fabric.Computed<string[]>;
    /**
     * The name of the Elastic Beanstalk Application Version
     * to use in deployment.
     * * `tags` – (Optional) A set of tags to apply to the Environment. **Note:** at
     * this time the Elastic Beanstalk API does not provide a programatic way of
     * changing these tags after initial application
     */
    public readonly version: fabric.Computed<ApplicationVersion>;
    /**
     * The maximum
     * [duration](https://golang.org/pkg/time/#ParseDuration) that Terraform should
     * wait for an Elastic Beanstalk Environment to be in a ready state before timing
     * out.
     * * `poll_interval` – The time between polling the AWS API to
     * check if changes have been applied. Use this to adjust the rate of API calls
     * for any `create` or `update` action. Minimum `10s`, maximum `180s`. Omit this to
     * use the default behavior, which is an exponential backoff
     */
    public readonly waitForReadyTimeout?: fabric.Computed<string>;

    /**
     * Create a Environment resource with the given unique name, arguments and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this Environment instance
     * @param args A collection of arguments for creating this Environment intance
     * @param dependsOn A optional array of additional resources this intance depends on
     */
    constructor(urnName: string, args: EnvironmentArgs, dependsOn?: fabric.Resource[]) {
        if (args.application === undefined) {
            throw new Error("Missing required property 'application'");
        }
        super("aws:elasticbeanstalk/environment:Environment", urnName, {
            "application": args.application,
            "cnamePrefix": args.cnamePrefix,
            "description": args.description,
            "name": args.name,
            "pollInterval": args.pollInterval,
            "setting": args.setting,
            "solutionStackName": args.solutionStackName,
            "tags": args.tags,
            "templateName": args.templateName,
            "tier": args.tier,
            "version": args.version,
            "waitForReadyTimeout": args.waitForReadyTimeout,
            "allSettings": undefined,
            "autoscalingGroups": undefined,
            "cname": undefined,
            "instances": undefined,
            "launchConfigurations": undefined,
            "loadBalancers": undefined,
            "queues": undefined,
            "triggers": undefined,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a Environment resource.
 */
export interface EnvironmentArgs {
    /**
     * Name of the application that contains the version
     * to be deployed
     */
    readonly application: fabric.ComputedValue<Application>;
    /**
     * Prefix to use for the fully qualified DNS name of
     * the Environment.
     */
    readonly cnamePrefix?: fabric.ComputedValue<string>;
    /**
     * Short description of the Environment
     */
    readonly description?: fabric.ComputedValue<string>;
    /**
     * A unique name for this Environment. This name is used
     * in the application URL
     */
    readonly name?: fabric.ComputedValue<string>;
    readonly pollInterval?: fabric.ComputedValue<string>;
    readonly setting?: fabric.ComputedValue<{ name: fabric.ComputedValue<string>, namespace: fabric.ComputedValue<string>, resource?: fabric.ComputedValue<string>, value: fabric.ComputedValue<string> }>[];
    readonly solutionStackName?: fabric.ComputedValue<string>;
    readonly tags?: fabric.ComputedValue<{[key: string]: any}>;
    /**
     * The name of the Elastic Beanstalk Configuration
     * template to use in deployment
     */
    readonly templateName?: fabric.ComputedValue<string>;
    /**
     * Elastic Beanstalk Environment tier. Valid values are `Worker`
     * or `WebServer`. If tier is left blank `WebServer` will be used.
     * * `setting` – (Optional) Option settings to configure the new Environment. These
     * override specific values that are set as defaults. The format is detailed
     * below in [Option Settings](#option-settings)
     * * `solution_stack_name` – (Optional) A solution stack to base your environment
     * off of. Example stacks can be found in the [Amazon API documentation][1]
     */
    readonly tier?: fabric.ComputedValue<string>;
    /**
     * The name of the Elastic Beanstalk Application Version
     * to use in deployment.
     * * `tags` – (Optional) A set of tags to apply to the Environment. **Note:** at
     * this time the Elastic Beanstalk API does not provide a programatic way of
     * changing these tags after initial application
     */
    readonly version?: fabric.ComputedValue<ApplicationVersion>;
    /**
     * The maximum
     * [duration](https://golang.org/pkg/time/#ParseDuration) that Terraform should
     * wait for an Elastic Beanstalk Environment to be in a ready state before timing
     * out.
     * * `poll_interval` – The time between polling the AWS API to
     * check if changes have been applied. Use this to adjust the rate of API calls
     * for any `create` or `update` action. Minimum `10s`, maximum `180s`. Omit this to
     * use the default behavior, which is an exponential backoff
     */
    readonly waitForReadyTimeout?: fabric.ComputedValue<string>;
}

