class Huetheme

	# Get groups and assign themes
	# 1=bedroom, 2=hall, 3=study (same as hue.rb)
	def group_themes
		group_themes = {
			'group1' => Grouptheme.new(group1_themes),
			'group2' => Grouptheme.new(group2_themes),
			'group3' => Grouptheme.new(group3_themes)
		}		
	end

	# Themes for group1
	def group1_themes
		group1_themes = [
			Themename.new('Theme11'),
			Themename.new('Theme12')
		]
	end

	# Themes for group2
	def group2_themes
		group2_themes = [
			Themename.new('Theme21'),
			Themename.new('Theme22'),
			Themename.new('Theme23')
		]
	end

	# Themes for group3
	def group3_themes
		group3_themes = [
			Themename.new('Theme31'),
			Themename.new('Theme32')
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