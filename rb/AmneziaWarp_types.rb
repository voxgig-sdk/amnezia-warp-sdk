# frozen_string_literal: true

# Typed models for the AmneziaWarp SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Configuration entity data model.
#
# @!attribute [rw] config
#   @return [Hash, nil]
#
# @!attribute [rw] path
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
Configuration = Struct.new(
  :config,
  :path,
  :status,
  keyword_init: true
)

# Request payload for Configuration#load.
#
# @!attribute [rw] config
#   @return [Hash, nil]
#
# @!attribute [rw] path
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
ConfigurationLoadMatch = Struct.new(
  :config,
  :path,
  :status,
  keyword_init: true
)

