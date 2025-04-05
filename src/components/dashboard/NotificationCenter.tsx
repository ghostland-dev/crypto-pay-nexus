
import { useState } from "react";
import { Bell, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";

interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
  type: 'info' | 'warning' | 'success';
}

const NotificationCenter = () => {
  const { toast } = useToast();
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      title: 'Nouvelle transaction',
      message: 'Vous avez reçu 0.05 BTC dans votre portefeuille principal.',
      time: 'Il y a 10 minutes',
      read: false,
      type: 'success'
    },
    {
      id: '2',
      title: 'Mise à jour de sécurité',
      message: 'Veuillez mettre à jour vos préférences de sécurité.',
      time: 'Il y a 2 heures',
      read: false,
      type: 'warning'
    },
    {
      id: '3',
      title: 'Nouveau taux d\'échange',
      message: 'Les taux de conversion EUR/BTC ont été mis à jour.',
      time: 'Hier',
      read: true,
      type: 'info'
    }
  ]);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (id: string) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
    toast({
      title: "Notifications",
      description: "Toutes les notifications ont été marquées comme lues",
    });
  };

  const deleteNotification = (id: string) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const getTypeStyles = (type: 'info' | 'warning' | 'success') => {
    switch (type) {
      case 'success':
        return 'bg-green-100 dark:bg-green-900/20 border-l-4 border-green-500';
      case 'warning':
        return 'bg-yellow-100 dark:bg-yellow-900/20 border-l-4 border-yellow-500';
      case 'info':
      default:
        return 'bg-blue-100 dark:bg-blue-900/20 border-l-4 border-blue-500';
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-red-500 text-[10px] text-white flex items-center justify-center">
              {unreadCount}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0" align="end">
        <div className="flex items-center justify-between p-4 bg-muted/50">
          <h3 className="font-medium">Notifications</h3>
          {unreadCount > 0 && (
            <Button 
              variant="ghost" 
              size="sm"
              onClick={markAllAsRead}
              className="text-xs h-8"
            >
              Tout marquer comme lu
            </Button>
          )}
        </div>
        <Separator />
        <div className="max-h-80 overflow-y-auto">
          {notifications.length > 0 ? (
            notifications.map((notification) => (
              <div 
                key={notification.id} 
                className={`p-4 ${notification.read ? 'opacity-70' : ''} ${getTypeStyles(notification.type)}`}
              >
                <div className="flex justify-between items-start">
                  <h4 className="font-medium text-sm">{notification.title}</h4>
                  <div className="flex space-x-1">
                    {!notification.read && (
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-5 w-5"
                        onClick={() => markAsRead(notification.id)}
                      >
                        <Check className="h-3 w-3" />
                        <span className="sr-only">Marquer comme lu</span>
                      </Button>
                    )}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-5 w-5"
                      onClick={() => deleteNotification(notification.id)}
                    >
                      <X className="h-3 w-3" />
                      <span className="sr-only">Supprimer</span>
                    </Button>
                  </div>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">{notification.message}</p>
                <p className="text-xs text-gray-400 mt-2">{notification.time}</p>
              </div>
            ))
          ) : (
            <div className="p-4 text-center text-sm text-gray-500">
              Aucune notification
            </div>
          )}
        </div>
        <Separator />
        <div className="p-2">
          <Button variant="outline" size="sm" className="w-full text-xs">
            Voir toutes les notifications
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default NotificationCenter;
