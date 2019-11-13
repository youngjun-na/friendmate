export const fetchSearchResult = query => (
  $.ajax({
    url: 'api/searches',
    method: 'GET',
    data: { query },
  })
)