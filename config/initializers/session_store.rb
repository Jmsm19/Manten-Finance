if Rails.env === 'production'
  Rails.application.config.session_store :cookie_store,
                                         key: '_authentication',
                                         domain:
                                           'https://manten-rails-finance.herokuapp.com'
else
  Rails.application.config.session_store :cookie_store, key: '_authentication'
end
