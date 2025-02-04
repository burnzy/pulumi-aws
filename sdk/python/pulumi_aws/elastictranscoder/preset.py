# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class Preset(pulumi.CustomResource):
    arn: pulumi.Output[str]
    audio: pulumi.Output[dict]
    """
    Audio parameters object (documented below).
    """
    audio_codec_options: pulumi.Output[dict]
    """
    Codec options for the audio parameters (documented below)
    """
    container: pulumi.Output[str]
    """
    The container type for the output file. Valid values are `flac`, `flv`, `fmp4`, `gif`, `mp3`, `mp4`, `mpg`, `mxf`, `oga`, `ogg`, `ts`, and `webm`.
    """
    description: pulumi.Output[str]
    """
    A description of the preset (maximum 255 characters)
    """
    name: pulumi.Output[str]
    """
    The name of the preset. (maximum 40 characters)
    """
    thumbnails: pulumi.Output[dict]
    """
    Thumbnail parameters object (documented below)
    """
    type: pulumi.Output[str]
    video: pulumi.Output[dict]
    """
    Video parameters object (documented below)
    """
    video_codec_options: pulumi.Output[dict]
    video_watermarks: pulumi.Output[list]
    """
    Watermark parameters for the video parameters (documented below)
    * `video_codec_options` (Optional, Forces new resource) Codec options for the video parameters
    """
    def __init__(__self__, resource_name, opts=None, audio=None, audio_codec_options=None, container=None, description=None, name=None, thumbnails=None, type=None, video=None, video_codec_options=None, video_watermarks=None, __name__=None, __opts__=None):
        """
        Provides an Elastic Transcoder preset resource.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[dict] audio: Audio parameters object (documented below).
        :param pulumi.Input[dict] audio_codec_options: Codec options for the audio parameters (documented below)
        :param pulumi.Input[str] container: The container type for the output file. Valid values are `flac`, `flv`, `fmp4`, `gif`, `mp3`, `mp4`, `mpg`, `mxf`, `oga`, `ogg`, `ts`, and `webm`.
        :param pulumi.Input[str] description: A description of the preset (maximum 255 characters)
        :param pulumi.Input[str] name: The name of the preset. (maximum 40 characters)
        :param pulumi.Input[dict] thumbnails: Thumbnail parameters object (documented below)
        :param pulumi.Input[dict] video: Video parameters object (documented below)
        :param pulumi.Input[list] video_watermarks: Watermark parameters for the video parameters (documented below)
               * `video_codec_options` (Optional, Forces new resource) Codec options for the video parameters

        > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/elastictranscoder_preset.html.markdown.
        """
        if __name__ is not None:
            warnings.warn("explicit use of __name__ is deprecated", DeprecationWarning)
            resource_name = __name__
        if __opts__ is not None:
            warnings.warn("explicit use of __opts__ is deprecated, use 'opts' instead", DeprecationWarning)
            opts = __opts__
        if not resource_name:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(resource_name, str):
            raise TypeError('Expected resource name to be a string')
        if opts and not isinstance(opts, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        __props__['audio'] = audio

        __props__['audio_codec_options'] = audio_codec_options

        if container is None:
            raise TypeError("Missing required property 'container'")
        __props__['container'] = container

        __props__['description'] = description

        __props__['name'] = name

        __props__['thumbnails'] = thumbnails

        __props__['type'] = type

        __props__['video'] = video

        __props__['video_codec_options'] = video_codec_options

        __props__['video_watermarks'] = video_watermarks

        __props__['arn'] = None

        super(Preset, __self__).__init__(
            'aws:elastictranscoder/preset:Preset',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

