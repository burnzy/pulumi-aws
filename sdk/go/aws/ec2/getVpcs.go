// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package ec2

import (
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// This resource can be useful for getting back a list of VPC Ids for a region.
// 
// The following example retrieves a list of VPC Ids with a custom tag of `service` set to a value of "production".
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/d/vpcs.html.markdown.
func LookupVpcs(ctx *pulumi.Context, args *GetVpcsArgs) (*GetVpcsResult, error) {
	inputs := make(map[string]interface{})
	if args != nil {
		inputs["filters"] = args.Filters
		inputs["tags"] = args.Tags
	}
	outputs, err := ctx.Invoke("aws:ec2/getVpcs:getVpcs", inputs)
	if err != nil {
		return nil, err
	}
	return &GetVpcsResult{
		Filters: outputs["filters"],
		Ids: outputs["ids"],
		Tags: outputs["tags"],
		Id: outputs["id"],
	}, nil
}

// A collection of arguments for invoking getVpcs.
type GetVpcsArgs struct {
	// Custom filter block as described below.
	Filters interface{}
	// A mapping of tags, each pair of which must exactly match
	// a pair on the desired vpcs.
	Tags interface{}
}

// A collection of values returned by getVpcs.
type GetVpcsResult struct {
	Filters interface{}
	// A list of all the VPC Ids found. This data source will fail if none are found.
	Ids interface{}
	Tags interface{}
	// id is the provider-assigned unique ID for this managed resource.
	Id interface{}
}
