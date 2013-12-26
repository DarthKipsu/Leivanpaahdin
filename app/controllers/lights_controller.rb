class LightsController < ApplicationController

	def home
		@hue = Hue.new
		@huetheme = Huetheme.new
	end

end