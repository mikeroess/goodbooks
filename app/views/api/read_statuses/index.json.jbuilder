@user.read_statuses.each do |read_status|
  json.set! read_status.book_id do
    json.status read_status.status
    json.readStatusId read_status.id
  end
end
