<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;

class InitializeApplication extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:init';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Initialises the application for the first run.';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $this->createDatabaseFile();
    }

    private function createDatabaseFile()
    {
        $filePath = database_path('database.sqlite');

        if (!File::exists($filePath)) {
            $this->info('Creating sqlite database');

            File::put($filePath, '');
        }
    }
}
