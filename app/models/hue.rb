class Hue

	# Get groups and bulbs
	def groups
		groups = {
			'group1' => Huegroup.new('Bedroom', bedroom_bulbs),
			'group2' => Huegroup.new('Study', study_bulbs)
		}		
	end

	# Select bulbs that belong in bedroom
	def bedroom_bulbs
		bedroom_bulbs = [
			Huebulb.new(1)
		]
	end

	# Select bulbs that belong in study
	def study_bulbs
		study_bulbs = [
			Huebulb.new(2),
			Huebulb.new(3)
		]
	end

end

class Huegroup

	attr_accessor :name, :bulbs

	# Give group names to Hue class
	def initialize(name, bulbs)
		@name = name
		@bulbs = bulbs
	end


end

class Huebulb

	attr_accessor :id

	# Give bulb id to Hue class
	def initialize(id)
		@id = id
	end

end