// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package ec2

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/route_table.html.markdown.
type RouteTable struct {
	s *pulumi.ResourceState
}

// NewRouteTable registers a new resource with the given unique name, arguments, and options.
func NewRouteTable(ctx *pulumi.Context,
	name string, args *RouteTableArgs, opts ...pulumi.ResourceOpt) (*RouteTable, error) {
	if args == nil || args.VpcId == nil {
		return nil, errors.New("missing required argument 'VpcId'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["propagatingVgws"] = nil
		inputs["routes"] = nil
		inputs["tags"] = nil
		inputs["vpcId"] = nil
	} else {
		inputs["propagatingVgws"] = args.PropagatingVgws
		inputs["routes"] = args.Routes
		inputs["tags"] = args.Tags
		inputs["vpcId"] = args.VpcId
	}
	inputs["ownerId"] = nil
	s, err := ctx.RegisterResource("aws:ec2/routeTable:RouteTable", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &RouteTable{s: s}, nil
}

// GetRouteTable gets an existing RouteTable resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetRouteTable(ctx *pulumi.Context,
	name string, id pulumi.ID, state *RouteTableState, opts ...pulumi.ResourceOpt) (*RouteTable, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["ownerId"] = state.OwnerId
		inputs["propagatingVgws"] = state.PropagatingVgws
		inputs["routes"] = state.Routes
		inputs["tags"] = state.Tags
		inputs["vpcId"] = state.VpcId
	}
	s, err := ctx.ReadResource("aws:ec2/routeTable:RouteTable", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &RouteTable{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *RouteTable) URN() *pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *RouteTable) ID() *pulumi.IDOutput {
	return r.s.ID()
}

// The ID of the AWS account that owns the route table
func (r *RouteTable) OwnerId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["ownerId"])
}

// A list of virtual gateways for propagation.
func (r *RouteTable) PropagatingVgws() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["propagatingVgws"])
}

// A list of route objects. Their keys are documented below. This argument is processed in [attribute-as-blocks mode](https://www.terraform.io/docs/configuration/attr-as-blocks.html).
func (r *RouteTable) Routes() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["routes"])
}

// A mapping of tags to assign to the resource.
func (r *RouteTable) Tags() *pulumi.MapOutput {
	return (*pulumi.MapOutput)(r.s.State["tags"])
}

// The VPC ID.
func (r *RouteTable) VpcId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["vpcId"])
}

// Input properties used for looking up and filtering RouteTable resources.
type RouteTableState struct {
	// The ID of the AWS account that owns the route table
	OwnerId interface{}
	// A list of virtual gateways for propagation.
	PropagatingVgws interface{}
	// A list of route objects. Their keys are documented below. This argument is processed in [attribute-as-blocks mode](https://www.terraform.io/docs/configuration/attr-as-blocks.html).
	Routes interface{}
	// A mapping of tags to assign to the resource.
	Tags interface{}
	// The VPC ID.
	VpcId interface{}
}

// The set of arguments for constructing a RouteTable resource.
type RouteTableArgs struct {
	// A list of virtual gateways for propagation.
	PropagatingVgws interface{}
	// A list of route objects. Their keys are documented below. This argument is processed in [attribute-as-blocks mode](https://www.terraform.io/docs/configuration/attr-as-blocks.html).
	Routes interface{}
	// A mapping of tags to assign to the resource.
	Tags interface{}
	// The VPC ID.
	VpcId interface{}
}
