#include "Display.h"
#include "math.h"

const int BUTTON_FASTFORWARD_PIN = 8;
const int BUTTON_START_PIN = 9;

const int PRESET_TIMETABLE[5] = {20, 15, 10, 17, 30};

void setup() {
  // put your setup code here, to run once:
  pinMode(BUTTON_START_PIN, INPUT_PULLUP);
  pinMode(BUTTON_FASTFORWARD_PIN, INPUT_PULLUP);
  Serial.begin(9600);
}

int c_time(long time, long i) {
  return (((time-i)/1000)/60)*100+((time-i)/1000)%60;
}

void timer(int time) {
  long remaining_time=time*60000;
  for (long i=0; i<time*60000; i+=10) {
    int fastforward_button = digitalRead(BUTTON_FASTFORWARD_PIN);
    if(fastforward_button == LOW) {
      i+=1000;
    }
    Serial.println("COOKING");
    Serial.println(c_time(remaining_time, i));
    Display.show(c_time(remaining_time, i));
  }

}

void loop() {
  Display.show(c_time(millis(),0));

  bool oven_is_active=false;
  int start_button = digitalRead(BUTTON_START_PIN);
  if(start_button == LOW) {
    oven_is_active = true;
  }

  
  while (oven_is_active) {
    timer(PRESET_TIMETABLE[1]);
    Serial.println("DONE");
    oven_is_active = false;
  }

}
