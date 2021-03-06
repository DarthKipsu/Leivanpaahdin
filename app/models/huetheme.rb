class Huetheme

	# Get groups and assign themes
	# 1=bedroom, 2=hall, 3=study (same as hue.rb)
	def group_themes
		group_themes = {
			'1' => Grouptheme.new(group1_themes),
			'2' => Grouptheme.new(group2_themes),
			'3' => Grouptheme.new(group3_themes)
		}		
	end

	# Themes for group1
	def group1_themes
		group1_themes = [
			Themename.new('Sleeping BR'),
			Themename.new('Reading BR')
		]
	end

	# Themes for group2
	def group2_themes
		group2_themes = [
			Themename.new('Welcome HL'),
			Themename.new('Nightlight HL')
		]
	end

	# Themes for group3
	def group3_themes
		group3_themes = [
			Themename.new('Working ST'),
			Themename.new('Max light ST'),
			Themename.new('Reading ST')
		]
	end

end

class Grouptheme

	attr_accessor :theme_name

	# get different themes fro each room
	def initialize(theme_name)
		@theme_name = theme_name
	end

end

class Themename

	attr_accessor :name

	# Give theme name to group themes
	def initialize(name)
		@name = name
	end

end