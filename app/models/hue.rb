class Hue

	def groups
		groups = {
			'group1' => Huegroup.new('Bedroom', 1),
			'group2' => Huegroup.new('Study', 3)
		}		
	end

end

class Huegroup

	def initialize(name, bulbs)
		@name = name
		@bulbs = bulbs
	end

	def name
		@name		
	end

end