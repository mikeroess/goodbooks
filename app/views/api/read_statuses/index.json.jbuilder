json.readStatuses do
  json.partial! @user.read_statuses, partial 'api/read_statuses/read_status', as: :read_status
end
