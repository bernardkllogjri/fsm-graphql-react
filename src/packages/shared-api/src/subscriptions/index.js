import { useSubscription } from "@apollo/react-hooks"
import NEW_NOTIFICATION from "./NEW_NOTIFICATION"

export default {
  newNotification: (data = {}) => useSubscription(NEW_NOTIFICATION, data),
}
