// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package batch

import (
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// The Batch Compute Environment data source allows access to details of a specific
// compute environment within AWS Batch.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/d/batch_compute_environment.html.markdown.
func LookupComputeEnvironment(ctx *pulumi.Context, args *GetComputeEnvironmentArgs) (*GetComputeEnvironmentResult, error) {
	inputs := make(map[string]interface{})
	if args != nil {
		inputs["computeEnvironmentName"] = args.ComputeEnvironmentName
	}
	outputs, err := ctx.Invoke("aws:batch/getComputeEnvironment:getComputeEnvironment", inputs)
	if err != nil {
		return nil, err
	}
	return &GetComputeEnvironmentResult{
		Arn: outputs["arn"],
		ComputeEnvironmentName: outputs["computeEnvironmentName"],
		EcsClusterArn: outputs["ecsClusterArn"],
		ServiceRole: outputs["serviceRole"],
		State: outputs["state"],
		Status: outputs["status"],
		StatusReason: outputs["statusReason"],
		Type: outputs["type"],
		Id: outputs["id"],
	}, nil
}

// A collection of arguments for invoking getComputeEnvironment.
type GetComputeEnvironmentArgs struct {
	// The name of the Batch Compute Environment
	ComputeEnvironmentName interface{}
}

// A collection of values returned by getComputeEnvironment.
type GetComputeEnvironmentResult struct {
	// The ARN of the compute environment.
	Arn interface{}
	ComputeEnvironmentName interface{}
	// The ARN of the underlying Amazon ECS cluster used by the compute environment.
	EcsClusterArn interface{}
	// The ARN of the IAM role that allows AWS Batch to make calls to other AWS services on your behalf.
	ServiceRole interface{}
	// The state of the compute environment (for example, `ENABLED` or `DISABLED`). If the state is `ENABLED`, then the compute environment accepts jobs from a queue and can scale out automatically based on queues.
	State interface{}
	// The current status of the compute environment (for example, `CREATING` or `VALID`).
	Status interface{}
	// A short, human-readable string to provide additional details about the current status of the compute environment.
	StatusReason interface{}
	// The type of the compute environment (for example, `MANAGED` or `UNMANAGED`).
	Type interface{}
	// id is the provider-assigned unique ID for this managed resource.
	Id interface{}
}
