package cordova.plugin.myplugin;

import android.widget.Toast;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaArgs;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONException;

import java.util.Random;

public class myplugin extends CordovaPlugin {

    @Override
    public boolean execute(String action, CordovaArgs args, CallbackContext callbackContext) throws JSONException {

        if ("toast".equals(action)) {
            String str = args.getString(0);
            System.out.print("myplugin");
            Toast.makeText(cordova.getActivity(), str, Toast.LENGTH_LONG).show();
            return true;
        }
        return super.execute(action, args, callbackContext);
    }

}
