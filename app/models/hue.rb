class Hue

	# Get groups and bulbs in differnet groups
	def groups
		groups = {
			'group1' => Huegroup.new('Bedroom', bedroom_bulbs),
			'group2' => Huegroup.new('Hall', hall_bulbs),
			'group3' => Huegroup.new('Study', study_bulbs)
		}		
	end

	# Select bulbs that belong in bedroom
	def bedroom_bulbs
		bedroom_bulbs = [
			Huebulb.new(1)
		]
	end

	# Select bulbs that belong in hall
	def hall_bulbs
		hall_bulbs = [
			Huebulb.new(5),
			Huebulb.new(6)
		]
	end

	# Select bulbs that belong in study
	def study_bulbs
		study_bulbs = [
			Huebulb.new(2),
			Huebulb.new(3),
			Huebulb.new(4)
		]
	end

end

class Huegroup

	attr_accessor :name, :bulbs

	# Give group names and bulb methods to Hue class
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