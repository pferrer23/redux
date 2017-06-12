// users
{
  type: AUTH_USER,
  uid,
}

{
  type: UNAUTH_USER,
}

{
  type: FETCHING_USER,
}

{
  type: FETCHING_USER_FAILURE,
  error: 'Error fetching user'
}

{
  type: FETCHING_USER_SUCCESS,
  uid,
  user,
  timestamp,
}

// ducks
{
  type: FETCHING_DUCK,
}

{
  type: FETCHING_DUCK_FAILURE,
  error: 'Error fetching duck'
}

{
  type: FETCHING_DUCK_SUCCESS,
  duck,
}

{
  type: REMOVE_FETCHING
}
{
  type: ADD_DUCK,
  duck,
}

{
  type: ADD_MULTIPLE_DUCK,
  ducks,
}

// feed
{
  type: SETTING_FEED_LISTENER,
}

{
  type: SETTING_FEED_LISTENER_FAILURE,
  error: 'Error fetching FEEDS'
}

{
  type: SETTING_FEED_LISTENER_SUCCESS,
  duckIds,
}

{
  type: ADD_NEW_DUCK_ID_TO_FEED
  duckId,
}

{
  type: RESET_NEW_DUCKS_AVAILABLE,
}

// listeners
{
  type: ADD_LISTENER,
  listenerId,
}

// modal
{
  type: OPEN_MODAL
}

{
  type: COLSE_MODAL
}

{
  type: UPDATE_DUCK_TEXT
  newDuckText,
}

// replies
{
  type: FETCHING_REPLIES,
}

{
  type: FETCHING_REPLIES_FAILURE,
  error: 'Error fetching REPLIES'
}

{
  type: FETCHING_REPLIES_SUCCESS,
  replies,
  duckId,
  lastUpdated: Date.now(),
}

{
  type: ADD_REPLY,
  duckId,
  reply,
}

{
  type: ADD_REPLY_FAILURE,
  error: 'Error adding reply'
}

{
  type: REMOVE_REPLY,
  replyId,
}

// likeCount
{
  type: FETCHING_COUNT,
}

{
  type: FETCHING_COUNT_FAILURE,
  error: 'Error fetching COUNT'
}

{
  type: FETCHING_COUNT_SUCCESS,
  duckId,
  count,
}

//users ducks
{
  type: FETCHING_DUCKS,
}

{
  type: FETCHING_DUCKS_FAILURE,
  error: 'Error fetching DUCKS'
}

{
  type: FETCHING_DUCKS_SUCCESS,
  uid,
  ducksIds,
  lastUpdated,
}

{
  type: ADD_SINGLE_USERS_DUCK,
  uid,
  ducksIds,
  lastUpdated,
}

//users likes
{
  type: FETCHING_LIKES,
}

{
  type: FETCHING_LIKES_FAILURE,
  error: 'Error fetching LIKES'
}

{
  type: FETCHING_LIKES_SUCCESS,
  LIKES,
}

{
  type: ADD_LIKE,
  duckiId,
}

{
  type: REMOVE_LIKE,
  duckiId,
}