require 'sinatra'

get '/' do
  erb :index
end

get '/:slide' do
  redirect "/##{params[:slide]}"
end
